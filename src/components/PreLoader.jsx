import React, { useEffect } from "react";

const PreLoader = ({ isLoading }) => {
  useEffect(() => {
    // Disable scrolling and interactions when the preloader is active
    if (isLoading) {
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.width = "";
      document.body.style.height = "";
      document.body.style.overflow = "";
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.width = "";
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return isLoading ? (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-white pointer-events-none">
      {/* Preloader Content */}
      <div className="text-black text-3xl font-bold">Loading...</div>
    </div>
  ) : null;
};

export default PreLoader;
