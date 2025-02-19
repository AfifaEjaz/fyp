import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const bloodInventorySchema = new mongoose.Schema({
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    bloodType: {
        type: String,
        required: true
    }, 
    quantity: {
        type: Number,
        required: true
    }, 
    updatedAt: { type: Date, default: Date.now }
});

const BloodInventory = model("BloodInventory", bloodInventorySchema)
export default BloodInventory
