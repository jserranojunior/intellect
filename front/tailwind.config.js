// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // gray: colors.coolGray,
      blue: {
        DEFAULT: "#557E9B",
        50: "#E5ECF1",
        100: "#D4DFE7",
        200: "#B3C7D5",
        300: "#92AFC3",
        400: "#7297B1",
        500: "#557E9B",
        600: "#43637A",
        700: "#314859",
        800: "#1F2D38",
        900: "#0D1317",
      },
      red: colors.rose,
      pink: colors.fuchsia,
      black: colors.black,
      white: colors.white,
      yellow: colors.amber,
      indigo: colors.indigo,
      gray: {
        50: "#DDDDDF",
        100: "#D0D0D2",
        200: "#B6B5BA",
        300: "#9C9BA1",
        400: "#828188",
        500: "#69686E",
        600: "#504F54",
        700: "#37363A",
        800: "#1E1E20",
        900: "#050505",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
