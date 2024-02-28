import express from "express";
import { sendMessage } from "../controllers/message.controller.js";

// Create an instance of an Express router

const router = express.Router();

router.post("/send/:id", sendMessage);

export default router;