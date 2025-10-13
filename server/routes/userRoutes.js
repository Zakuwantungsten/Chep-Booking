import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getUserData, storeRecentSearchedPlaces } from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.get('/', protect, getUserData);
userRouter.get('/store-recent-search', protect, storeRecentSearchedPlaces);




export default userRouter;
