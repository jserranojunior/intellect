// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // gray: colors.coolGray,
      blue: colors.blue,
      green: colors.green,
      red: colors.rose,
      pink: colors.fuchsia,
      black: colors.black,
      white: colors.white,
      yellow: colors.amber,
      indigo: colors.indigo,
      gray:colors.gray
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
