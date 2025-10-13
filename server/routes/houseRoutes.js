import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerHouse } from "../controllers/houseController.js";


const houseRouter = express.Router();

houseRouter.post('/', protect, registerHouse);


export default houseRouter;