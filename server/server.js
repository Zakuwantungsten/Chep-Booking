import express from "express"
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import houseRouter from "./routes/houseRoutes.js";
import connectCloudinary from "./config/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";


connectDB()
connectCloudinary();

const app = express()

app.use(cors()) // Enable Cross-Origin Resource sharing

//middleware 
app.use(express.json())
app.use(clerkMiddleware())

//api to listen to clerk webhooks
app.use("/api/clerk", clerkWebhooks)

app.get('/', (req, res)=> res.send("Api is working"))
app.use('/api/user', userRouter)
app.use('/api/houses', houseRouter)
app.use('/api/rooms', roomRouter)
app.use('/api/bookings', bookingRouter )


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));