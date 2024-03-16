import { BsFillSendFill } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full  flex">
        <input
          type="text"
          className="text-sm block w-full h-10 px-5 border outline-none rounded-sm text-black focus:ring focus:ring-indigo-200 duration-200 transition ease-out text-opacity-70 border-none bg-gray-100"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className=" inset-y-0 end-0 flex items-center px-3"
        >
          <BsFillSendFill color="#818CF8" size={25} />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
