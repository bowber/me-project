/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   'sans': ['Messina Sans', 'sans-serif'],
    // },
    extend: {
      colors: {
        'primary': '#1E1E1E',
        'secondary': '#2F2F2F',
        'tertiary': '#3F3F3F',
      },
    },
  },
  plugins: [],
}

