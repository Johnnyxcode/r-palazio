import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaRocket,
  FaLightbulb,
  FaPaintBrush,
  FaWrench,
  FaChartLine,
} from "react-icons/fa";
import Modal from "./Modal";
import Button from "./Button";
import ContactUs from "./ContactUs";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textWidths, setTextWidths] = useState({});
  const sectionRef = useRef(null);
  const textRefs = {
    aboutUs: useRef(null),
    ourValues: useRef(null),
    whyUs: useRef(null),
    cards: Array(6)
      .fill(0)
      .map(() => useRef(null)),
  };

  useEffect(() => {
    const measureTextWidths = () => {
      const widths = {};
      Object.keys(textRefs).forEach((key) => {
        if (key === "cards") {
          widths[key] = textRefs[key].map((ref) =>
            ref.current ? ref.current.offsetWidth : 0
          );
        } else if (textRefs[key].current) {
          widths[key] = textRefs[key].current.offsetWidth;
        }
      });
      setTextWidths(widths);
    };

    measureTextWidths();
    window.addEventListener("resize", measureTextWidths);
    return () => window.removeEventListener("resize", measureTextWidths);
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const values = [
    {
      title: "Professionalism.",
      text: "Our team maintains the highest standards of professionalism, from planning through execution, ensuring a smooth and successful event. We are committed to delivering excellence and conducting ourselves with integrity and respect at all times. You can rely on us to manage your event with the utmost care and competence.",
      figure: "01",
    },
    {
      title: "Trust.",
      text: "You can count on us to deliver on our promises. We build trust through consistent, dependable service. Our team is dedicated to being there for you every step of the way, providing support and ensuring that your event is executed flawlessly. Your peace of mind is our priority.",
      figure: "02",
    },
    {
      title: "Flexibility.",
      text: "We are prepared to adapt to any changes or challenges, ensuring your event runs smoothly no matter what arises. Our team is skilled at thinking on their feet and finding creative solutions to any unexpected issues. We are committed to making sure your event is a success, regardless of the circumstances.",
      figure: "03",
    },
    {
      title: "People.",
      text: "People are our greatest asset. We value diversity, inclusivity, and collaboration, recognizing that our collective strength lies in our differences. We prioritize the well-being and development of our team members and foster a supportive and empowering work environment. By investing in people, we nurture talent and creativity and build strong, resilient communities.",
      figure: "04",
    },
  ];

  const cards = [
    {
      icon: <FaSearch />,
      title: "Expert Planning",
      text: "We meticulously plan every detail to ensure your event is seamless and unforgettable. Our comprehensive planning process covers everything from initial concept to final execution, leaving no stone unturned. We work closely with you to understand your vision and objectives, ensuring that every element aligns with your goals. Our attention to detail and proactive approach mean that potential issues are anticipated and addressed before they can impact your event.",
    },
    {
      icon: <FaRocket />,
      title: "Innovative Ideas",
      text: "Our creative team brings fresh, innovative ideas to make your event stand out. We believe that creativity is key to making an event memorable and impactful. Whether it’s unique themes, cutting-edge technology, or engaging activities, we strive to push the boundaries of traditional event planning. We collaborate with you to develop concepts that are not only innovative but also aligned with your brand and message, ensuring a truly customized experience.",
    },
    {
      icon: <FaLightbulb />,
      title: "Experienced Team",
      text: "With years of experience, we know how to handle any situation that arises. Our seasoned professionals have managed events of all sizes and types, giving us the expertise to navigate any challenge. We are adept at problem-solving and quick decision-making, ensuring that your event runs smoothly no matter what. Our experience allows us to provide valuable insights and recommendations, helping you make informed decisions throughout the planning process.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Customized Services",
      text: "We tailor our services to meet your unique needs and preferences. We understand that every event is different, and we take the time to listen to your specific requirements. From venue selection to decor and entertainment, we customize every aspect to reflect your style and vision. Our goal is to create a personalized experience that resonates with you and your guests, making your event truly one-of-a-kind.",
    },
    {
      icon: <FaWrench />,
      title: "Reliable Support",
      text: "Our team is always available to provide support and address any concerns. We pride ourselves on our responsiveness and dedication to client satisfaction. From the initial consultation to post-event follow-up, we are with you every step of the way. Our support extends beyond event day, as we ensure that all aspects are wrapped up smoothly and any feedback is addressed promptly. You can count on us to be there when you need us, providing peace of mind throughout the process.",
    },
    {
      icon: <FaChartLine />,
      title: "Proven Results",
      text: "We have a track record of successful events and satisfied clients. Our portfolio includes a diverse range of events, each delivered with precision and excellence. We measure our success by the satisfaction of our clients and the positive impact of their events. Our commitment to quality and results-driven approach means that we continually strive to exceed expectations. We invite you to join our list of happy clients and experience the difference of working with a proven team.",
    },
  ];

  const Card = ({ icon, title, text }) => (
    <div className="p-4 bg-transparent rounded">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary2 rounded-full">
        {icon}
      </div>
      <h4 className="relative mb-2 text-2xl font-semibold text-left">
        <span className="relative underline text-black font-bold z-10">
          {title}
        </span>
      </h4>
      <p className="text-left text-gray-700">{text}</p>
    </div>
  );

  return (
    <div className="px-8 py-12 space-y-8 text-left" ref={sectionRef}>
      <div className="content-start">
        <h1 className="relative text-2xl font-bold mb-2">
          <span
            className="relative text-4xl text-black z-10"
            ref={textRefs.aboutUs}
          >
            About us
          </span>
          <span
            className="absolute bottom-0 left-0 border-b-[26px] border-primary2 z-0"
            style={{
              width: `${textWidths.aboutUs || 0}px`,
              transition: "width 0.8s ease-in-out",
            }}
          ></span>
        </h1>

        <p className="mt-2 mb-8 font-medium text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <Button
          onClick={handleOpenModal}
          className="text-white w-full md:w-auto bg-primary2 font-bold hover:bg-primary1"
        >
          Read more
        </Button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ContactUs />
        </Modal>
      </div>

      <div className="space-y-8">
        <div>
          <h1 className="relative text-4xl font-bold mb-2">
            <span className="relative text-black z-10" ref={textRefs.ourValues}>
              Our values
            </span>
            <span
              className="absolute bottom-0 left-0 border-b-[26px] border-primary2 z-0"
              style={{
                width: `${textWidths.ourValues || 0}px`,
                transition: "width 0.8s ease-in-out",
              }}
            ></span>
          </h1>

          {values.map((value, index) => (
            <div key={index}>
              <h3 className="text-2xl text-black font-bold mt-10 underline">
                {value.title}
              </h3>
              <div className="flex">
                <div className="flex py-10 justify-between mt-5 mr-5 md:mr-32 text-gray-800">
                  <p>{value.text}</p>
                </div>
                <div>
                  <span className="text-primary2 font-bold md:text-8xl">
                    {value.figure}
                  </span>
                </div>
              </div>
              {index < values.length - 1 && (
                <hr className="mt-4 border-2 border-primary2" />
              )}
            </div>
          ))}
        </div>

        <div>
          <h1 className="relative text-4xl font-bold mb-2">
            <span className="relative text-black z-10" ref={textRefs.whyUs}>
              Why us
            </span>
            <span
              className="absolute bottom-0 left-0 border-b-[26px] border-primary2 z-0"
              style={{
                width: `${textWidths.whyUs || 0}px`,
                transition: "width 0.8s ease-in-out",
              }}
            ></span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                text={card.text}
                ref={textRefs.cards[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
