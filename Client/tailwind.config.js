/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        terasotees: "1330px",
        three: '1600px',
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
