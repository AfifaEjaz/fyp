import express from "express";
import { createBooking, getOrganizationBookings } from "./controller.js";
import checkUserAuth from '../middlewares/auth-middleware.js';

const router = express.Router();

router.post("/create-booking/:organizationId", checkUserAuth, createBooking); // User books an appointment
// router.get("/user", verifyToken, getUserBookings); // User gets their bookings
router.get("/get-bookings/:organizationId", checkUserAuth, getOrganizationBookings); // Organization gets all bookings
// router.put("/update/:bookingId", checkUserAuth, updateBookingStatus); // Organization updates booking status
// router.post("/delete/:bookingId", checkUserAuth, updateBookingStatus); // Organization updates booking status


export default router;
