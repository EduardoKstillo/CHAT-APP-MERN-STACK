import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

// Load the environment variables defined in the .env file into the process.env object
dotenv.config();

// to parse the incoming requests with JSON payloads (from req.body)
app.use(express.json());

// Set the port of our application
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello world!")
});

// Define a new route for our application
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}...`)
});
