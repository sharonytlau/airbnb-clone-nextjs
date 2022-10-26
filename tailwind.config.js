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
          25: '#fbfbfb',
          75: '#f8f8f8',
          150: '#eeeeef',
          350: '#c2c2c8',
          550: '#64646d',
        },
        prime: {
          // #48a94e
          // #4aa316
          // #36b43e
          // #3f990c
          // #53ad1f
          50: '#ebf9e6',
          400: '#36b43e',
          600: '#2f7009',
          800: '#194300',
        },
      },
      fontSize: {
        xxs: ['10px', '14px'],
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        md: ['18px', '26px'],
        lg: ['20px', '20px'],
        xl: ['22px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
      },
      // rgba(24, 24, 27, 0.1)
      boxShadow: {
        md: '0 4px 10px 2px rgba(24, 24, 27, 0.06), 0 1px 6px -1px rgba(24, 24, 27, 0.08)',
      },
      spacing: {
        30: '7.5rem', // 120px
      },
      borderRadius: {
        '4xl': '1.875rem', // 30px
      },
    },
  },

  plugins: [require('tailwind-scrollbar-hide')],
}
