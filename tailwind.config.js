/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#B3AEC3",
        "th-red":"#F34734",
        "th-blue":"#83A598",
        "th-green":"#8DC07C",
        "th-yellow":"#FABD2E",
        "th-purp":"#B16286",
      },
      fontFamily: {
        'worksans':['Work Sans','sans-serif'],
      }
    },
  },
  plugins: [],
};
