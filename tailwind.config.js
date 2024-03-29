/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      "sx-max": { max: "545px" },
      md: "485px",
      "md-max": { max: "768px" },
      lg: "545px",
      "lg-max": { min: "920px" },
      xl: "1200px",
      "xl-max": { max: "1200px" },
      "2xl": "1320px",
      "2xl-max": { min: "1320px" },
      "3xl-max": { min: "1500px" },

    },
    fontFamily: {
      "Kr": "kaushanScript-Regular",
      "Lr": "LeagueGothic-Regular",
      "M": "Manrope",

    },


    // fontFamily: {
    //   kaushanScriptRegular: "kaushanScriptRegular",
    //   leagueGothicRegular: "leagueGothicRegular",
    //   Manrope: "Manrope",
    // },

    //   inherit: colors.inherit,
    //   current: colors.current,
    //   transparent: colors.transparent,
    //   black: colors.black,
    //   white: colors.white,

    //   slate: {
    //     DEFAULT: colors.slate,
    //     50: "#f8fafc",
    //     // 100: "#dee2e6",
    //     // 200: "#cbd3da",
    //     // 300: "#a8b8d8",
    //     // 400: "#8392ab",
    //     // 500: "#67748e",
    //     // 600: "#627594",
    //     // 700: "#344767",
    //     // 750: "#323a54",
    //     // 800: "#3a416f",
    //     // 850: "#111c44",
    //     // 900: "#051139",
    //   },
    // }),
    plugins: [],
  },
};
