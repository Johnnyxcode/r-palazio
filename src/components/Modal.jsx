import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { useDrag } from "@use-gesture/react";

const Modal = ({ children, isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsVisible(false);
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const bind = useDrag(
    ({ down, movement: [, my], direction: [, dy], velocity: [, vy] }) => {
      if (!down && dy > 0 && vy > 0.2) {
        handleClose();
      }
    }
  );

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleClose}
          ></div>
          <div
            {...bind()}
            className={`relative bg-white w-full md:w-[100%] rounded-lg shadow-lg p-8 z-50 transform transition-transform duration-300 ease-out ${
              isVisible ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button
              className="absolute top-10 right-4 text-gray-600 hover:text-gray-900"
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
