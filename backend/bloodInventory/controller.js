import BloodInventory from "./model.js";
import user from "../user/model.js";

// Create a new blood inventory (using `create` query)
export const createBloodInventory = async (req, res) => {

    try {
        // Extract blood type and quantity from the request body
        const { bloodType, quantity } = req.body;

        console.log(bloodType, quantity);
        console.log(typeof quantity);

        // Create new blood inventory using Mongoose query
        const newBloodInventory = await BloodInventory.create({ bloodType, quantity });
        const updatedBloodInventory = await BloodInventory.find()

        console.log("ye hai new blood inventory", newBloodInventory);
        // Add the new blood inventory to the organization's bloodInventory list
        const organization = await user.findByIdAndUpdate(
            req.user.id,
            { $push: { bloodInventory: newBloodInventory._id } }, // Add blood inventory reference to organization
            { new: true } // Return the updated organization document
        ).populate('bloodInventory');

        if (!organization) {
            return res.status(404).json({ error: "Organization not found" });
        }

        console.log(organization);
        // console.log(organization.populate("bloodInventory"));
        // const currOrg = organization.populate("bloodInventory")
        // console.log(currOrg);

        return res.status(201).json({
            message: "Blood inventory added successfully!",
            bloodInventory: organization.bloodInventory,
        });
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong!" });
    }
};

// Get all blood inventories for an organization (using `populate`)
export const getBloodInventory = async (req, res) => {
    try {
        // Find the organization and populate its blood inventory references
        const organization = await user.findById(req.user.id)
            .populate("bloodInventory");

        if (!organization) {
            return res.status(404).json({ error: "Organization not found" });
        }

        return res.status(200).json({ bloodInventory: organization.bloodInventory });
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong!" });
    }
};

// Update the quantity of an existing blood inventory (using `findOneAndUpdate`)
export const updateBloodInventory = async (req, res) => {
    try {
        let { bloodInventoryID } = req.params;
        const { bloodType, quantity } = req.body;

        if (!bloodInventoryID || !bloodType || quantity === undefined) {
            return res.status(400).json({ error: "Fields are required" });
        }

        // Convert bloodInventoryID to ObjectId if not already
        if (!mongoose.Types.ObjectId.isValid(bloodInventoryID)) {
            return res.status(400).json({ error: "Invalid blood inventory ID" });
        }
        bloodInventoryID = new mongoose.Types.ObjectId(bloodInventoryID);

        // Corrected update for BloodInventory
        const updatedBloodInventory = await BloodInventory.findOneAndUpdate(
            { _id: bloodInventoryID },
            { $set: { bloodType, quantity } }, // Ensure you are using $set
            { new: true }
        );

        console.log("Updated blood inventory: ", updatedBloodInventory);

        if (!updatedBloodInventory) {
            return res.status(404).json({ error: "Blood inventory not found" });
        }

        // Update the quantity inside the organization’s bloodInventory array
        const organization = await user.findOneAndUpdate(
            { _id: req.user.id, "bloodInventory._id": bloodInventoryID },
            { $set: { "bloodInventory.$.bloodType": bloodType, "bloodInventory.$.quantity": quantity } },
            { new: true }
        );

        if (!organization) {
            return res.status(404).json({ error: "Organization not found or blood inventory missing" });
        }

        // Fetch all updated blood inventories
        const bloodInventoryList = await BloodInventory.find();

        return res.status(200).json({
            message: "Blood inventory updated successfully",
            updatedBloodInventory,
            organization,
            bloodInventory: bloodInventoryList,
        });
    } catch (error) {
        console.error("Error updating blood inventory:", error);
        return res.status(500).json({ error: "Something went wrong!" });
    }
};



// Delete a blood inventory (using `findOneAndDelete`)
export const deleteBloodInventory = async (req, res) => {
    try {
        const { bloodInventoryID } = req.params;

        console.log(bloodInventoryID);

        // Delete the blood inventory using `findOneAndDelete`
        const deletedBloodInventory = await BloodInventory.findOneAndDelete(
            { _id: bloodInventoryID }
        );

        if (!deletedBloodInventory) {
            return res.status(404).json({ error: "Blood inventory not found" });
        }

        // Remove the reference from the organization's blood inventory list
        const organization = await user.findByIdAndUpdate(
            req.user.id,
            { $pull: { bloodInventory: bloodInventoryID } }, // Remove blood inventory reference from organization
            { new: true }
        ).populate('bloodInventory');

        if (!organization) {
            return res.status(404).json({ error: "Organization not found" });
        }

        const bloodInventory = await BloodInventory.find();

        return res.status(200).json({
            message: "Blood inventory deleted successfully",
            bloodInventory: organization.bloodInventory
        });
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong!" });
    }
};
