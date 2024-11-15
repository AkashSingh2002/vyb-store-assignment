"use client";
import React, { useState } from "react";
import { CiMenuBurger as BurgerIcon } from "react-icons/ci";
import { FaRegUser as UserIcon } from "react-icons/fa";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="bg-primary text-primaryText p-4 text-[32px] bg-[#181818]">
      
      <div className="hidden md:flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-xl font-semibold">Logo</p>

          <div className="flex-grow max-w-md mx-4 hidden md:flex relative">
            <input
              type="text"
              placeholder="Search Creator/Product"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none"
            />
            <img
              src="/images/search.png"
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
          </div>
          <p>Fav Creators</p>
          <p>Merchandise</p>
          <p>Brand</p>
          <p>Digital</p>

          <div className="relative">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="focus:outline-none"
            >
              <UserIcon className="h-8 w-8 text-primaryText" />
            </button>
          </div>
        </div>
      </div>

      
      <div className="md:hidden flex items-center justify-between">
        <p className="text-xl font-semibold">VYB STORE</p>

        <div className="flex-grow mx-4 relative">
          <input
            type="text"
            placeholder="Search Creators"
            className="w-full px-4 py-2 pl-10 rounded-full focus:outline-none bg-white text-black"
          />
          <img
            src="/images/search.png"
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          />
        </div>

        
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="focus:outline-none"
        >
          <BurgerIcon className="h-8 w-8 text-white" />
        </button>
      </div>

      
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-64 bg-[#181818] h-full text-white p-4 shadow-lg">
            
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white text-2xl absolute top-4 right-4 focus:outline-none"
            >
              <CloseIcon />
            </button>

            
            <div className="flex flex-col items-center mt-8">
              <img
                src="/images/stockPictures/ourinfluencers/male.png"
                alt="Profile"
                className="w-20 h-20 rounded-full mb-2"
              />
              <a href="#" className="text-green-400 text-sm mb-1">
                Change Profile Picture
              </a>
              <p className="text-lg font-semibold">Samira Hadid</p>
              <p className="text-gray-400 text-lg">@samirahadid</p>
            </div>

            <div className="mt-8 space-y-4 text-lg">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                <AiOutlineUser className="mr-3" /> Profile
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                <AiOutlineHome className="mr-3" /> Address
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                <AiOutlinePhone className="mr-3" /> Contact us
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                <AiOutlineInfoCircle className="mr-3" /> About us
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-red-500 hover:bg-gray-700 rounded"
              >
                <MdLogout className="mr-3" /> Logout
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;