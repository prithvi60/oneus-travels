const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(card|checkbox|dropdown|input|link|navbar|radio|ripple|select|table|popover|menu|divider|button|spinner|listbox|scroll-shadow|spacer).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: "var(--font-lato)",
        Montserrat: "var(--font-montserrat)",
        Caveat: "var(--font-caveat)",
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
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary :"#FEFEFF", // Main Bg
            secondary: "#353B6B", // text & section bg
            success: "#3880CB", // hover effect & btn border
            info: "#CB8238"
          },
        },
      },
    }),
  ],
};