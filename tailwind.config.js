/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C2185B",
        secondary: "#8E244D",
        darkText: "#2B0F1E",
        grayText: "#6B5563",
        lightBg: "#FFF6FA",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
