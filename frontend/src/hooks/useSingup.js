import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {

  const [loading, setLoading] = useState(false);

  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    if ( !validate({ fullName, username, password, confirmPassword, gender }) ) return;

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      })
      console.log(response.data);
     
      toast.success("Successfully signed up");
      
    } catch (error) {
      console.log(error.response);
    }
    finally {
      setLoading(false);
    }
  }
  
  return { signup, loading };
  
};

export default useSignup;

function validate ({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  return true;
}
