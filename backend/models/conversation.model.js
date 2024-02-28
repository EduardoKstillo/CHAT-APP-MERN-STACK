import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  participantsIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messagesIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
}, { timestamps: true });

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;