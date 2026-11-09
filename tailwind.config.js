/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050505',
          900: '#080808',
          850: '#0d0d0d',
          800: '#121212',
          700: '#171717',
          600: '#222222',
          500: '#2d2d2d',
          400: '#3f3f46',
          300: '#71717a',
          200: '#a1a1aa',
          100: '#e4e4e7',
        },
        surface: {
          DEFAULT: '#121212',
          card: '#151515',
          cardHover: '#1c1c1c',
          border: '#262626',
          borderHover: '#3b3b3b',
          glow: 'rgba(245, 158, 11, 0.15)',
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber 500
          hover: '#D97706',   // Amber 600
          light: '#FBBF24',   // Amber 400
          dark: '#B45309',    // Amber 700
          glow: 'rgba(245, 158, 11, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.15)' },
          '100%': { boxShadow: '0 0 35px rgba(245, 158, 11, 0.35)' },
        }
      }
    },
  },
  plugins: [],
}
