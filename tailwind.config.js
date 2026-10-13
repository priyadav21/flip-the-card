/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#163a32",
        leaf: "#b9f36b",
        coral: "#ff7964",
        mist: "#eff5ef",
        cyan: "#65e5dc",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
