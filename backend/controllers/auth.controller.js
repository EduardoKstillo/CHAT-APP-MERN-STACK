import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    // Destructure the request body from the request
    const { fullName, username, password, confirmPassword, gender } = req.body;

    // Check if the password and confirm password are correct
    if (password!== confirmPassword) {
      // If the passwords do not match, return an error
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if the user already exists
    const user = await User.findOne({ username }); 
    if (user) {
      // If the user already exists, return an error
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password using HMAC algorithm
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // Create a new user object
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender === "male"? boyProfilePicture : girlProfilePicture,
    });

    if (newUser) {
      // Save the new user
      newUser.save();

      generateTokenAndSetCookie(newUser, res);

      // Return the newly created user
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profilePicture: newUser.profilePicture,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }

  } catch (error) {
    console.log("Error in signup controller: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try{
    const { username, password } = req.body;
    const user = await User.findOne({ username })
    const passwordIsValid = await bcrypt.compare(password, user?.password || "" );
    
    // if user not exists or password is invalid, return an error
    if (!user || !passwordIsValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate token and set cookie
    generateTokenAndSetCookie(user, res);

    // Return the logged in user
    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      gender: user.gender,
      profilePicture: user.profilePicture,
    });
  }
  catch (error) {
    console.log("Error in login controller: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {

  try{
    // Clear the cookie
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logged out successfully" });
  }
  catch (error) {
    console.log("Error in logout controller: ", error.message);
    res.status(500).json({ error: error.message });
  }

};