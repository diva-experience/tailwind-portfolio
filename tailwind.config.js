/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center: true,
    padding: '16px',
  },
    extend: {
      colors: {
        primary: '#4338ca',
        dark: '#1e1b4b',
        secondary: '#6366f1',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
};

