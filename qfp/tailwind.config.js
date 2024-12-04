module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007050",
        primaryHover: "#12cd96",
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      width: {
        "1/3": "33.333333%",
        "1/4": "25%",
        "7/8": "87%"
      },
      borderRadius: {
        'lg': '0.5rem', // 8px
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-20px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out forwards",
        fadeOut: "fadeOut 1.5s ease-in-out forwards",
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};