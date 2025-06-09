import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center space-x-1 mr-2">
          <img src={logo} alt="Namrata Universal" className="h-16 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            HOME
          </Link>
          <Link to="/internship" className="text-gray-700 hover:text-blue-600">
            INTERNSHIP
          </Link>

          {/* Dropdown - Training & Development */}
          <div
            className="relative"
            onMouseEnter={() => setTrainingOpen(true)}
            onMouseLeave={() => setTrainingOpen(false)}
          >
            <span className="cursor-pointer text-gray-700 hover:text-blue-600">
              TRAINING AND DEVELOPMENT
            </span>
            <div
              className={`absolute bg-white text-black shadow-md z-10 mt-2 rounded w-48 transition-all duration-200 ${
                trainingOpen ? "block" : "hidden"
              }`}
            >
              <Link
                to="/technologies"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Technologies
              </Link>
              <Link
                to="/digital-marketing"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Digital Marketing
              </Link>
              <Link to="/seo" className="block px-4 py-2 hover:bg-gray-200">
                SEO
              </Link>
            </div>
          </div>

          {/* Dropdown - Pages */}
          <div
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button className="text-gray-700 hover:text-blue-600">PAGES</button>
            <div
              className={`absolute bg-white shadow-md mt-2 rounded w-48 z-10 ${
                pagesOpen ? "block" : "hidden"
              } flex flex-col`}
            >
              <Link
                to="/services"
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                Portfolio
              </Link>
              <Link
                to="/pricing"
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                Pricing
              </Link>
              <Link
                to="/teammembers"
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                Team Members
              </Link>
              <Link
                to="/reviews"
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                Reviews
              </Link>
              <Link
                to="/clients"
                className="block px-4 py-2 hover:text-blue-600"
              >
                Clients
              </Link>
              <Link
                to="/skills"
                className="block px-4 py-2 hover:text-blue-600"
              >
                Skills
              </Link>
            </div>
          </div>

          <Link to="/about" className="text-blue-600 hover:underline">
            ABOUT
          </Link>

          <Link to="/contact" className="text-blue-600 hover:underline">
            CONTACT
          </Link>

          <Link to="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link to="/pay" className="hover:text-blue-600">
            Pay
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/internship"
            className="block text-gray-700 hover:text-blue-600"
          >
            Internship
          </Link>
          <div>
            <span className="block text-gray-700 font-semibold">
              Training & Development
            </span>
            <Link
              to="/technologies"
              className="block pl-4 text-gray-600 hover:text-blue-600"
            >
              Technologies
            </Link>
            <Link
              to="/digital-marketing"
              className="block pl-4 text-gray-600 hover:text-blue-600"
            >
              Digital Marketing
            </Link>
            <Link
              to="/seo"
              className="block pl-4 text-gray-600 hover:text-blue-600"
            >
              SEO
            </Link>
          </div>
          <div>
            <span className="block text-gray-700 font-semibold">Pages</span>
            <a
              href="#"
              className="block pl-4 text-gray-600 hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#"
              className="block pl-4 text-gray-600 hover:text-blue-600"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="block pl-4 text-gray-600 hover:text-blue-600"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block pl-4 text-gray-600 hover:text-blue-600"
            >
              Team Members
            </a>
            <a
              href="#"
              className="block pl-4 text-gray-600 hover:text-blue-600"
            >
              Reviews
            </a>
            <a
              href="#"
              className="block pl-4 text-gray-600 hover:text-blue-600"
            >
              Clients
            </a>
            <a
              href="#"
              className="block pl-4 text-gray-600 hover:text-blue-600"
            >
              Skill
            </a>
          </div>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Contact
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Blog
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Pay
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
