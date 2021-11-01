const colors = require("tailwindcss/colors");
module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        paper: "#fffefc",
        lightblue: "#BFDAE4",
        lightgreen: "#AED6B8",
        darkgreen: "#5F906B",
        sanskrit: "#e6dfdb",
        graygray: "#424545",
      },
    },
  },
  variants: {
    extend: {},
    display: ["group-hover"],
  },
  plugins: [],
};

