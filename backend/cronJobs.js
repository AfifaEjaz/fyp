import cron from "node-cron";
import Booking from "./booking/model.js";

console.log("cron jobs runnning");

cron.schedule("* * * * *", async () => {
    try {
        const now = new Date();
        const result = await Booking.updateMany(
            { expiresAt: { $lt: now }, status: "Reserved" },  // ✅ Only update "Reserved" bookings
            { $set: { status: "Expired" } }
        );
        console.log(`✅ Expired bookings updated: ${result.modifiedCount}`);
    } catch (error) {
        console.error("❌ Error updating expired bookings:", error);
    }
});
