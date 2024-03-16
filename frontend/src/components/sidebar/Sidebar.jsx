import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

import { FaHome } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdModeNight } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
      <div className="hidden lg:block">
        <Navigation />
        <div className="ml-20 flex flex-col pt-5 border-r border-slate-200  xs:w-full md:w-[18.125rem] h-full xs:px-5 md:p-0 overflow-visible transition-all duration-500 xs:grow-1 md:grow-0 xs:overflow-y-scroll md:overflow-visible scrollbar-hidden">
          <div className="w-full min-h-[5rem] max-h-fit px-5 py-6 flex justify-between items-center">
            <p className="text-xl tracking-[.01rem]">Message</p>
          </div>
          <SearchInput />
          <div className="divider px-3"></div>
          <Conversations />
        </div>
      </div>
  );
};
export default Sidebar;
