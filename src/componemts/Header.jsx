import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Header() {
  const [isopen, setisopen] = useState(false);
  const navbar = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Schedule",
      to: "/schedule",
    },
    {
        name: "Login",
        to: "/login",
      },
      {
        name: "Register",
        to: "/register",
      },
   
  ];

  return (
    <header className="shadow-lg z-30 sticky top-0 h-18">
      <nav className="bg-[#edf2fb]">
        <div className="flex justify-between pl-8 sm:pl-20 pr-20 w-full items-center">
          <div className="text-[#012a4a] sm:text-2xl flex items-center  md:text-2xl
 ">
            <b>ᕙ( •̀ ‿ •́ )ᕗ</b>
          </div>

          <div className="h-[80px] flex  justify-evenly p-8">
            <div
              onClick={() => setisopen(!isopen)}
              className="sm:hidden bg-white text-[#012a4a]  flex items-center right-10 w-8 h-8 top-6 p-2 rounded-lg shadow-md absolute cursor-pointer"
            >
              {isopen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
          <div>
            <ul
              className={` flex justify-end sm:z-auto   absolute sm:static left-[-0px] w-full  sm:w-auto sm:pl-0  transition-all duration-500 ease-in ${
                isopen ? "top-14" : "top-[-500px]"
              } flex-col  sm:flex-row justify-between bg-[#edf2fb] `}
            >
              {navbar.map((item, index) => (
                <li key={index} className="m-2">
                  <NavLink
                    className={({ isActive }) =>
                      ` ${
                        isActive ? "text-[#168aad] || border-[#168aad] ": "text-[#012a4a] "
                      } border-b hover:border-[#168aad] block lg:py-1 lg:pr-4  lg:pl-3 sm:pr-0 sm:py-0 sm:pl-1 duration-200 lg:hover:bg-transparent lg:border-b hover:font-normal hover:text-[#168aad] lg:p-0`
                    }
                    to={item.to}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

