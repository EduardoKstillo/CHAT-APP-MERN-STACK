import React from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import NotFoundError from "./pages/Error/NotFoundError";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFoundError />}>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      {/* <Route path="*" element={<NotFoundError />}></Route> */}
    </Route>
  )
);
function App() {
  return (
    <div className="h-screen p-6 items-center">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
