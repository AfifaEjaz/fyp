import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LoginReg from "./pages/LoginReg";
import ResetPasswordEmail from "../pages/ResetPasswordEmail";
import ResetPassword from "../pages/ResetPassword";
import Mapping from "./pages/Mapping";
import Navbar from "./components/Navbar";
import { FaSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";

const Index = () => {
  const [isToken, setIsToken] = useState(false);
  const location = useLocation();

  // Set the initial theme from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  // Set the correct class on the document based on the theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the theme to localStorage when it changes
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]); // This effect runs whenever the theme changes

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsToken(!!token);
  }, [location]);

  return (
    <>
      <button
        className="fixed z-50 w-16 h-16 top-52 right-6 bg-white rounded-full p-3"
        onClick={toggleTheme}
      >
        {isDarkMode ? <IoMoon size={30} color="red" /> : <FaSun size={30} color="red" />}
      </button>
      <Navbar theme={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginReg" element={<LoginReg theme={isDarkMode} />} />
        <Route path="/get-blood" element={<Mapping />} />
        <Route path="/reset-password-email" element={<ResetPasswordEmail />} />
        <Route path="/api/user/reset/:id/:token" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    </>
  );
};

export default Index;
