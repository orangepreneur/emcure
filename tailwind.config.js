module.exports = {
  purge: ["dist/**/*.html", "dist/**/*.js","src/**/*.html", "src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      height: {
        500: "500px",
        600: "600px",
        banner: "640px",
        400: "400px",
        xs: "0.3rem",
        700: "700px",
        300: "300px",
        350: "350px",
      },
      fontSize: {
        54: "54px",
        56: "56px",
        44: "44px",
        40: "40px",
        36: "2.25rem",
        48: "48px",
        22: "22px",
        19: "19px",
        17: "17px",
      },
      lineHeight: {
        ten: "10px",
        25: "25px",
        30: "30px",
        34: "34px",
        body: "26px",
        heading: "46px",
        55: "55px",
        81: "81px",
      },

      width: {
        500: "500px",
        700: "700px",
        993: "993px",
        384: "384px",
      },
      maxWidth: {
        wrapper: "1196px",
        1500: "1500px",
      },
      letterSpacing: { heading: "5.76px", sectionH: "-0.9px" },
      colors: {
        primary: {
          offwhite: "#FAFAFA",
          heading: "#2A2D2E",
          light: "#dd1818",
          DEFAULT: "#c90101",
          body: "#72787A",
          dark: "#870000",
          footer: "#282b30",
        },
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
