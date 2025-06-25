/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#c41e1e',
        'brand-orange': '#ff7e33',
        'brand-teal': '#54B8B1',
        primary: '#c41e1e',
        secondary: '#f9d423',
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
        'button': '8px',
      },
      fontFamily: {
        'noto': ['Noto Sans JP', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};