module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ECEBFF",
          200: "#C5C2FF",
          300: "#9E99FF",
          400: "#6C63FF",
          500: "#5952D1",
        },
        secondary: {
          100: "#FEEBEF",
          200: "#FED7DF",
          300: "#FD9BAE",
          400: "#FD6584",
          500: "#FC4A6E",
        },
        neutral: {
          100: "",
          200: "",
          300: "",
          400: "",
          500: "",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
