import mongoose from "mongoose";

// Create a new schema
const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Create the model for messages and expose it to our app 
const Message = mongoose.model("Message", messageSchema);

export default Message;

// { timestamps: true } -> to keep the timestamps in the database (createdAt, updatedAt)