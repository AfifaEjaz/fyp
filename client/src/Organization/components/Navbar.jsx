import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PiListDashesBold, PiListDashes } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import logoLight from '../../assets/logoLight.png'
import logoDark from '../../assets/logoDark.png'
import { FaUserCircle } from "react-icons/fa";
import UserUpdate from "../../components/UserUpdate";

const Navbar = ({ theme }) => {
console.log(theme);
  return (
    <header className="bg-whitee dark:bg-black dark:border dark:border-black shadow shadow-slate-100 w-full flex items-center justify-center transition duration-500 sticky top-0 z-50">
      <div className="flex items-center justify-between py-2 gap-4 w-11/12 lg:px-5">
        <a href="/" className="logo w-32 lg:w-20">
          <img
            src={theme ? logoDark : logoLight}
            alt="Company Logo"
            className="h-full w-full object-cover"
          />
        </a>
       
        <div className="flex justify-center items-center text-sm lg:text-base gap-2 lg:gap-8">
             <FaUserCircle color="red" size={24} />
             <UserUpdate />
         </div>
       
      </div>
    </header>
  );
};

export default Navbar;





// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { PiListDashesBold, PiListDashes } from "react-icons/pi";
// import { IoClose } from "react-icons/io5";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";
// import UserUpdate from "../../components/UserUpdate";

// const Navbar = ({ theme }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 5) setIsScrolled(true);
//       else setIsScrolled(false);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <header className="bg-baby-pink dark:bg-black dark:border dark:border-black w-full flex items-center justify-center transition duration-500 py-3 sticky top-0 z-30">
//         <div className="flex items-center justify-between gap-4 w-11/12 lg:px-5 ">
//           <a href="/" className="logo w-32 lg:w-36">
//             <img
//               src="https://realestatereacttailwind.netlify.app/assets/logo-CMrIGaUI.png"
//               alt="Company Logo"
//               className="h-full w-full object-cover"
//             />
//           </a>
//           <nav className="flex items-center">
//             <ul className="lg:flex gap-8 hidden justify-center items-center w-full text-black dark:text-white text-base font-semibold uppercase">
//               <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
//                 <a href="/" className="">
//                   Home
//                 </a>
//               </li>
//               <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
//                 <a href="#about" className="">
//                   About
//                 </a>
//               </li>
//               <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
//                 <a href="/get-blood" className="">
//                   Get Blood
//                 </a>
//               </li>
//               <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
//                 <a href="#services" className="">
//                   Services
//                 </a>
//               </li>
//               <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
//                 <a href="#contact" className="">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//             <div className="lg:hidden">
//               <button
//                 onClick={toggleNavbar}
//                 aria-label={isOpen ? "Close menu" : "Open menu"}
//                 className=""
//               >
//                 {isOpen ? (
//                   <IoClose color={theme ? "white" : "black"} size={27} />
//                 ) : (
//                   <PiListDashesBold
//                     color={theme ? "white" : "black"}
//                     size={27}
//                   />
//                 )}
//               </button>
//             </div>
//           </nav>
//           <div className="flex justify-center items-center text-sm lg:text-base gap-2 lg:gap-8">
//             <FaUserCircle color="red" size={24} />
//             <UserUpdate />
//           </div>
//           {isOpen && (
//             <div
//               style={{ zIndex: "-1" }}
//               className="fixed top-20 inset-x-0 mt-3 py-7 px-10 bg-dark-blue text-white lg:hidden"
//             >
//               <ul className="flex flex-col items-center justify-center gap-5 text-base font-semibold uppercase">
//                 <li className="py-2 px-3">
//                   <NavLink to="/" className="">
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="py-2 px-3">
//                   <NavLink to="/about" className="">
//                     About
//                   </NavLink>
//                 </li>
//                 <li className="py-2 px-3">
//                   <NavLink to="/about" className="">
//                     Properties
//                   </NavLink>
//                 </li>
//                 <li className="py-2 px-3">
//                   <NavLink to="/about" className="">
//                     Services
//                   </NavLink>
//                 </li>
//                 <li className="py-2 px-3">
//                   <NavLink to="/about" className="">
//                     Testimonials
//                   </NavLink>
//                 </li>
//                 <li className="py-2 px-3">
//                   <NavLink to="/about" className="">
//                     Contact
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;
