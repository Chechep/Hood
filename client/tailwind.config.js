/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          500: "#10b981",
          600: "#059669",
          800: "#065f46"
        },
        lightyellow: "#FFF9C4"
      }
    }
  },
  plugins: []
};
