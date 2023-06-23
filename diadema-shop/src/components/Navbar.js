import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:max-w-full lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* Your logo here */}
            <Link to="/">
              <img className="block h-8 w-auto" src={Logo} alt="" />
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`${
                isOpen ? "text-white" : "text-gray-400"
              } inline-flex items-center justify-center p -2 rounded-md hover:text-white 
                  hover:bg-gray-
                  700 focus:outline-none focus:bg-gray -
                  700`}
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 
                      24 
                      24"
                  fill="currentColor"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  {" "}
                  <line x1={3} y1={12} x2={21} y2={12} />
                  <line x1={3} y1={6} x2={21} y2={6} />
                  <line x1={3} y1={18} x2={21} y2={18} />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 
                      24 
                      24"
                  fill="currentColor"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  {" "}
                  <path
                    d="M4 6h16M4
                                  12h16m-16
                                  6h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Home link */}
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py2 rounded-md text-sm font-medium"
              >
                Home
              </Link>

              {/* Shop link */}
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py2 rounded-md text-sm font-medium"
              >
                Shop
              </Link>

              {/* About link */}
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py2 rounded-md text-sm font-medium"
              >
                About
              </Link>

              {/* Contact link */}
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <Link
            to="#"
            className="block md:hidden bg-gray-
          
           -800 text-white px -3 py -
        
         -   {
         }
         
           rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="#"
            className="block md:hidden bg-gray-
          
           -800 text-white px -3 py -
        
         -   {
         }
         
           rounded-md text-base font-medium"
          >
            Shop
          </Link>
          <Link
            to="#"
            className="block md:hidden bg-gray-
          
           -800 text-white px -3 py -
        
         -   {
         }
         
           rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="#"
            className="block md:hidden bg-gray-
          
           -800 text-white px -3 py -
        
         -   {
         }
         
           rounded-md text-base font-medium"
          >
            Contacts
          </Link>
        </>
      )}
    </nav>
  );
};
