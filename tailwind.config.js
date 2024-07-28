/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#661051", // Existing primary color
        primary2: "#9F2C55", // Existing primary color
        primary3: "#CD5552", // New color with a name 'secondary'
        primary4: "#ED874D", // New color with a name 'accent'
        primary5: "#FBBE53", // New color with a name 'dark'
        primary6: "#F9F871", // New color with a name 'accent'
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 10s linear infinite",
        scrollRight: "scrollRight 10s linear infinite",
      },
    },
  },
  plugins: [
    // Any additional plugins you want to configure can be added here
  ],
};
