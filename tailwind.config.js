/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        open: "Open Sans",
        paprika: "Paprika",
      },
      maxWidth: {
        container: "1144px",
      },
      colors: {
        btnColor: "#FF7628",
      },
    },
  },
  plugins: [],
};
