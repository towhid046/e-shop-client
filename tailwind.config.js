/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["winter"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#60A5FA",
        "secondary-color": "#3B82F6",
      },
    },
  },
  plugins: [require("daisyui")],
};
