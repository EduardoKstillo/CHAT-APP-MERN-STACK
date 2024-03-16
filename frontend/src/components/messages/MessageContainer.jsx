import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <div className="flex px-5 py-2 gap-2">
        <div className="w-14 rounded-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="user avatar"
          />
        </div>
        <div className="py-2 text-sm font-semibold">
          <p className=" text-gray-500">Eduardo Castillo</p>
          <p>Last seen Dec 16, 2019</p>
        </div>
      </div>

      <Messages />
      <MessageInput />
    </div>
  );
};
export default MessageContainer;
