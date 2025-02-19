import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="w-full m-auto lg:px-20 px-10 py-20 text-white grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10 bg-gray-800 dark:bg-black">
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, placeat? Odit aliquam, maiores ducimus perspiciatis cupiditate dolorum sit repellendus nulla?</p>
          <div className="flex gap-5 my-3">
            <i className="p-3 rounded-xl bg-white text-gray-900"><FaFacebook size={20}/></i>
            <i className="p-3 rounded-xl bg-white text-gray-900"><FaInstagram size={20}/></i>
            <i className="p-3 rounded-xl bg-white text-gray-900"><FaTwitter size={20}/></i>
            <i className="p-3 rounded-xl bg-white text-gray-900"><FaYoutube size={20}/></i>
            </div>
          <p className="mt-4">Copyright Real Estate, All Rights Reserved</p>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          <ul className="flex flex-col justify-center items-start gap-4">
            <li className="flex gap-3"><FaMobile size={20}/><span>10845 Griffith Peak Dr, Las Vegas, NV 89135</span></li>
            <li className="flex gap-3"><FaBuilding size={20}/><span>+91 879 098 8901</span></li>
            <li className="flex gap-3"><GiRotaryPhone size={20}/><span>+91 123 678 0912</span></li>
            <li className="flex gap-3"><IoMail size={20}/><span>office23@gmail.com</span></li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Latest Properties</h1>
          <div className="flex gap-3">
            <img className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300" 
            src="https://realestatereacttailwind.netlify.app/assets/prop7-B0oLsgX-.jpg" 
            alt="villa-img" />
            <div>
              <h1 className="text-lg text-white">Villa with amazing view</h1>
              <p className="text-slate-400">$ 278.98</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300" 
            src="https://realestatereacttailwind.netlify.app/assets/prop8-D-VtXj7T.jpg" 
            alt="villa-img" />
            <div>
              <h1 className="text-lg text-white">Villa with amazing view</h1>
              <p className="text-slate-400">$ 278.98</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
