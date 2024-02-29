import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  
  try {

    const { receiverId: receiverId } = req.params; // ID of the user who receives the message
    const { message } = req.body; // message
    const senderId = req.user._id; // ID of the user who sends the message

    console.log(req.user._id)

    // Check if the conversation already exists
    let conversation = await Conversation.findOne({
      participantsIds: { $all: [senderId, receiverId] },
    });

    // If the conversation does not exist, create it
    if (!conversation) {
      conversation = await Conversation.create({
        participantsIds: [senderId, receiverId],
      });
    }
  
    // Create a new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // Save the message in the conversation
    if (newMessage){
      conversation.messages.push(newMessage._id);
    }

    // This will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMessages = async (req, res) => {
  try {

    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // find a conversation with sender ID and receiver ID
    const conversation = await Conversation.findOne({ 
      participantsIds: { $all: [senderId, receiverId] },
     }).populate("messages");  // populate -> gets all the content of the messages and not just the IDs
     
     if (!conversation) return res.status(200).json([]);

     const messages = conversation.messages;

     return res.status(200).json(messages);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};  