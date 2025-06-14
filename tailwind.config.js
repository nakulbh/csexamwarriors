/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#002B5B',
        'slate-custom': '#4A4A4A', 
        'orange-custom': '#FF6B35',
        'off-white': '#F8F7F3'
      },
      fontFamily: {
        'heading': ['Lato', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
      }
    },
  },
  plugins: [],
};