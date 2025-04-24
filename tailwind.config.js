/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
        display: ['Vast Shadow', 'cursive'],
        body: ['Lufga', 'sans-serif'],
      },
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        gray: {
          300: '#D1D5DB',
          400: '#9CA3AF',
          800: '#1F2937',
        },
        black: '#000000',
        white: '#FFFFFF',
        navy: {
          900: '#1a365d',
        },
      },
      spacing: {
        '2': '0.5rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '48': '12rem',
      },
      borderRadius: {
        'lg': '0.5rem',
        'full': '9999px',
      },
      fontSize: {
        'sm': '0.875rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '4xl': '2.25rem',
        '6xl': '4rem',
      },
      lineHeight: {
        'tight': 1.25,
        'normal': 1.5,
      },
      opacity: {
        '0': '0',
        '60': '0.6',
        '80': '0.8',
        '100': '1',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 
