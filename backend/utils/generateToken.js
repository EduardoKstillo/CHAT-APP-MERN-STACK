import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: 3600,
  });
  res.cookie("jwt", token, {
    maxAge: 3600, // 1 hour
    httpOnly: true, // Prevent XSS attacks
    sameSite: "strict", // CSRF protection
    secure: process.env.NODE_ENV === "production",
  });
};

export default generateTokenAndSetCookie;