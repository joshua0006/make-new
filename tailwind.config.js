/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          600: "#D4AF37",
          700: "#C5A028",
        },
      },
    },
  },
  plugins: [],
};
