import React, { useEffect, useRef } from "react";

const AnimatedComponent = () => {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    const animateText = (element, direction) => {
      const elementWidth = element.offsetWidth;
      const containerWidth = element.parentElement.offsetWidth;

      let start = direction === "left" ? containerWidth : -elementWidth;
      let end = direction === "left" ? -elementWidth : containerWidth;

      const animate = () => {
        if (direction === "left") {
          start -= 1; // Adjust the scroll speed here
          if (start <= end) start = containerWidth;
        } else {
          start += 1; // Adjust the scroll speed here
          if (start >= end) start = -elementWidth;
        }
        element.style.transform = `translateX(${start}px)`;
        requestAnimationFrame(animate);
      };

      animate();
    };

    if (leftTextRef.current && rightTextRef.current) {
      animateText(leftTextRef.current, "left");
      animateText(rightTextRef.current, "right");
    }
  }, []);

  return (
    <div className="relative rounded-t-2xl w-full h-[500px] mb-10 bg-gradient-to-t from-transparent to-blue-500 flex items-end justify-center overflow-hidden">
      <img
        src="./image/assets/building.png" // replace with your image path
        alt="Event"
        className="absolute z-20 bottom-0 object-contain h-3/3"
      />
      <div className="absolute w-full flex flex-col items-center">
        <div
          ref={leftTextRef}
          className="absolute -top-80 z-30 whitespace-nowrap text-7xl md:text-9xl font-bold text-white"
          style={{ whiteSpace: "nowrap" }}
        >
          Contact us for your event planning
        </div>
        <div
          ref={rightTextRef}
          className="absolute -top-60 z-10 whitespace-nowrap text-7xl md:text-9xl font-bold text-white"
          style={{ whiteSpace: "nowrap" }}
        >
          Contact us for your event planning
        </div>
      </div>
    </div>
  );
};

export default AnimatedComponent;
