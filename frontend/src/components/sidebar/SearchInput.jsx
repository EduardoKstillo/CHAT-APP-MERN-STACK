import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex justify-center items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full bg-white"
      />
      <button
        type="submit"
        className="btn btn-circle btn-sm bg-black text-white"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
