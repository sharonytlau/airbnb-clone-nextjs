/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins'],
    },

    extend: {
      colors: {
        zinc: {
          75: '#f8f8f8',
          350: '#c2c2c8',
        },
      },
      fontSize: {
        xxs: ['10px', '14px'],
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        md: ['18px', '26px'],
        lg: ['20px', '20px'],
        xl: ['24px', '32px'],
      },
    },
  },

  plugins: [require('tailwind-scrollbar-hide')],
}
