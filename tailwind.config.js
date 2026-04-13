/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f3460",
        accent: "#ff6b35",
        gold: "#f7c948",
        "brand-green": "#2d6a4f",
      },
    },
  },
  plugins: [],
};
