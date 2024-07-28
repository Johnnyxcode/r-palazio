import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa"; // Import the FaTimes icon

const Modal = ({ children, isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden"; // Prevent body scrolling when modal is open
    } else {
      setIsVisible(false);
      document.body.style.overflow = "auto"; // Restore body scrolling when modal is closed
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Match this duration with your Tailwind transition duration
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center">
          <div
            className="fixed mt-40 inset-0 bg-black opacity-50"
            onClick={handleClose}
          ></div>
          <div
            className={`relative bg-white w-full md:w-[100%] rounded-lg shadow-lg p-8 z-50 transform transition-transform duration-300 ease-out ${
              isVisible ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button
              className="absolute top-20 right-4 text-gray-600 hover:text-gray-900"
              onClick={handleClose}
            >
              <FaTimes size={24} />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
