import React from "react";
import { FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Logo at the top left corner */}
        <div className="mb-6 md:mb-0 flex-shrink-0">
          <img
            src="./image/logo_palazio.png"
            className="w-20 h-20"
            alt="Logo"
          />
        </div>

        {/* Two columns of three rows each at the top right corner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <p className="relative text-primary1 font-bold text-2xl mb-2">
              <span className="relative z-10">Information</span>
              <span className="absolute bottom-1 left-0 w-28 border-b-8 border-primary4 z-0"></span>
            </p>
            <p>Portfolio</p>
            <p>Contact</p>
          </div>
          <div className="space-y-2">
            <p className="relative text-primary1 font-bold text-2xl mb-2">
              <span className="relative z-10">Our location</span>
              <span className="absolute bottom-1 left-0 w-28 border-b-8 border-primary4 z-0"></span>
            </p>
            <p>Address</p>
            <p>Address no</p>
          </div>
        </div>
      </div>

      {/* Centralized copyright text and icons */}
      <div className="mt-10 text-center">
        <div className="mb-4">
          <span>&copy; 2024 - Palazio - All rights reserved.</span>
        </div>
        <div className="flex justify-center space-x-6">
          <FaLinkedin className="text-2xl" />
          <FaPhone className="text-2xl" />
          <FaEnvelope className="text-2xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
