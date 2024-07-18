/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BE9553", // Existing primary color
        primary2: "#ffeac6", // Existing primary color
        secondary: "#DFE0DF", // New color with a name 'secondary'
        nature: "#007663", // New color with a name 'accent'
        dark: "#3E2300", // New color with a name 'dark'
      },
    },
  },
  plugins: [
    // Any additional plugins you want to configure can be added here
  ],
};
