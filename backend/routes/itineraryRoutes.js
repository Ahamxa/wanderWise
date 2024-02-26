import express from "express";
import { itineraryController } from "../controllers/itineraryController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();



//get itinerary
router.post("/get-itinerary", requireSignIn, itineraryController);



export default router;