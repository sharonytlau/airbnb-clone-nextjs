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
          450: '#85858f',
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
        xxs: ['0.625rem', '0.875rem'], // 10px
        xs: ['0.75rem', '1rem'], // 12px
        sm: ['0.875rem', '1.25rem'], // 14px
        base: ['1rem', '1.5rem'], // 16px
        md: ['1.125rem', '1.625rem'], // 18px
        lg: ['1.25rem', '1.25rem'], // 20px
        xl: ['1.375rem', '1.75rem'], // 22px
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
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
