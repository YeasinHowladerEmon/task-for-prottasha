/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBanner: `linear-gradient(0deg, rgba(23, 16, 16, 0.6), rgba(23, 16, 16, 0.6)), url(/src/assets/images/bannar.png)`,
        heroBanner2: `url(/src/assets/images/banner2.png)`
      },
      colors: {
        black2: "#252B42",
        primary: "#FA4A0C",
        burger: "#737373",
        blackK: "#000",
        textWhite: "#F6F6F6",
        white: "#ffffff",
        BackgroundColor: "#EDEDED",
        greySecond: "#737373",
        greyBlue: "#252B42",
        boxShadow: "0px 10px 30px rgba(183, 58, 39, 0.2)",
        borderWhite: "1px solid white"
      },
      lineHeight: {
        mediumHeight: "1.5 !important"
      },
      filter: {
        filterImage: " drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21))"
      },
      screens: {
        xxl: { min: "1536px" },
        xl: { min: "1280px" },      
        lg: { min: "1024px" },
        md: { min: "768px" },
        sm: { min: "425px" && "375px" && "320px" }
      }
    }
  },
  plugins: []
};
