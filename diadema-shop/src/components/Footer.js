import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-12 md:flex md:items-center md:justify-between">
        {/* Social Media Icons */}
        <div className="flex items-center space-x-6 mb-8 md:mb-0">
          {/* Replace these icons with your own */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ffffff"
            width={24}
            height={24}
          >
            <path
              id="Facebook_Icon_Copy_2"
              dataName="Facebook_Icon Copy 2"
              d="M7,9H5v9H2V9H0V6H2V4c0-1.47-.292-4,3-4H8V3H6A1.026,1.026,0,0,0,5,4V6H8Z"
              fill="#fff"
            />
          </svg>

          <svg viewBox="0 0 24 24" fill="#ffffff" width={24} height={24}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.006"
              height="16.001"
              viewBox="0 0 20.006 16.001"
            >
              <path
                id="Twitter_Icon_Copy_2"
                dataName="Twitter_Icon Copy 2"
                d="M17.953,3.98c.009.17.013.35.013.53A11.5,11.5,0,0,1,6.289,16,11.793,11.793,0,0,1,0,14.19c.319.03.647.05.978.05a8.344,8.344,0,0,0,5.1-1.73A4.1,4.1,0,0,1,2.243,9.7a3.947,3.947,0,0,0,.771.08A4.284,4.284,0,0,0,4.1,9.64,4.065,4.065,0,0,1,.8,5.68a.228.228,0,0,1,0-.05,4.155,4.155,0,0,0,1.858.5A4.013,4.013,0,0,1,.837,2.77,3.963,3.963,0,0,1,1.391.74,11.734,11.734,0,0,0,9.848,4.96a4.173,4.173,0,0,1-.1-.92A4.073,4.073,0,0,1,13.848,0a4.139,4.139,0,0,1,2.994,1.27A8.11,8.11,0,0,0,19.45.29a4.065,4.065,0,0,1-1.8,2.24,8.428,8.428,0,0,0,2.356-.64A8.234,8.234,0,0,1,17.953,3.98Z"
                fill="#fff"
              />
            </svg>
          </svg>

          <svg viewBox="0 0 24 24" fill="#ffffff" width={24} height={24}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <path
                id="Instagram_Icon_Copy_2"
                dataName="Instagram_Icon Copy 2"
                d="M6,21a6.007,6.007,0,0,1-6-6V6A6.007,6.007,0,0,1,6,0h9a6.007,6.007,0,0,1,6,6v9a6.006,6.006,0,0,1-6,6ZM2,6v9a4,4,0,0,0,4,4h9a4,4,0,0,0,4-4V6a4,4,0,0,0-4-4H6A4.005,4.005,0,0,0,2,6Zm3,4.5A5.7,5.7,0,0,1,10.5,5,5.5,5.5,0,1,1,5,10.5Zm2.016.059a3.441,3.441,0,0,0,1,2.419,3.394,3.394,0,0,0,2.416,1A3.667,3.667,0,0,0,14,10.42,3.42,3.42,0,0,0,10.584,7h0A3.666,3.666,0,0,0,7.016,10.56ZM15,5a1,1,0,1,1,1,1A1,1,0,0,1,15,5Z"
                fill="#fff"
              />
            </svg>
          </svg>
        </div>
        {/* Navigation */}
        <nav className="mb-8 md:mb-0">
          <ul className="flex flex-wrap justify-center sm:justify-end space-x-8 sm:space-x-16 text-lg font-medium tracking-wide uppercase">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Shop</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="py-[10px] bg-gray-dark text-center max-w-screen-xl  mx-auto   ">
        <ul className="flex justify-between space-x-[20px] mt-[15px]">
          {/* Left column in second row*/}
          <li>&copy; 2021 Your Company</li>

          <li>
            <a href="#">Terms of Service</a>
            <a href=""> & </a>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
