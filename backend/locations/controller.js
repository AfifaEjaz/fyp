import locationModel from "./model.js";
import user from "../user/model.js";
import BloodInventory from "../bloodInventory/model.js";

export async function createLocation(req, res) {

    try {
        const { lat, lon, address } = req.body;

        // Ensure the user is an organization (auth middleware must provide `req.user`)
        if (!req.user || req.user.role !== "organization") {
            return res.status(403).json({ message: "Only organizations can add locations." });
        }

        // Organization ID from logged-in user
        const organizationId = req.user._id;

        // Validate required fields
        if (!lat || !lon || !address) {
            return res.status(400).json({ message: "Latitude, longitude, and address are required." });
        }

        // Create the location
        const newLocation = await locationModel.create({
            lat,
            lon,
            address,
            organization: organizationId
        });

        // Update organization: Add location to its `location` array
        await user.findByIdAndUpdate(
            organizationId,
            { $push: { location: newLocation._id } },
            { new: true }
        );

        res.status(201).json({
            message: "Location added successfully!",
            location: newLocation
        });

    } catch (error) {
        console.error("Error adding location:", error);
        res.status(500).json({ message: "Internal server error" });
    }


}


//Get Locations
export async function getLocations(req, res) {
    try {
        const result = await locationModel.find()
        console.log("Locations fetched")
        res.status(201).json({
            message: "Locations fetched Successfully",
            result
        })
    } catch (error) {
        console.error("Error fetching Locations:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// Get Location by Blood Group
export async function getLocationByBG(req, res) {

    const { bloodGroup } = req.query;
    console.log(bloodGroup);

    if (!bloodGroup) {
        return res.status(400).json({ message: "Blood group is required" });
    }

    try {
        // Step 1: Find all blood inventory entries matching the blood group
        const bloodInventories = await BloodInventory.find({ bloodType: bloodGroup });

        if (!bloodInventories || bloodInventories.length === 0) {
            return res.status(404).json({ message: `No blood inventory found for blood group ${bloodGroup}` });
        }

        console.log("Blood inventories:", bloodInventories);

        // Extract all matching blood inventory IDs
        const bloodInventoryIds = bloodInventories.map(blood => blood._id);

        // Step 2: Find all organizations that have any of these blood inventory IDs
        const organizations = await user.find({
            bloodInventory: { $in: bloodInventoryIds } // Match any organization that has these blood inventory IDs
        }).populate('location') // Populate the location field
         .populate('bloodInventory'); // Populate the bloodInventory field;

        if (!organizations || organizations.length === 0) {
            return res.status(404).json({ message: `No organizations found with blood inventory for blood group ${bloodGroup}` });
        }

        console.log("Organizations with matching blood inventory:", organizations);

        // Extract all organization IDs
        const organizationIds = organizations.map(org => org._id);
        console.log("organizations idss", organizationIds);

        // Step 3: Find locations related to these organizations
        const result = await locationModel.find({
            organization: { $in: organizationIds }  // Match locations by organization IDs
        })
        console.log(result)
        // .populate({
        //     path: 'organization',
        //     model: 'user',  // Explicitly specify the model name
        //     select: 'name location' 
        // });

        if (!result || result.length === 0) {
            return res.status(404).json({ message: `No locations found for blood group ${bloodGroup}` });
        }

        res.status(200).json({
            message: "Locations fetched successfully",
            result,
            organizations,
        });
    } catch (error) {
        console.error("Error fetching locations:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
    // const { bloodGroup } = req.query;
    // console.log(bloodGroup);

    // if (!bloodGroup) {
    //     return res.status(400).json({ message: "Blood group is required" });
    // }

    // try {
    //     const result = await locationModel.find({ bloodGroup });
    //     console.log(result);
    //     if (!result || result == null) {
    //         return res.status(404).json({
    //             message: `No locations found for blood group ${bloodGroup}`,
    //         });
    //     }

    //     res.status(200).json({
    //         message: "Locations fetched successfully",
    //         result,
    //     });
    // } catch (error) {
    //     console.error("Error fetching locations:", error);
    //     return res.status(500).json({ message: "Internal server error" });
    // }
}

