import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <nav className="bg-white shadow-lg mb-3 relative z-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link to="/" className="flex items-center">
              <span className="font-thin tracking-widest text-2xl md:text-3xl text-nowrap">
                INFINITY HOTEL
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/rooms"
              className="py-2 px-3 text-gray-500 hover:text-gray-900"
            >
              Rooms
            </Link>
            <Link
              to="/dining"
              className="py-2 px-3 text-gray-500 hover:text-gray-900"
            >
              Dining
            </Link>
            <Link
              to="/amenities"
              className="py-2 px-3 text-gray-500 hover:text-gray-900"
            >
              Amenities
            </Link>
            <Link
              to="/location"
              className="py-2 px-3 text-gray-500 hover:text-gray-900"
            >
              Location
            </Link>

            <Link
              to="/book"
              className="py-2 px-4 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-300"
            >
              Book Now
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button z-50 relative"
              onClick={toggleMenu}
            >
              <svg
                className={`w-6 h-6 ${
                  isOpen ? "text-white" : "text-gray-500 hover:text-gray-900"
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-full bg-gray-900 bg-opacity-95 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <Link
            to="/rooms"
            className="block py-4 text-xl text-white hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Rooms
          </Link>
          <Link
            to="/dining"
            className="block py-4 text-xl text-white hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Dining
          </Link>
          <Link
            to="/amenities"
            className="block py-4 text-xl text-white hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Amenities
          </Link>
          <Link
            to="/location"
            className="block py-4 text-xl text-white hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Location
          </Link>
          <Link
            to="/book"
            className="block py-3 px-6 mt-4 bg-yellow-600 text-white text-xl rounded-full hover:bg-yellow-700 transition duration-300"
            onClick={toggleMenu}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
