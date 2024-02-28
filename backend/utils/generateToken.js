import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (user, res) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: 3600,
  });
  res.cookie("jwt", token, {
    maxAge: 3600, // 1 hour
    httpOnly: true, // Prevent XSS attacks
    sameSite: true, // CSRF protection
    secure: process.env.NODE_ENV === "production",
  });
};

export default generateTokenAndSetCookie;