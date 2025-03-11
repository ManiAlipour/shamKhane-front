/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-fa"],
      },
      colors: {
        primary: {
          DEFAULT: "#FF6B6B",
          50: "#FFF0F0",
          100: "#FFE1E1",
          200: "#FFC4C4",
          300: "#FFA7A7",
          400: "#FF8989",
          500: "#FF6B6B",
          600: "#FF4D4D",
          700: "#FF2F2F",
          800: "#FF1111",
          900: "#F20000",
        },
      },
      animation: {
        gradient: "gradient 3s ease infinite",
        shine: "shine 1s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        shine: {
          "0%": { "background-position": "200% center" },
          "100%": { "background-position": "-200% center" },
        },
      },
    },
  },
  plugins: [],
};
