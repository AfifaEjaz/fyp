import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PiListDashesBold, PiListDashes } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import logoLight from '../../assets/logoLight.png'
import logoDark from '../../assets/logoDark.png'

const Navbar = ({ theme }) => {
  console.log(theme);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-whitee dark:bg-black border-bottom shadow shadow-slate-100 w-full flex items-center justify-center transition duration-500 sticky top-0 z-50">
      <div className="flex items-center justify-between py-2 gap-4 w-11/12 lg:px-5">
        <a href="/" className="logo w-32 lg:w-20">
          <img
            src={theme ? logoDark : logoLight}
            alt="Company Logo"
            className="h-full w-full object-cover"
          />
        </a>
        <nav className="flex items-center">
          <ul className="lg:flex gap-2 hidden justify-center items-center w-full text-red text-base font-semibold">
            <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
              <a href="/" className="">Home</a>
            </li>
            <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
              <a href="#about" className="">About</a>
            </li>
            <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
              <a href="/get-blood" className="">Get Blood</a>
            </li>
            <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
              <a href="#services" className="">Services</a>
            </li>
            <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
              <a href="#contact" className="">Contact</a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <IoClose color={theme ? "white" : "black"} size={27} />
              ) : (
                <PiListDashesBold color={theme ? "white" : "black"} size={27} />
              )}
            </button>
          </div>
        </nav>
        <div className="flex justify-center items-center text-sm lg:text-base gap-2 lg:gap-8">
          <ul>
            <li className="py-2 px-3 font-semibold bg-red text-whitee dark:text-black rounded-xl">
              <a href="/loginReg" className="">Login/Registeration</a>
            </li>
          </ul>
        </div>
        {isOpen && (
          <div className="fixed top-20 inset-x-0 mt-3 py-7 px-10 bg-dark-blue text-white lg:hidden">
            <ul className="flex flex-col items-center justify-center gap-5 text-base font-semibold uppercase">
              <li className="py-2 px-3">
                <NavLink to="/" className="">Home</NavLink>
              </li>
              <li className="py-2 px-3">
                <NavLink to="/about" className="">About</NavLink>
              </li>
              <li className="py-2 px-3">
                <NavLink to="/about" className="">Properties</NavLink>
              </li>
              <li className="py-2 px-3">
                <NavLink to="/about" className="">Services</NavLink>
              </li>
              <li className="py-2 px-3">
                <NavLink to="/about" className="">Testimonials</NavLink>
              </li>
              <li className="py-2 px-3">
                <NavLink to="/about" className="">Contact</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
