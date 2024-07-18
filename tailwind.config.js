/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffeac6", // Define primary color here
      },
    },
  },
  plugins: [
    // Any additional plugins you want to configure can be added here
  ],
};
