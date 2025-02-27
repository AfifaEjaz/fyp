import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const bookingSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", required: true
    }, // User who booked
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", required: true
    }, // Blood bank
    username: {
        type: String,
        required: true
    },
    useremail: {
        type: String,
        required: true
    },
    bloodType: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Reserved", "Expired", "Delivered"],
        default: "Reserved"
    },
    bookedAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 60 * 60 * 1000) // 1 hour from now
    }
});

const Booking = model("Booking", bookingSchema);
export default Booking;