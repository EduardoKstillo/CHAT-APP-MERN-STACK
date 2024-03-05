import React from "react";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 h-screen w-full max-w-sm mx-auto">
      <div className="w-full p-6 shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/30 ring-1 ring-black/5">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-5">
          <span className="text-primary">Login</span>
        </h1>
        <form>
          <div className="space-y-4 text-gray-500">
            <div>
              <label className="input input-bordered rounded-none flex items-center gap-3 h-10 bg-white">
                <MdEmail />
                <input
                  type="email"
                  placeholder="Enter username"
                  className="w-full grow text-sm"
                />
              </label>
            </div>

            <div>
              <label className="input input-bordered rounded-none flex items-center h-10 gap-3 bg-white">
                <FaKey />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full grow text-sm"
                />
              </label>
            </div>
            <Link
              to="/signup"
              className="text-sm text-gray-400 inline-block hover:underline hover:text-blue-600"
            >
              {"Don't"} have an account?
            </Link>

            <div>
              <button className="btn btn-primary text-white font-bold btn-block btn-sm h-10 rounded-none">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
