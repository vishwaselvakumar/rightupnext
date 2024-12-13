import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../images/Testimonials/logo11.png";
import profileImage from '../../images/profile.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <nav className="shadow-4xl bg-white fixed px-2 sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-blue bg-white">
        {/* Main Nav */}
        <div className="max-w-screen-xl flex items-center justify-between mx-auto sm:p-4 pb-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="icon"
              className="w-[50%] h-[40%]"
            />
          </Link>

          {/* Hamburger Menu */}
          <div className="sm:hidden flex">
            <button onClick={() => setOpen(!open)} className="block">
              <GiHamburgerMenu size={30} className="mt-2 mr-2 text-black/70" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex justify-between items-center w-full">
            <ul className="flex">
              <li className="p-2 mr-4 text-black hover:text-blue-400 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="p-2 mr-4 text-black hover:text-blue-400 cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              {/* Services Dropdown */}
              <li
                className="relative p-2 mr-4 text-black hover:text-blue-400 cursor-pointer"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                Services
                {servicesDropdown && (
                  <ul className="absolute left-0 w-40 mt-2 bg-gray-800 text-white rounded-lg shadow-lg text-sm">
                    <li className="p-2 hover:bg-blue-500">
                      <Link to="/mobile">Mobile Application</Link>
                    </li>
                    <li className="p-2 hover:bg-blue-500">
                      <Link to="/software">Software Development</Link>
                    </li>
                    <li className="p-2 hover:bg-blue-500">
                      <Link to="/seo">Digital Marketing & SEO</Link>
                    </li>
                    <li className="p-2 hover:bg-blue-500">
                      <Link to="/iot">IoT Projects</Link>
                    </li>
                    <li className="p-2 hover:bg-blue-500">
                      <Link to="/custom">Software Customizations</Link>
                    </li>
                    <li className="p-2 hover:bg-blue-500">
                      <Link to="/graphics">Graphics Designing</Link>
                    </li>
                    <li className="p-2 hover:bg-blue-500">
                      <Link to="/ar">AR & VR Services</Link>
                    </li>
                    <li className="p-2 hover:bg-blue-500">
                      <Link to="/animation">Animation and Video Production</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="p-2 text-black hover:text-blue-400 cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-blue-600 px-4 py-2 text-white rounded-xl mr-2 hover:bg-blue-500"
              >
                Get Started
              </button>
              <button
                type="button"
                className="text-black border py-2 font-medium rounded-lg ml-2 text-sm px-4 hover:bg-blue-300/10"
              >
                Login
              </button>
            </div>
          </div>
        </div> 

        {/* Mobile Dropdown */}
        {open && (
          <div className="h-[19rem]">
            <ul>
              <li className="text-black hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4 pt-6">
                <Link to="/">Home</Link>
              </li>
              <li className="text-black hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
                <Link to="/about">About</Link>
              </li>
              {/* Mobile Services Dropdown */}
              <li
                className="text-black hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4 relative"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                Services
                {servicesDropdown && (
                  <ul className="absolute left-0 w-40 mt-2 bg-white text-black rounded-lg shadow-lg">
                    <li className="p-2 text-center hover:bg-blue-500">
                      <Link to="/mobile">Mobile Application</Link>
                    </li>
                    <li className="p-2 text-center hover:bg-blue-500">
                      <Link to="/software">Software Development</Link>
                    </li>
                    <li className="p-2 text-center hover:bg-blue-500">
                      <Link to="/seo">Digital Marketing & SEO</Link>
                    </li>
                    <li className="p-2 text-center hover:bg-blue-500">
                      <Link to="/iot">IoT Projects</Link>
                    </li>
                    <li className="p-2 text-center hover:bg-blue-500">
                      <Link to="/graphics">Graphics Designing</Link>
                    </li>
                    <li className="p-2 text-center hover:bg-blue-500">
                      <Link to="/ar">AR & VR Services</Link>
                    </li>
                    <li className="p-2 text-center hover:bg-blue-500">
                      <Link to="/animation">Animation</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="text-black hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            {/* Profile Section */}
            <div className="bg-gray-200/50 h-[1px] w-[85%] ml-[-10px]">
              <div className="flex cursor-pointer">
                <img
                  src={profileImage}
                  alt="profileimg"
                  className="w-14 ml-8 mt-4 flex"
                />
                <p className="my-auto ml-4 text-black font-semibold">Dheepan</p>
                <p className="my-auto ml-2 text-black font-semibold">Smith</p>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="mt-[25px] text-gray-100/30 text-sm">
                All Rights Reserved - LevelUP Solutions
              </p>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
