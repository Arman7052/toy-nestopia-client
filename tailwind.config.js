/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#284096",

          "secondary": "#EE82EE",

          "accent": "#f4e029",

          "neutral": "#1C1320",

          "base-100": "#3d0072",

          "info": "#8FC0DB",

          "success": "#0E675B",

          "warning": "#C06F0C",

          "error": "#EC363F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

