/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      mdl: "900px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1350px",
    },
    colors: {
      white: "#fff",
      black: "#000000",
      coolBlack: "#0E0E10",
      osloGrey: "#908FA4",
      lightGrey: "#D9D9D9",
      balticSea: "#1E1F28",
      mirage: "#15141B",
    },
    extend: {},
  },
  plugins: [],
};
