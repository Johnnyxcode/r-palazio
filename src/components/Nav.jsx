import React, { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the drawer after clicking
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full py-4 z-40 transition duration-300 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl md:mx-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div
            className={`flex-shrink-0 ${
              scrolled ? "bg-black p-2 rounded-full" : ""
            }`}
          >
            {/* <p className="font-bold text-2xl text-primary">Palazio</p> */}
            <img
              className="md:h-20 md:w-auto h-[50px] w-auto"
              src="./image/logo_palazio.png"
              alt="Logo"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex">
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

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              className="text-white p-2 rounded-full bg-black hover:bg-primary-dark"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-black shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="p-4">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="py-60">
            <button
              className="text-primary text-3xl font-bold hover:text-gray-300 block mb-4"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="text-primary text-3xl font-bold hover:text-gray-300 block mb-4"
              onClick={() => scrollToSection("portfolio")}
            >
              Portfolio
            </button>
            <button
              className="text-primary text-3xl font-bold hover:text-gray-300 block mb-4"
              onClick={() => scrollToSection("why-us")}
            >
              Why Us
            </button>
            <button
              className="text-primary text-3xl font-bold hover:text-gray-300 block mb-4"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
