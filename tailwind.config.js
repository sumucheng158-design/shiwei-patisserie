/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5EFEA',
        brown: {
          dark: '#4A3A2A',
          mid: '#7A5C3A',
          light: '#E8DED4',
        },
        gold: '#C8A97E',
      },
      fontFamily: {
        sans: ['Noto Serif TC', 'serif'],
        latin: ['Cormorant Garamond', 'serif'],
        display: ['"Shippori Mincho"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
