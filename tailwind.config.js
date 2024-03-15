/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xs": "300px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      width: {
        "max-content": "max-content",
      },
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
