import GenderCheckbox from "./GenderCheckbox";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSingup";

const SignUp = () => {
  const [inputs, setInpus] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInpus({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 h-screen w-full max-w-sm mx-auto">
      <div className="w-full p-6 shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/30 ring-1 ring-black/5">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-5">
          <span className="text-primary">Sign Up</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 text-gray-500">
            <div>
              <label className="input input-bordered rounded-none flex items-center gap-3 h-10 bg-white">
                <FaUser />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full grow text-sm"
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInpus({ ...inputs, fullName: e.target.value })
                  }
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
                  value={inputs.username}
                  onChange={(e) =>
                    setInpus({ ...inputs, username: e.target.value })
                  }
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
                  value={inputs.password}
                  onChange={(e) =>
                    setInpus({ ...inputs, password: e.target.value })
                  }
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
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInpus({ ...inputs, confirmPassword: e.target.value })
                  }
                />
              </label>
            </div>

            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />

            <Link
              to="/login"
              className="text-sm text-gray-400 hover:underline hover:text-blue-600 inline-block"
            >
              Already have an account?
            </Link>

            <div>
              <button className="btn btn-primary text-white font-bold btn-block btn-sm h-10 rounded-none">
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
