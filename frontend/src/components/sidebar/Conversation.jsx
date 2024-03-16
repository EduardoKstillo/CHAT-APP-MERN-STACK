import { BiCheckDouble } from "react-icons/bi";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center cursor-pointer w-full h-[5.75rem] px-5 py-6 mb-1 rounded focus:bg-indigo-50 hover:bg-indigo-50 focus:outline-none transition duration-500 ease-out">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex flex-col justify-between">
            <div className="text-gray-500 text-sm font-semibold">
              Eduardo Castillo{" "}
            </div>
            <div className="text-gray-400 text-sm">hola como estas </div>
          </div>
        </div>
        <BiCheckDouble color="#43CDFE" />
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};
export default Conversation;
