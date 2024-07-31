import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import ContactUs from "./ContactUs";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
          scrolled ? "bg-white text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl md:mx-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div
            className={`flex-shrink-0 ${
              scrolled ? "bg-primary2 p-2 h-[70px] w-auto rounded-full" : ""
            }`}
          >
            <img
              className="md:h-[50px] md:w-auto h-[50px] w-auto"
              src="./image/logo_palazio.png"
              alt="Logo"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex">
            <button
              className={`ml-4 font-bold hover:text-primary2 ${
                scrolled ? "text-black" : "text-white"
              }`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className={`ml-4 font-bold hover:text-primary2 ${
                scrolled ? "text-black" : "text-white"
              }`}
              onClick={() => scrollToSection("portfolio")}
            >
              Portfolio
            </button>
            <button
              className={`ml-4 font-bold hover:text-primary2 ${
                scrolled ? "text-black" : "text-white"
              }`}
              onClick={() => scrollToSection("about")}
            >
              About us
            </button>
            <Button
              onClick={handleOpenModal}
              className={`ml-4 border-0 bg-primary2 font-bold hover:text-black hover:bg-primary1 ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              Contact us
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-full bg-primary2 hover:bg-primary1"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6 text-white"
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
        className={`fixed inset-y-0 right-0 w-64 bg-primary2 shadow-lg transform transition-transform ${
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
              className="text-white text-3xl font-bold hover:text-primary1 block mb-4"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="text-white text-3xl font-bold hover:text-primary1 block mb-4"
              onClick={() => scrollToSection("portfolio")}
            >
              Portfolio
            </button>
            <button
              className="text-white text-3xl font-bold hover:text-primary1 block mb-4"
              onClick={() => scrollToSection("about")}
            >
              About us
            </button>
            <button
              className="text-white text-3xl font-bold hover:text-primary1 block mb-4"
              onClick={() => {
                handleOpenModal();
                setIsOpen(false);
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Modal for ContactUs */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ContactUs />
      </Modal>
    </>
  );
};

export default Nav;
