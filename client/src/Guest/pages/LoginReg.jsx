import React, { useState } from "react";
import Login from "../components/Login.jsx";
import Registeration from "../components/Registeration";
import loginImg from "../../assets/logoLight.png";
import loginImg2 from "../../assets/logoDark.png";

const LoginReg = ({ theme }) => {
  const [activeTab, setactiveTab] = useState("login");

  const HandlebarTab = (tab) => {
    setactiveTab(tab);
  };

  const renderForm = () => {
    if (activeTab === "login") {
      return <Login />;
    } else if (activeTab === "registeration") {
      return <Registeration />;
    }
  };

  return (
    <>
      <div className="container dark:bg-black">
        <div className="row" style={{ height: "90vh" }}>
          <div className="col-sm-7 d-flex justify-content-center mt-28 ">
            <img
              className="img-fluid"
              style={{ height: "50%", width: "50%" }}
              src={theme ? loginImg2 : loginImg}
              alt="loadingg"
            />
          </div>
          <div className="col-sm-5 ">
            <nav className="flex items-center border-bottom bg-whitee dark:bg-black dark:text-whitee pt-3">
              <ul className="flex gap-2 w-full text-base font-semibold ">
                <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
                  <a className="cursor-pointer" onClick={() => HandlebarTab("login")}>
                  Login
                  </a>
                </li>
                <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
                  <a className="cursor-pointer" onClick={() => HandlebarTab("registeration")}>
                  Registration
                  </a>
                </li>
              </ul>
            </nav>
            <div className="container mt-3">{renderForm()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginReg;
