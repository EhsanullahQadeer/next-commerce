import { colors } from "./src/theme/color";
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
      colors: colors("tailwind"),
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
