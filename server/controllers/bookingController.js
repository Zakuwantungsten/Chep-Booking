import Booking from "../models/booking.js";
import Room from './../models/room.js';
import House from './../models/house.js';

// Function to Check Availability of room
const checkAvailability = async ({checkInDate, checkOutDate, room})=> {
    try {
        const bookings = await Booking.find({
            room,
            checkInDate: {$lte: checkOutDate},
            checkOutDate: {$gte: checkInDate},
        });
        const isAvailable = bookings.length === 0;
        return isAvailable;
    } catch (error) {
        console.error(error.message);
    }
}

// Api to check availability of room
// Post api/bookings/check-availability
export const checkAvailabilityAPI = async(req, res)=> {
    try {
        const {room, checkInDate, checkOutDate} = req.body;
        const isAvailable = await checkAvailability({checkInDate, checkOutDate, room});
        res.json({success: true, isAvailable})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// api to create a new booking
//Post /api/bookings/book
export const createBooking = async (req, res)=>{
    try {
        const {room, checkInDate, checkOutDate, roommates} = req.body;
        const user = req.user._id;

        //Before Booking Check Availability
        const isAvailable = await checkAvailability({
            checkInDate,
            checkOutDate,
            room
        });
        if(!isAvailable){
            return res.json({success: false, message: "Room is not available"})
        }
        // Get totalPrice from Room
        const roomDate = await Room.findById(room).populate("house");
        let totalPrice = roomDate.pricePerMonth;

        //Calculate totalPrice based on nights
        const checkIn = new Date(checkInDate)
        const checkOut = new Date(checkOutDate)
        const timeDiff = checkOut.getTime() - checkIn.getTime();
        const Months = Math.ceil(timeDiff/(1000 * 3600 * 24));

        totalPrice *=Months;
        const booking = await Booking.create({
            user, 
            room,
            house: roomData.house._id,
            roommates: +roommates,
            checkInDate,
            checkOutDate,
            totalPrice
        })
        res.json({success: true, message: "Booking Created successfully"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Failed to create Booking"})
    }
};

// Api to get all bookings for a user
// Get /api/bookings/user
export const getUserBookings = async (req, res) => {
    try {
        const user = req.user._id;
        const bookings = await Booking.find({user}).populate("room house").sort({createdAt: -1})
        res.json({success: true, bookings})
    } catch (error) {
        res.json({success: false, message: "Failed to fetch bookings"});
    }
}


export const getHouseBookings = async (req, res) => {
   try {
     const house = await House.findOne({owner: req.auth.userId});
    if(!house){
        return res.json({success: false, message: "No House Found"});
    }
     const bookings = await Booking.find({house: house._id}).populate("room house user").sort({createdAt: -1});
     // total bookings
     const totalBookings = bookings.length;
     //total Revenue
     const totalRevenue = bookings.reduce((acc, booking) + acc + booking.totalPrice, 0)

     res.json({success: true, dashboardData: totalBookings, totalRevenue, bookings})
   } catch (error) {
    res.json({success: false, message: "Failed to fetch bookings" })
   } 
}