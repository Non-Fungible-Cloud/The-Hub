/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        brand: "#123962",
        "brand-light": "#2478CD",
        "brand-lighter": "#B3D5F2",
        correct: "#50B66B",
        warning: "#FEA446",
        error: "#50B66B",
        white: "#fff",
        black: "#0d0d0d",
      },
    },
  },
  plugins: [],
}
