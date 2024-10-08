import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineHome, MdMenu } from "react-icons/md";
import { BiBody } from "react-icons/bi";
import { PiDotsNineBold } from "react-icons/pi";

const NavLeft = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-[10%] flex flex-col justify-center items-center bg-gray-800 p-4 border-r-[1px] border-r-gray-700">
      <ul className="space-y-12">
        <li>
          <NavLink 
            to="/home" 
            className={({ isActive }) => 
              `text-[37px] cursor-pointer duration-300 ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-gray-400'}`
            }
          >
            <MdOutlineHome />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => 
              `text-[37px] cursor-pointer duration-300 ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-gray-400'}`
            }
          >
            <MdMenu />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/project" // Update the route as necessary
            className={({ isActive }) => 
              `text-[37px] cursor-pointer duration-300 ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-gray-400'}`
            }
          >
            <BiBody />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavLeft;
