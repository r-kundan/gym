/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    screens: {
      'sm': '640px',
      'md': '1024px',
      'lg': '1536px',
    },
    extend: {

      boxShadow: {
        'innerShadow': '0px 0px 10px 4px white',
      },
    },
  },
  plugins: [],
}

