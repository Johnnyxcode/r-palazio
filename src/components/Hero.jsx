import React, { useEffect, useRef } from "react";
import Nav from "./Nav";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Set playback speed (0.6 is adjusted rate)
    }
  }, []);

  const text = "DOWN SCROLL DOWN SCROLL DOWN SCROLL ";

  return (
    <div
      className="relative bg-primary h-[780px] md:h-screen overflow-hidden"
      id="home"
    >
      <Nav />
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="./video/Event.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-black/40 to-black z-10"></div>

      {/* Content */}
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 text-white">
        <h1 className="text-lg font-bold whitespace-nowrap md:text-5xl">
          Creating Memorable Experiences
        </h1>
        <p className="mt-4 mx-10 md:mx-40 text-sm text-[#ffeac6] md:text-2xl">
          We turn your vision into memorable events with careful planning and
          attention to detail, leaving a lasting impression.
        </p>
      </div>

      {/* Rotating Text */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative w-40 h-40 flex items-center justify-center">
          <div className="absolute w-full h-full rounded-full animate-spin-slow">
            <div className="text-circle">
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  style={{
                    transform: `rotate(${index * (360 / text.length)}deg)`,
                  }}
                  className="circle-text text-l"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
