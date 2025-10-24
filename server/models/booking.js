import mongoose, { mongo } from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
        type: String, 
        ref: "User",
        required: true
    },
    room: {
        type: String, 
        ref: "Room",
        required: true
    },
    house: {
        type: String, 
        ref: "House",
        required: true
    },
    checkInDate: {
        type: Date, 
        required: true
    },
    checkOutDate: {
        type: Date, 
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    RoomMates: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    },
    paymentMethod: {
        type: String,
        required: true,
        default: "Pay At Upon Getting there"
    },
    isPaid: {
        type: Boolean,
        default: false
    }

   
}, {timestamps: true});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;