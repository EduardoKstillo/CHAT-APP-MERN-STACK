import GenderCheckbox from "./GenderCheckbox";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";



const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/30 ring-1 ring-black/5">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-5">
          <span className="text-primary">Sign Up</span>
        </h1>

        <form>
          <div className="space-y-4 text-gray-500">
            <div>
              <label className="input input-bordered rounded-none flex items-center gap-3 h-10 bg-white">
                <FaUser />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full grow text-sm"
                />
              </label>
            </div>

            <div>
              <label className="input input-bordered rounded-none flex items-center gap-3 h-10 bg-white">
                <FaUser />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full grow text-sm"
                />
              </label>
            </div>

            <div>
              <label className="input input-bordered rounded-none flex items-center gap-3 h-10 bg-white">
                <FaKey />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full grow text-sm"
                />
              </label>
            </div>

            <div>
              <label className="input input-bordered rounded-none flex items-center gap-3 h-10 bg-white">
                <FaKey />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full grow text-sm"
                />
              </label>
            </div>

            <GenderCheckbox />

            <a
              className="text-sm text-gray-400 hover:underline hover:text-blue-600 mt-2 inline-block"
              href="#"
            >
              Already have an account?
            </a>

            <div>
              <button className="btn btn-primary text-white font-bold btn-block btn-sm h-10 rounded-none">
                Sign Up
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
