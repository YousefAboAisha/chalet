/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Containers/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // Dark Theme variables
        background_dark: "#181D31",
        text_dark: "#FFF",

        // Light theme variables
        background_light: "#F9F9F9",
        text_light: "#181D31",

        // Primary theme variables
        primary: "#D61355",
        primary_hover: "#ff3380",

        // Secondary theme variables
        secondary: "#003566",

        border_dark: "#dddddd24",

        // Fixed backgroundColor in both themes
        // background: "#181D31",
      },

      fontFamily: {
        primary: ["var(--font-opensans)"],
        secondary: ["var(--font-cairo)"],
      },

      borderColor: {
        light: "#181D3150",
        dark: "#dddddd1a",
      },

      keyframes: {
        HorizentalMove: {
          "0%, 100%": { transform: "translateY(5px) scale(1)", opacity: 1 },
          "50%": { transform: "translateY(-5px) scale(1.01)", opacity: 1 },
        },
        ShadowPulse: {
          "0%, 100%": { boxShadow: "7px 12px #2B4865", opacity: 1 },
          "50%": { opacity: 0.9 },
        },
        ScaleEffect: {
          "0%, 100%": { scale: "1", opacity: 1 },
          "50%": { scale: "1.01", opacity: 0.9 },
        },
      },
      animation: {
        HorizentalMove: "HorizentalMove 3.5s linear infinite",
        ShadowPulse: "ShadowPulse 2.5s linear infinite",
        ScaleEffect: "ScaleEffect 4s linear infinite",
      },
      backgroundImage: {
        "landing-image": "url('/landing.jpeg')",
      },
    },
  },
  plugins: [],
};
