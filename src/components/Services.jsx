import React from "react";

function Services() {
  return (
    //   <!-- Parent Container -->
    <div className="flex flex-col mt-32 md:mt-10 mb-20 md:mb-40 lg:flex-row lg:items-center p-4">
      {/* <!-- Left Side --> */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto mb-4 lg:mb-0">
        {/* <!-- Background Circles --> */}
        <div className="absolute top-0 left-0  w-full h-full flex justify-center items-center">
          {/* <!-- Circles --> */}
          {/* <!-- Circle with Border Only --> */}
          <div className="absolute rounded-full border-2 border-primary3 w-60 h-60 bg-transparent -top-32 -left-14"></div>
          <div className="absolute rounded-full border-2 border-primary3 w-44 h-44 bg-transparent -top-24 left-28"></div>
          <div className="absolute rounded-full border-2 border-primary3 w-60 h-60 bg-transparent top-20 -left-14"></div>
          <div className="absolute rounded-full border-2 border-primary3 w-80 h-80 bg-transparent -top-5 left-12"></div>
          {/* <!-- Images --> */}
          <img
            src="./image/assets/palazio1.jpg"
            className="absolute rounded-full w-36 h-36 z-10 -top-20  -left-4  md:-top-20 md:-left-4"
          />
          <img
            src="./image/assets/palazio2.jpg"
            className="absolute rounded-full w-36 h-36 z-30 -top-28  left-28  md:-top-28 md:left-28"
          />
          <img
            src="./image/assets/palazio3.jpg"
            className="absolute rounded-full w-36 h-36 z-10 top-10  left-8  md:-top-18 md:left-18"
          />
          <img
            src="./image/assets/palazio4.jpg"
            className="absolute rounded-full w-36 h-36 z-20 top-1  left-40  md:-top-15  md:left-34"
          />
          <img
            src="./image/assets/palazio5.jpg"
            className="absolute rounded-full w-36 h-36 z-0 top-36  left-38  md:-top-15  md:left-24"
          />
          <img
            src="./image/assets/palazio6.jpg"
            className="absolute rounded-full w-36 h-36 top-28  left-56  md:-top-15  md:left-34"
          />
        </div>
      </div>

      {/* <!-- Right Side --> */}
      <div className="w-full mt-28 md:w-1/2 lg:w-1/2 flex flex-col justify-center px-4 lg:px-8">
        {/* <!-- Small Heading --> */}
        <h2 className="relative text-3xl font-bold text-primary1 mb-2">
          <span className="relative  z-10">Small Heading</span>
          <span className="absolute bottom-1 left-0 w-32 border-b-8 border-primary2 z-0"></span>
        </h2>

        {/* <!-- Larger Heading --> */}
        <h1 className=" mb-4 text-2xl font-medium">Our services</h1>
        {/* <!-- Paragraphs --> */}
        <p className="mb-2">
          We turn your vision into memorable events with careful planning and
          attention to detail, leaving a lasting impression. Our comprehensive
          event planning services ensure that every aspect of your event is
          meticulously organized and executed. We start with understanding your
          vision and requirements, followed by tailored plans to meet your
          unique needs and preferences. Efficient budgeting is also part of our
          service to ensure you get value for money without compromising on
          quality.
        </p>
        <p className="mb-2">
          Celebrate your special day with our comprehensive wedding planning
          services. We create magical moments that you and your guests will
          cherish forever. From beautifully decorated venues that match your
          theme to delicious and diverse menu options, we take care of it all.
          Our professional photographers and videographers capture every
          precious moment, while our entertainment and music services ensure
          your guests are entertained throughout. Personalized invitations and
          seamless guest handling add a special touch to your celebration.
        </p>
        <p className="mb-2">
          Make your birthday unforgettable with our customized birthday party
          planning services. We create fun and memorable experiences for all
          ages. Our services include creative themes and vibrant decorations,
          engaging activities and games for everyone, and delicious cakes and
          treats. Unique and fun party favors add to the excitement, while our
          professional photographers and videographers capture the joy and
          excitement of your special day.
        </p>
        <p className="mb-2">
          Professional event planning for corporate meetings, conferences, and
          seminars is our forte. We ensure your corporate events are successful
          and impactful. Convenient and well-equipped venues, high-quality AV
          solutions for presentations, and delicious and varied food options are
          just the beginning. Smooth and efficient guest handling and enhancing
          your brand’s presence with branding and promotional materials ensure a
          seamless experience for all attendees.
        </p>
        <p>
          Celebrate your engagement with a beautifully planned and executed
          party. We create a romantic and joyful atmosphere for your special
          occasion. Our services include elegant and charming venues, gourmet
          dining experiences, and romantic music and entertainment. Personalized
          guest invitations and professional photographers and videographers
          capture the love and joy, ensuring your engagement party is a
          memorable event.
        </p>
      </div>
    </div>
  );
}

export default Services;
