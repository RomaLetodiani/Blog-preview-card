/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#f4d04e',
        white: '#ffffff',
        gray: '#808080',
        black: '#121212',
      },
    },
  },
  plugins: [],
};
