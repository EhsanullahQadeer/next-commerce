import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        icon: '\f10e'
      },
      colors: {
        primary: {
          DEFAULT: "#cc9966",
          50: "#c96",
        },
        secondary: {
          DEFAULT: "#cc6666",
        },
        black: {
          DEFAULT: "#000000",
          50: "#222222",
          75: "#333333",
          100: "#666666",
          200: "#999999",
          300: "#ebebeb",
          400: "rgba(255, 255, 255, 0.1)",
          500: "#777777",
          600: "#cccccc",
        },
      },
      width: {
        container: "1188px",
      },
      maxWidth: {
        container: "1188px",
      },
      boxShadow: {
        dropdown:
          "5px 10px 16px rgba(51, 51, 51, 0.05), -5px 10px 16px rgba(51, 51, 51, 0.05)",
        "mobile-nav": "0.1px 0 6px 0 rgba(51, 51, 51, 0.5)",
        variant: "0 0 0 1px #cccccc",
        thumbnail: "0 0 0 1px #c96",
      },
      screens: {
        xs: "480px",
      },
      keyframes: {
        affix: {
          "0%": {
            transform: "translateY(-60px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        affix: "affix 0.4s all",
      },
    },
  },
  plugins: [],
};
export default config;
