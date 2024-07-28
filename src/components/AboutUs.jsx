import React from "react";
import {
  FaSearch,
  FaRocket,
  FaLightbulb,
  FaPaintBrush,
  FaWrench,
  FaChartLine,
} from "react-icons/fa";
import Button from "./Button";

const AboutUs = () => {
  // Data for values
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

  // Data for cards
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

  // Reusable Card component
  const Card = ({ icon, title, text }) => (
    <div className="p-4 bg-transparent rounded">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-300 rounded-full">
        {icon}
      </div>
      <h4 className="mb-2 text-xl font-semibold text-left">{title}</h4>{" "}
      {/* Align text to the left */}
      <p className="text-left text-gray-700">{text}</p>{" "}
      {/* Align text to the left */}
    </div>
  );

  return (
    <div className="px-8 py-12 space-y-8 text-left">
      <div className="content-start">
        <h1 className="text-2xl font-bold" id="about">
          About Us
        </h1>
        <p className="mt-2 md:mr-[700px] mr-10 text-md md:text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet sem sed eros semper congue.
        </p>
        <Button className="mt-4 text-white w-40 h-15 bg-[#BE9553] hover:bg-[#3E2300]">
          Contact Us
        </Button>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold">Our Values</h2>
          <hr className="mt-2 border-gray-800" />
        </div>

        {values.map((value, index) => (
          <div key={index}>
            <h3 className="text-xl underline font-semibold">{value.title}</h3>
            <div className="flex py-10 justify-between mt-1 text-gray-800">
              <p className="md:mr-[25%] mr-10">{value.text}</p>
              <span className="text-gray-800 md:font-bold py-28 md:py-0 text-4xl md:text-7xl">
                {value.figure}
              </span>
            </div>
            {index < values.length - 1 && (
              <hr className="mt-4 border-gray-800" />
            )}
          </div>
        ))}
      </div>

      <div className="bg-transparent">
        <h2 className="text-2xl font-bold mb-5">Why us.</h2>

        <p className="mt-2 text-4xl text-gray-900 mb-20">
          6 reason to work with us
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3 bg-transparent">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
