

import { mongoose, Schema, model } from "mongoose";

const locationSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type : Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

const locationModel = model("location", locationSchema)
export default locationModel