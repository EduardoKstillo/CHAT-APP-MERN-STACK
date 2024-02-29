import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {

    // Get the token from the cookies
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized - No token provided" });
    }

    // Decode and verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }

    // Get the user from the decoded token
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Set the user in the request
    req.user = user;

    // Continue to the next middleware
    next();

  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;