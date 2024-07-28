import React, { useEffect, useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Button from "./Button";

const portfolioData = [
  {
    image: "./image/assets/palazio1.jpg",
    bgColor: "bg-gray-200",
    event: "Wedding",
    description:
      "Celebrate your special day with our comprehensive wedding planning services.",
    details: [
      "Venue selection and decoration",
      "Catering and menu planning",
      "Photography and videography",
      "Entertainment and music",
      "Guest management and invitations",
    ],
  },
  {
    image: "./image/assets/palazio2.jpg",
    bgColor: "bg-gray-200",
    event: "Birthday",
    description:
      "Make your birthday unforgettable with our customized birthday party planning.",
    details: [
      "Theme selection and decorations",
      "Entertainment and games",
      "Cake and dessert arrangements",
      "Party favors and giveaways",
      "Photography and videography",
    ],
  },
  {
    image: "./image/assets/palazio3.jpg",
    bgColor: "bg-gray-200",
    event: "Corporate Event",
    description:
      "Professional event planning for corporate meetings, conferences, and seminars.",
    details: [
      "Venue booking and setup",
      "Audio-visual equipment",
      "Catering and refreshments",
      "Guest registration and management",
      "Branding and promotional materials",
    ],
  },
  {
    image: "./image/assets/palazio4.jpg",
    bgColor: "bg-gray-200",
    event: "Engagement",
    description:
      "Celebrate your engagement with a beautifully planned and executed party.",
    details: [
      "Venue selection and decoration",
      "Catering and menu planning",
      "Entertainment and music",
      "Guest management and invitations",
      "Photography and videography",
    ],
  },
  // Add more events as needed
];

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const PortfolioFiles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const rightSectionRef = useRef(null);
  const leftSectionRef = useRef(null);
  const windowSize = useWindowSize();

  const handleScroll = () => {
    const scrollTop = rightSectionRef.current.scrollTop;
    const clientHeight = rightSectionRef.current.clientHeight;
    const scrollHeight = rightSectionRef.current.scrollHeight;
    const index = Math.min(
      Math.floor(
        (scrollTop / (scrollHeight - clientHeight)) * portfolioData.length
      ),
      portfolioData.length - 1
    );
    setActiveIndex(index);
  };

  useEffect(() => {
    if (windowSize.width >= 768) {
      const rightSection = rightSectionRef.current;
      rightSection.addEventListener("scroll", handleScroll);

      return () => {
        rightSection.removeEventListener("scroll", handleScroll);
      };
    }
  }, [windowSize.width]);

  useEffect(() => {
    if (windowSize.width >= 768) {
      const handleParentScroll = (event) => {
        if (rightSectionRef.current) {
          rightSectionRef.current.scrollTop = event.target.scrollTop;
        }
      };

      const parentElement = document.getElementById("portfolio-container");
      parentElement.addEventListener("scroll", handleParentScroll);

      return () => {
        parentElement.removeEventListener("scroll", handleParentScroll);
      };
    }
  }, [windowSize.width]);

  if (windowSize.width < 768) {
    return (
      <div className="flex flex-col space-y-8 p-8">
        {portfolioData.map((item, index) => (
          <div key={index}>
            {/* Image Section */}
            <div
              className={`flex justify-center items-center ${item.bgColor} rounded-3xl p-4 mb-4`}
            >
              <img
                src={item.image}
                alt={`Image for ${item.event}`}
                className="object-contain w-80 h-80 shadow-lg rounded-3xl"
              />
            </div>
            {/* Content Section */}
            <div className="p-4 rounded-lg shadow-lg bg-white">
              <div className="flex items-center space-x-4">
                <FaCalendarAlt className="text-2xl" />
                <h2 className="text-xl font-bold">{item.event}</h2>
              </div>
              <p className="mt-4">{item.description}</p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-inner">
                <h3 className="font-semibold">Details:</h3>
                <ul className="list-disc list-inside ml-4 mt-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
                {/* <Button className="mt-4 text-white w-40 h-15 bg-[#BE9553] hover:bg-[#3E2300]">
                  Reach out
                </Button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id="portfolio-container" className="flex h-screen overflow-y-auto">
      {/* Left Section */}
      <div
        ref={leftSectionRef}
        className={`flex-1 flex rounded-3xl justify-center h-[500px] shadow-lg transition-all duration-300 mx-10 items-center ${portfolioData[activeIndex].bgColor}`}
        style={{ position: "sticky", top: "20vh" }}
      >
        <img
          src={portfolioData[activeIndex].image}
          alt={`Image for ${portfolioData[activeIndex].event}`}
          className="object-contain w-80 h-80 pointer-events-auto shadow-lg rounded-3xl transition-all duration-300"
        />
      </div>

      {/* Right Section */}
      <div
        ref={rightSectionRef}
        className="flex-1 p-8 space-y-8 overflow-y-auto pt-16 h-full"
        style={{ height: "calc(100vh - 20px)" }}
      >
        {portfolioData.map((item, index) => (
          <div key={index} className="p-4 rounded-lg bg-white">
            <div className="flex items-center space-x-4">
              <FaCalendarAlt className="text-2xl" />
              <h2 className="relative text-primary1 text-xl font-bold mb-2">
                <span className="relative z-10">{item.event}</span>
                <span className="absolute bottom-1 left-0 w-28 border-b-8 border-primary2 z-0"></span>
              </h2>
            </div>
            <p className="mt-4">{item.description}</p>
            <div className="mt-4 p-4 shadow-lg rounded-lg">
              <h3 className="font-semibold">Details:</h3>
              <ul className="list-disc list-inside ml-4 mt-2">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
              {/* <Button className="mt-4 text-white w-40 h-15 bg-[#BE9553] hover:bg-[#3E2300]">
                Contact Us
              </Button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFiles;
