import React from "react";

function Services() {
  return (
    //   <!-- Parent Container -->
    <div class="flex flex-col mt-40 mb-40 lg:flex-row lg:items-center p-4">
      {/* <!-- Left Side --> */}
      <div class="relative w-full lg:w-1/2 h-64 lg:h-auto mb-4 lg:mb-0">
        {/* <!-- Background Circles --> */}
        <div class="absolute top-0 left-0  w-full h-full flex justify-center items-center">
          {/* <!-- Circles --> */}
          {/* <!-- Circle with Border Only --> */}
          <div class="absolute rounded-full border border-dark w-60 h-60 bg-transparent -top-32 -left-14"></div>
          <div class="absolute rounded-full border border-dark w-44 h-44 bg-transparent -top-24 left-28"></div>
          <div class="absolute rounded-full border border-dark w-60 h-60 bg-transparent top-20 -left-14"></div>
          <div class="absolute rounded-full border border-dark w-80 h-80 bg-transparent -top-5 left-12"></div>
          {/* <!-- Images --> */}
          <img
            src="./image/assets/palazio1.jpg"
            class="absolute rounded-full w-36 h-36 z-10 -top-20  -left-4  md:-top-20 md:-left-4"
          />
          <img
            src="./image/assets/palazio2.jpg"
            class="absolute rounded-full w-36 h-36 z-30 -top-28  left-28  md:-top-28 md:left-28"
          />
          <img
            src="./image/assets/palazio3.jpg"
            class="absolute rounded-full w-36 h-36 z-10 top-10  left-8  md:-top-18 md:left-18"
          />
          <img
            src="./image/assets/palazio4.jpg"
            class="absolute rounded-full w-36 h-36 z-20 top-1  left-40  md:-top-15  md:left-34"
          />
          <img
            src="./image/assets/palazio5.jpg"
            class="absolute rounded-full w-36 h-36 z-0 top-36  left-38  md:-top-15  md:left-24"
          />
          <img
            src="./image/assets/palazio6.jpg"
            class="absolute rounded-full w-36 h-36 top-28  left-56  md:-top-15  md:left-34"
          />
        </div>
      </div>

      {/* <!-- Right Side --> */}
      <div class="w-full mt-28 md:w-1/2 lg:w-1/2 flex flex-col justify-center px-4 lg:px-8">
        {/* <!-- Small Heading --> */}
        <h2 class="text-xl font-bold mb-2">Small Heading</h2>
        {/* <!-- Larger Heading --> */}
        <h1 class="text-3xl font-bold mb-4">Larger Heading</h1>
        {/* <!-- Paragraphs  */}
        <p class="mb-2">
          First paragraph of text goes here. This is where you describe
          something.
        </p>
        <p class="mb-2">
          Second paragraph of text goes here. Continue with more details.
        </p>
        <p>
          Third paragraph of text goes here. Provide additional information as
          needed.
        </p>
      </div>
    </div>
  );
}

export default Services;
