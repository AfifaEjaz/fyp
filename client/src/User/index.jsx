import React, {useState, useEffect} from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import Navigation from "../components/Navigation";
import Mapping from "./pages/Mapping";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { FaSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";

const index = ({theme}) => {
  const [isToken, setIsToken] = useState(false);
    const location = useLocation();

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
      {/* <Navigation isToken={isToken} /> */}
      <Navbar theme={theme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-blood" element={<Mapping />} />
       <Route path="*" element={<Navigate to='/' replace={true} />} />
      </Routes>
    </>
  );
};

export default index;
