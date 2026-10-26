/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#5c7793',
          500: '#3e5c7a',
          600: '#243b53',
          700: '#16263a',
          800: '#102a43',
          900: '#0b1d2a',
          950: '#07111c',
        },
        crimson: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#dc2626',
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#5b1414',
        },
        ocean: {
          50: '#eef9ff',
          100: '#dcf2ff',
          200: '#b3e7ff',
          300: '#6fd3ff',
          400: '#22bdff',
          500: '#02a0f4',
          600: '#007fd1',
          700: '#0065a8',
          800: '#00558a',
          900: '#074a73',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
      },
    },
  },
  plugins: [],
};
