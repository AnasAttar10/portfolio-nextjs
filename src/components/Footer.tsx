import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-text">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center text-center md:text-left">
        <p className="md:mb-0">
          &copy; {new Date().getFullYear()} Anas Attar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
