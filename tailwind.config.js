/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#10261A',
          moss: {
            dark: '#4D5945',
            DEFAULT: '#66735A',
          },
          cream: '#F2ECCE',
          sand: '#D9C49C',
        }
      },
      boxShadow: {
        glow: '0 12px 40px rgba(77, 89, 69, 0.22)',
        premium: '0 20px 50px rgba(16, 38, 26, 0.15)'
      }
    }
  },
  plugins: []
}

