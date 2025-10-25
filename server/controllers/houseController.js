import House from "../models/house.js";
import User from "../models/user.js";


export const registerHouse = async (req, res)=>{
    try {
        const {name, address, contact, place} = req.body;
        const owner = req.user._id

        // check if user is already registered
        const house = await House.findOne({owner})
        if(house){
            return res.json({success: false, message: "House Already Registered" })
        }
        await House.create({name, address, contact, place, owner});
         
        await User.findByIdAndUpdate(owner, {role: "houseOwner"})

        res.json({success: true, message: "House Registered Successfully"})
    } catch (error) {
         res.json({success: false, message: error.message})
    }
}

