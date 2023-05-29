/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['Mulish', 'Helvetica', 'sans-serif'],
        heading: ['Bookmania', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
}

