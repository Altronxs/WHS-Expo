const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "impact": ["Impact", "sans-serif"],
        "roboto-regular": ["Roboto_400Regular", ...fontFamily.sans], 
        "roboto-bold": ["Roboto_700Bold", ...fontFamily.sans],
        "roboto-italic": ["Roboto-Italic", "sans-serif"],
      },
    },
  },
  plugins: [],
}