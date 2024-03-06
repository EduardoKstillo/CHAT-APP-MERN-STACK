import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const signupService = ({fullName, username, password, confirmPassword,gender}) => {
  return axios.post(`${API_URL}/auth/signup`, {
    fullName,
    username,
    password,
    confirmPassword,
    gender
  },
  {
    withCredentials: true,
  }
  );
}

const loginService = ({username, password})=>{
  return axios.post(`${API_URL}/auth/login`, {
    username,
    password
  },
  {
    withCredentials: true,
  }
  )
}

const logoutService = () => {
  return axios.post(`${API_URL}/auth/logout`)
}

const AuthService = {
  signupService,
  loginService,
  logoutService
}

export default AuthService;