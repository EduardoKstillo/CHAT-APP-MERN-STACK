import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

// Create an instance of an Express router

const router = express.Router();

router.post("/send/:receiverId", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);

export default router;