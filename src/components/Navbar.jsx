import React, { useState } from "react";
import Search from "./Search";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-900 p-2 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-5"
              alt="Flowbite Logo"
            />
            <span className="text-xl font-semibold">Flowbite</span>
          </a>
          <button
            onClick={toggleMobileMenu}
            id="menu-toggle"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block mt-4 md:mt-0 bg-gray-800 md:bg-transparent rounded-lg`}
        >
          <ul className="md:flex md:space-x-4 p-4">
            <li>
              <a
                href="#"
                className="scaling block py-2 px-4 text-white bg-blue-700 md:bg-transparent md:text-blue-500 rounded"
              >
                Home
              </a>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="w-full text-left py-2 px-4 flex items-center justify-between text-white scaling "
              >
                Category
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="relative">

                <ul className="bg-gray-700 rounded-md mt-1 absolute">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-600"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-600"
                    >
                      Thrill
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-600"
                      >
                      Comedy
                    </a>
                  </li>
                </ul>
                  
              </div>
              )}
            </li>
            <li>
              <a href="#" className="block py-2 px-4 text-white scaling ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 text-white scaling ">
                Disclaimer
              </a>
            </li>
            <li className="py-2 active" ><Search/></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
