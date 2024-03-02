import React from "react";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/30 ring-1 ring-black/5">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-5">
          <span className="text-primary">Login</span>
        </h1>
        <form>
          <div className="space-y-4">
            <div>
            <label className="input input-bordered rounded-none flex items-center gap-3 h-10 bg-white">
            <MdEmail />
            <input
                type="email"
                placeholder="Enter username"
                className="grow"
              />
            </label>              
            </div>

            <div>
              <label className="input input-bordered rounded-none flex items-center h-10 gap-3 bg-white">
              <FaKey />
                <input
                type="password"
                placeholder="Enter Password"
                className="grow"
              />
              </label>
            </div>

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
