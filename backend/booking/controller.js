import Booking from "./model.js";
import user from "../user/model.js";

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

        return res.status(201).json({ message: "Booking created successfully.", booking: newBooking, organization });
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

export const updateBookingStatus = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { status } = req.body;

        // Validate status input
        if (!["Reserved", "Expired", "Delivered"].includes(status)) {
            return res.status(400).json({ message: "Invalid status. Allowed values: Reserved, Expired, Delivered" });
        }

        // Find and update booking
        const updatedBooking = await Booking.findByIdAndUpdate(
            bookingId,
            { status },
            { new: true } // Return the updated document
        );

        if (!updatedBooking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        return res.status(200).json({ message: "Booking status updated successfully", booking: updatedBooking });
    } catch (error) {
        console.error("Error updating booking status:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;

        const booking = await Booking.findOneAndDelete(
            { _id: bookingId }
        );

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        // Remove the booking reference from the organization's booking list
        const organization = await user.findByIdAndUpdate(
            req.user.id,
            { $pull: { booking: bookingId } }, // Remove booking reference
            { new: true }
        ).populate('booking');

        if (!organization) {
            return res.status(404).json({ error: "Organization not found" });
        }

        // const bookings = await Booking.find();
        const bookings = await Booking.find({ organization: req.user.id }).sort({ createdAt: -1 });


        return res.status(200).json({
            message: "booking deleted successfully",
            booking: bookings
        })
    } catch (error) {
        console.error("Error deleting booking:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};