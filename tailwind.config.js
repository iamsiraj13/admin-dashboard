/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#3461FF",
        "blue-light": "#C1CFFF",
        gray: "#343a40",
        "gray-light": "#b0afaf",
      },
    },
    boxShadow: {
      my: "0 0.125rem 0.25rem rgb(0 0 0 / 8%)",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
  variants: {
    scrollbar: ["rounded"],
  },
};
