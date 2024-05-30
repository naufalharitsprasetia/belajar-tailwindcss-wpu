/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        goyang: "goyang 1s ease-in-out infinite",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        wpu: "#bada55",
        kopi: "#c0ffee",
      },
    },
  },
  plugins: [],
};
