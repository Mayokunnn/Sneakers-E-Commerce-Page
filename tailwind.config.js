/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "409px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      gradientColorStopPositions: {
        33: "33%",
      },
      colors: {
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: " hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        orange: "hsl(26, 100%, 55%)",
        paleOrange: " hsl(25, 100%, 94%)",
      },
    },
  },
  plugins: [],
};
