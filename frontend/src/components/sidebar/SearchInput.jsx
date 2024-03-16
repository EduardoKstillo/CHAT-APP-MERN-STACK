import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
  return (
    <form className="flex justify-center items-center gap-2">
      <label className="input input-bordered rounded-none flex items-center gap-3 h-10 bg-gray-50 outline-none">
        <IoSearchSharp />
        <input
          type="text"
          placeholder="Search…"
          className="w-full grow"
        />
      </label>
    </form>
  );
};
export default SearchInput;
