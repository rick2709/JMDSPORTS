/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1A3C2E',
        lime: '#C8F135',
        // CSS-variable-based colors — respond to light/dark mode automatically
        dark: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-border': 'rgb(var(--color-border) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        primary: 'rgb(var(--color-text) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['Anton', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

