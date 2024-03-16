import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { MdModeNight } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

const Navigation = () => {
  return (
    <>
      <div class="h-screen fixed left-0 top-0 border-r border-slate-200 flex flex-col justify-between">
        <div class="p-6 py-10">
          <FaHome size={25} />
          <ul class="mt-6">
            <li class="mb-4">
              <a href="#" class="flex items-center hover:text-indigo-400">
                <AiFillMessage size={25} />
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-center pb-6">
          <ul class="mt-6">
            <li class="mb-4">
              <a href="#" class="flex items-center hover:text-indigo-400">
                <MdModeNight
                  size={25}
                  style={{ transform: "rotate(30deg)" }}
                  rotate={30}
                />
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="flex items-center hover:text-indigo-400">
                <IoMdSettings size={25} focusable />
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="flex items-center">
                <FaCircleUser size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
