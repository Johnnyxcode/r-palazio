// src/components/ContactUs.js

import React from "react";
import Button from "./Button";

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="w-full max-w-lg p-8 bg-white border rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            className="w-full px-3 py-2 border-b-2 border-b-gray-800 focus:border-b-primary border-t-secondary border-r-secondary border-l-secondary bg-transparent focus:outline-none"
            id="name"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            className="w-full px-3 py-2 border-b-2 border-b-gray-800 focus:border-b-primary border-t-secondary border-r-secondary border-l-secondary bg-transparent focus:outline-none"
            id="email"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="company">
            Your Company
          </label>
          <input
            className="w-full px-3 py-2 border-b-2 border-b-gray-800 focus:border-b-primary border-t-secondary border-r-secondary border-l-secondary bg-transparent focus:outline-none"
            id="company"
            type="text"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            className="w-full px-3 py-2 border-b-2 border-b-gray-800 focus:border-b-primary border-t-secondary border-r-secondary border-l-secondary bg-transparent focus:outline-none"
            id="message"
            rows="5"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <Button className="mt-4 text-white w-40 h-15 bg-[#BE9553] hover:bg-[#3E2300]">
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
