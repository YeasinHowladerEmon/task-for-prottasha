import React from "react";
import { useState } from "react";
import log from "../../assets/images/Log.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4">
      <nav className="">
        <div className="px-6 mt-3 py-4 mx-auto md:flex md:justify-between md:items-center ">
          <div className="flex justify-between header-logo">
            <a href="/" className="">
              <img className="logo" src={log} alt="" />
            </a>

            <div className="flex lg:hidden md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-burger"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`absolute inset-x-0 z-20 w-100 px-8 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-white-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            }`}
          style={{margin: "-16px"}}>
            <div className="flex flex-col md:flex-row md:mx-0">
              <a
                className="my-2 text-primary px-6 font-bold transition-colors duration-300 transform primary:text-primary hover:text-black black:hover:text-primary md:mx-2 md:my-0 "
                href="/"
              >
                Home
              </a>
              <a
                className="my-2 text-black px-6 font-bold transition-colors duration-300 transform dark:text-black hover:text-primary dark:hover:text-primary md:mx-2 md:my-0"
                href="/"
              >
                Product
              </a>
              <a
                className="my-2 px-6 font-bold text-black transition-colors duration-300 transform dark:text-black-200 hover:text-primary dark:hover:text-primary md:mx-2 md:my-0"
                href="/"
              >
                Faq
              </a>
              <a
                className="my-2 text-black px-6 font-bold transition-colors duration-300 transform dark:text-black hover:text-primary dark:hover:text-primary md:mx-0 md:my-0 "
                href="/"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
