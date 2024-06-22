/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1600px",
      "5xl": "1920px",
    },
    extend: {
      colors: {
        primary: {
          one: "#FFDB01",
          two: "#000",
          three: "#05A0FD",
          10: "rgba(170, 231, 224, 0.22)",
          50: "#B4F0E9",
          100: "#54BDAF",
          200: "#EEFFFD",
          300: "#2FC4B1",
          400: "#289C8F",
          500: "#008080",
          600: "#CCFFFA",
        },
        secondary: "#00F5A0",
        tertiary: "#00D9F5",
        "yellow-primary": "#F2F4D6",
        light: "#464646",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      listStyleType: {
        square: "square",
      },
      animation: {
        fadeIn: "fadeInAni .5s ease-in-out forwards",
        scaleIn: "scaleUpAni .3s ease-out forwards",
        slider: "imageCarousel 20s infinite linear ",
      },
      keyframes: {
        fadeInAni: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleUpAni: {
          from: { transform: "scale(.5)" },
          to: { transform: "scale(1)" },
        },
        imageCarousel: {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
