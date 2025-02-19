import express from "express";
import { createBloodInventory, getBloodInventory, updateBloodInventory, deleteBloodInventory } from "./controller.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

const router = express.Router();

router.post("/create-bloodinventory",checkUserAuth,  createBloodInventory); // Create blood inventory
router.get("/get-all-bloodinventory", checkUserAuth, getBloodInventory); // Get blood inventory
router.post("/bloodInventory/update/:bloodInventoryID", checkUserAuth, updateBloodInventory); // Update blood inventory
router.post("/bloodInventory/delete/:bloodInventoryID", checkUserAuth, deleteBloodInventory); // Delete blood inventory

export default router;
