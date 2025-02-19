import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { FaSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import Sidebar from "./components/Sidebar.jsx";
import BloodInventory from "./pages/BloodInventory.jsx";
import BookingRequest from "./pages/BookingRequest.jsx";
import MyLocation from "./pages/MyLocation.jsx";

const index = ({ theme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      console.log("Dark mode activated");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Light mode activated");
    }

    // Log current classes to verify
    console.log(document.documentElement.classList);
  };
  return (
    <>
      <button
        className="fixed z-50 w-16 h-16 top-52 right-6 bg-white rounded-full p-3"
        onClick={toggleTheme}
      >
        {isDarkMode ? (
          <IoMoon size={30} color="red" />
        ) : (
          <FaSun size={30} color="red" />
        )}
      </button>
      {/* <Navigation isToken={isToken} /> */}
      <Navbar theme={theme} />

      <div className="flex h-full">
        <div className="w-[20%]"><Sidebar /></div>
        <div className="w-[80%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blood-inventory" element={<BloodInventory />} />
            <Route path="/booking-requests" element={<BookingRequest />} />
            <Route path="/organization-location" element={<MyLocation />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default index;
