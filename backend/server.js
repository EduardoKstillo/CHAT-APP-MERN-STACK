import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

// Set the port of our application
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ["https://localhost:3000", "http://localhost:5173"],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Load the environment variables defined in the .env file into the process.env object
dotenv.config();

// to parse the incoming requests with JSON payloads (from req.body)
app.use(express.json());

// to parse the incoming requests with URL-encoded payloads (from req.query)
app.use(cookieParser());

// Define a new route for our application
app.use("/api/auth", authRoutes);

// Define a new route for our application
app.use("/api/messages", messageRoutes);

// Define a new route for our application
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}...`)
});
