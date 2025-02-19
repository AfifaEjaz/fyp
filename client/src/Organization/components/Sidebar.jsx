import React, {useState} from "react";

const Sidebar = () => {
     const [isOpen, setIsOpen] = useState(false);
    
      const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
  return (
    <>
      <nav className="bg-red text-whitee w-full h-screen p-3">
        <ul className="lg:flex flex-col gap-3 hidden justify-center text-base font-semibold">
          <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
            <a href="/" className="">
              Dashboard
            </a>
          </li>
          <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
            <a href="/blood-inventory" className="">
              Blood Inventory
            </a>
          </li>
          <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
            <a href="/booking-requests" className="">
              Booking Requests
            </a>
          </li>
          <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
            <a href="/organization-location" className="">
              My Location
            </a>
          </li>
          {/* <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
            <a href="#contact" className="">
              Contact
            </a>
          </li> */}
        </ul>
       
      </nav>
    </>
  );
};

export default Sidebar;
