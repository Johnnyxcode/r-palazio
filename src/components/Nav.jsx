// src/components/Nav.js

import React from "react";

const Nav = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute w-full py-4 z-40">
      <div className="max-w-7xl mx-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <p className="font-bold text-2xl text-primary">Palazio</p>
          {/* <img className="h-8" src="/path/to/your/logo.png" alt="Logo" /> */}
        </div>

        {/* Navigation Links */}
        <div className="flex">
          <button
            className="ml-4 text-primary font-medium hover:text-gray-300"
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
          <button
            className="ml-4 text-primary font-medium hover:text-gray-300"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </button>
          <button
            className="ml-4 text-primary font-medium hover:text-gray-300"
            onClick={() => scrollToSection("why-us")}
          >
            Why Us
          </button>
          <button
            className="ml-4 text-primary font-medium hover:text-gray-300"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
