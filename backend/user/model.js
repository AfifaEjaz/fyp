

import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, required: true, default: "user" }, // guest, user, organization, admin

    // Organization-specific fields
    location: [{ type: mongoose.Schema.Types.ObjectId, ref: "location" }],
    bloodInventory: [{ type: mongoose.Schema.Types.ObjectId, ref: "BloodInventory" }],
    booking: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],

    tc: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now }
});

const user = model("users", userSchema);
export default user;
