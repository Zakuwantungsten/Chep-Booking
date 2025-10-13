import mongoose, { mongo } from "mongoose";

const houseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true,
        ref:"User"
    },
    place: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const House = mongoose.model("house", houseSchema);

export default House;