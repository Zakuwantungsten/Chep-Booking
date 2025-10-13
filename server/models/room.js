import mongoose, { mongo } from "mongoose";

const roomSchema = new mongoose.Schema({
   house: {
    type: String, 
    ref: "House"
   },
   roomType: {
    type: String,
    required: true
   },
   pricePerMonth: {
    type: Number,
    required: true
   },
   amenities: {
    type: Array,
    required: true
   },
   images: [{
    type: String
   }],
   isAvailable: {
    type: Boolean, 
    default: true
   },
}, {timestamps: true});

const Room = mongoose.model("Room", roomSchema);

export default Room;