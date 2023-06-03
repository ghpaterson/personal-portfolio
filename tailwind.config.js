/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fungis: ["fungis", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sudo: ["sudo", "sans-serif"],
        mirage: ["mirage", "san-serif"],
      },
      colors: {
        blu: "#2180D8",
        bone: "#FFFFFC",
        sand: "#F1DDB6",
      },
    },
  },
  plugins: [],
};
