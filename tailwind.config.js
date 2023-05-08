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
        green: "#12bf24",
        pink: "#e72e7a",
        orange: "#ff6632",
        info: "#32bfff",
        beguni: "#8932ff",
        red: "#e72e2e",
        main: "#C9CBCC",
        hard: "#4C5258",
        soft: "#4C5258",
      },
      boxShadow: {
        my: "0 0.125rem 0.25rem rgb(0 0 0 / 8%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
  variants: {
    scrollbar: ["rounded"],
  },
};
