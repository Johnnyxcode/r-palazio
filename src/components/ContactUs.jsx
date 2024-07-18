// src/components/ContactUs.js

import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="flex items-center justify-center min-h- mt-10">
      <form className="w-full max-w-lg p-8 bg-transparent">
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
          <button
            className="px-4 py-2 border-2  border-t-secondary border-r-secondary border-l-secondary  text-white font-bold rounded-full bg-primary hover:bg-dark focus:outline-none"
            type="button"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
