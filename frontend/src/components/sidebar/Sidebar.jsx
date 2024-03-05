import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="flex flex-col lg:w-1/4 lg:flex-none lg:h-full pt-5 lg:mb-0 border-r border-slate-100 bg-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-50">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
