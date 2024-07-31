import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import PortfolioFiles from "./PortfolioFiles";
import Modal from "./Modal";
import Button from "./Button";
import ContactUs from "./ContactUs"; // Ensure to import ContactUs component

// Define keyframes for the border animation
const slideIn = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 10rem; /* w-52 */
  }
`;

// Styled component for the animated border
const AnimatedBorder = styled.span`
  position: absolute;
  bottom: 4px;
  left: 0;
  height: 25px; /* border-b-[28px] */
  background-color: #9f2c55; /* border-primary2 */
  z-index: 0;
  animation: ${slideIn} 8s forwards;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};
`;

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
        ref={sectionRef}
      >
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <h1 className="relative text-4xl text-black font-bold mb-2">
            <span className="relative z-10">Portfolio.</span>
            <AnimatedBorder inView={inView} />
          </h1>

          <h2 className="text-2xl font-semibold">Showcase of Our Work</h2>
          <p className=" mr-5 md:mr-28">
            Our portfolio showcases a diverse range of projects, each reflecting
            our commitment to excellence and innovation. We take pride in
            delivering outstanding results that meet our clients' needs and
            exceed their expectations. Browse through our portfolio to see the
            quality and variety of our work.
          </p>

          {/* Numbers Section */}
          <div className="space-y-6 text-center md:text-start">
            <div>
              <h3 className="text-5xl font-bold">4+</h3>
              <p className="">Satisfied Customers</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="">Completed Projects</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">5+</h3>
              <p className="">Years of Experience</p>
            </div>
          </div>

          <div>
            <Button
              onClick={handleOpenModal}
              className="text-white w-full md:w-auto bg-primary2 font-bold hover:bg-primary1"
            >
              Reach out
            </Button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <ContactUs />
            </Modal>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative">
          <div className="relative md:h-[700px] overflow-hidden">
            <img
              src="./image/assets/palazio5.jpg"
              alt="Main Image"
              className="md:w-full md:h-full object-cover"
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
            className="absolute rounded z-20 md:h-[380px] h-40 w-40 md:w-60 right-10 -top-[550px] md:-top-[190px] md:right-[80%] transform translate-x-1/2"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
        </div>
      </div>
      <PortfolioFiles />
    </>
  );
};

export default Portfolio;
