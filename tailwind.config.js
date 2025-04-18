const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|card|checkbox|dropdown|input|link|navbar|radio|ripple|select|table|tabs|divider|menu|popover|button|spinner|listbox|scroll-shadow|spacer).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        contact_bg_lg: "url('/world_map_lg.png')",
        contact_bg_sm: "url('/world_map_sm.png')",
      },
      fontFamily: {
        Gilroy: ["var(--font-gilroy)"],
        Poppins: ["var(--font-poppins)"],
      },
      aspectRatio: {
        box: "3 / 4",
        clip: "9 / 16",
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1560px",
        "3xl": "1920px",
        lg_2: "1120px",
      },
      keyframes: {
        rotateAnimate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotateAnimate 3s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#FEFEFF", // Main Bg
            secondary: "#061735", // text & section bg
            success: "#AE0001", // hover effect & btn border
            info: "#CB8238",
          },
        },
      },
    }),
  ],
};
