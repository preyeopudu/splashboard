/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "some-blue": "#213F7D",
        "button-red": "rgba(228, 3, 59, 1)",
        "button-blue": "rgba(57, 205, 204, 1)",
      },
    },
  },
  plugins: [],
};
