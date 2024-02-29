import User from "../models/user.model.js";

export const getUsers = async (req, res) => {

  try {
    // ID of the logged in user
    const loggedInUser = req.user._id;

    // Find all users except the logged in user
    const users = await User.find({ _id: {$ne: loggedInUser } }).select("-password");

    // Return the users
    return res.status(200).json(users);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

}