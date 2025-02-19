import express from 'express'
const router = express.Router()
import { getLocations, createLocation, getLocationByBG} from "./controller.js";
import checkUserAuth from '../middlewares/auth-middleware.js';

router.get("/all-Locations", getLocations)
router.post("/add-location", checkUserAuth, createLocation)
router.post("/location-by-bloodGroup", getLocationByBG)
// router.post("/updateexpense", updateExpense)
// router.post("/deleteexpense", deleteExpense)

export default router