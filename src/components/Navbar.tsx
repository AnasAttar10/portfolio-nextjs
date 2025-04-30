"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background p-4 text-white shadow-md z-50 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div
          className="text-2xl font-bold text-white"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          A-A
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-8 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-background md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "shadow-md" : ""
          }`}
        >
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="block py-2 md:py-0 hover:text-primary transition-all duration-300 cursor-pointer text-center"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="block py-2 md:py-0 hover:text-primary transition-all duration-300 cursor-pointer text-center"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skills")}
              className="block py-2 md:py-0 hover:text-primary transition-all duration-300 cursor-pointer text-center"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="block py-2 md:py-0 hover:text-primary transition-all duration-300 cursor-pointer text-center"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="block py-2 md:py-0 hover:text-primary transition-all duration-300 cursor-pointer text-center"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
