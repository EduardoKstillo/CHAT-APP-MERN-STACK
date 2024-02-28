import express from "express";
import { login, signup, logout } from "../controllers/auth.controller.js";

// Create an instance of an Express router
const router = express.Router();

// Define a route for the controller's signup function
router.post("/signup", signup);

// Define a route for the controller's logout function
router.post("/login", login);

// Define a route for the controller's logout function
router.post("/logout", logout);

export default router;