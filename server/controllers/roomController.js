import House from "../models/house"
// api to create to create a new room for a house

export const createRoom = async (req, res) =>{
    try {
        const {roomType, pricePerMonth, amenities} = req.body;
        const house = await House.findOne({owner: req.auth.userId})

        if(!house) return res.json({success: false, message: "No House Found"});
    } catch (error) {
        
    }
}

//api to get all rooms
export const getRooms = async (req, res) =>{
    
}

//api to get all rooms for a specific house
export const getOwnerRooms = async (req, res) =>{
    
}

//api to toggle room availability
export const toggleRoomAvailability = async (req, res) =>{
    
}

