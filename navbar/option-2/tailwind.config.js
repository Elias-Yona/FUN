/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "space-cadet": "hsl(249, 37%, 19%)",
        saffron: "hsl(45, 91%, 58%)",
      },
      fontSize: {
        "fs-1": "18px",
        "fs-2": "14px",
      },
      screens: {
        tablet: "570px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
