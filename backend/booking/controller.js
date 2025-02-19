import Booking from "./model.js";

// Create a new booking request
export const createBooking = async (req, res) => {
    try {
        const { organizationId } = req.params;
        const { username, useremail, bloodType, quantity } = req.body;

        // Validate required fields
        if (!username || !useremail || !bloodType || !quantity) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create new booking using Booking.create()
        const newBooking = await Booking.create({
            user: req.user._id,
            organization: organizationId,
            username,
            useremail,
            bloodType,
            quantity,
            expiresAt: new Date(Date.now() + 60 * 60 * 1000) // 1 hour from now
        });

         // Add the new booking to the organization's bloodInventory list
         const organization = await user.findByIdAndUpdate(
            req.user.id,
            { $push: { booking: newBooking._id } }, // Add booking reference to organization
            { new: true } // Return the updated organization document
        );

        if (!organization) {
            return res.status(404).json({ error: "Organization not found" });
        }

        return res.status(201).json({ message: "Booking created successfully.", booking: newBooking });
    } catch (error) {
        console.error("Error creating booking:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
};


export const getOrganizationBookings = async (req, res) => {
    try {
        const { organizationId } = req.params; // Get organization ID from URL

        if (!organizationId) {
            return res.status(400).json({ message: "Organization ID is required." });
        }

        const bookings = await Booking.find({ organization: organizationId }).sort({ createdAt: -1 });

        return res.status(200).json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}