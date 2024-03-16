import React from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Route } from "react-router-dom";
import NotFoundError from "./pages/Error/NotFoundError";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider, useAuthContext } from "./context/AuthContext";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="h-screen items-center">
      <Routes>
        {/* <Route path="/" element={authUser? <Home /> : <Navigate to={'/login'} />} /> */}
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <SignUp />}
        />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
