import React, { useState } from 'react';
import { Link } from 'react-scroll';
import user from '../assets/photo.avif';

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false); // Close the menu
  };

  return (
    <div className="bg-blue-800 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-2xl container mx-auto px-6 md:px-24 flex items-center justify-between py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-6">
          <img
            src={user}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
          />
          <div>
            <h1 className="text-xl font-bold text-white">Surya</h1>
            <p className="text-sm text-blue-200">Software Engineer</p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-10">
          <ul className="flex items-center space-x-8 text-base text-white font-medium">
            <li>
              <Link
                to="Home"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Portfolio"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu} // Toggle menu visibility
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="bg-blue-800 text-white md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li >
              <Link
                to="Home"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li >
              <Link
                to="About"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
            <li >
              <Link
                to="Portfolio"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={toggleMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li >
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 cursor-pointer"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
