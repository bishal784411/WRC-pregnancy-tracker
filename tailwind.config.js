/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        parkinson: ['Parkinson', 'serif'],
        parkinsonRoman: ['ParkinsonRoman', 'serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        midnight: '#121e2c',
      },
      fontSize: {
        '4xl5': '4.55rem',
        subHeading: '1.375rem',
        foterText: '1.0625rem',
        textallover: '1.25rem',
      },
      keyframes: {
        strip1Move: {
          '0%, 100%': { transform: 'translateY(80px)', backgroundColor: '#D32F2F' },
          '50%': { transform: 'translateY(-80px)' },
        },
        strip2Move: {
          '0%, 100%': { transform: 'translateY(60px)', backgroundColor: '#D32F2F' },
          '50%': { transform: 'translateY(-60px)' },
        },
        strip3Move: {
          '0%, 100%': { transform: 'translateY(30px)', backgroundColor: '#D32F2F' },
          '50%': { transform: 'translateY(-30px)' },
        },
      },
      animation: {
        strip1: 'strip1Move 1.5s ease-in-out infinite',
        strip2: 'strip2Move 1.5s ease-in-out infinite 0.1s',
        strip3: 'strip3Move 1.5s ease-in-out infinite 0.2s',
      },
    },
  },
  plugins: [],
};
