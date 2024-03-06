import { createContext, useContext, useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (data) => {
    setLoading(true);
    try {
      const response = await AuthService.loginService(data);
      setAuthUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success("Successfully logged in");
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error.response);
      //toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (data) => {
    setLoading(true);
    try {
      const response = await AuthService.signupService(data);
      setAuthUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success("Successfully signed up");
      navigate("/");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      const response = await AuthService.logoutService();

      localStorage.removeItem("user");
      setAuthUser(null);
      navigate("/");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    authUser,
    loading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
