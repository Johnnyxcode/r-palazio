import React, { useEffect, useState } from "react";
import PortfolioFiles from "./PortfolioFiles";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the height of the overlay divs based on the scroll position
  const overlayHeight = Math.max(0, 350 - scrollY * 0.25);

  return (
    <>
      <div
        className="flex flex-col lg:flex-row space-y-8 md:mb-20 lg:space-y-0 lg:space-x-8 p-8"
        id="portfolio"
      >
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl font-bold">Portfolio.</h1>
          <h2 className="text-xl font-semibold">Showcase of Our Work</h2>
          <p className="text-lg text-gray-700 mr-5 md:mr-28">
            Our portfolio showcases a diverse range of projects, each reflecting
            our commitment to excellence and innovation. We take pride in
            delivering outstanding results that meet our clients' needs and
            exceed their expectations. Browse through our portfolio to see the
            quality and variety of our work.
          </p>

          {/* Numbers Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl font-bold">4+</h3>
              <p className="text-gray-700">Satisfied Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">10+</h3>
              <p className="text-gray-700">Completed Projects</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">5+</h3>
              <p className="text-gray-700">Years of Experience</p>
            </div>
          </div>

          <button className="mt-4 px-6 py-2 text-white bg-primary hover:bg-dark rounded">
            Contact Us
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative">
          <div className="relative md:h-[700px] overflow-hidden ">
            <img
              src="./image/assets/palazio5.jpg"
              alt="Main Image"
              className="md:w-full md:h-full object-cover "
            />
            <div
              className="absolute inset-0 bg-white opacity-100"
              style={{
                height: `${overlayHeight}px`,
                top: 0,
                transition: "height 0.2s ease-out",
                zIndex: 10,
              }}
            />
            <div
              className="absolute inset-0 bg-white opacity-100"
              style={{
                height: `${overlayHeight}px`,
                bottom: 0,
                transition: "height 0.2s ease-out",
                zIndex: 10,
              }}
            />
          </div>
          <img
            src="./image/assets/palazio6.jpg"
            alt="Second Image"
            className="absolute rounded z-20 md:h-[380px] h-40 w-40 md:w-60 right-10 -top-80 md:opt-0 md:right-[80%] transform translate-x-1/2"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
        </div>
      </div>
      <PortfolioFiles />
    </>
  );
};

export default Portfolio;
