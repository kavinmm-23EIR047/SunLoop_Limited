import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E86526',
          secondary: '#D45214',
          bg: '#FFFFFF',
          ink: '#0F172A',
          apricot: '#E86526',
          slate: '#475569',
          muted: '#94A3B8',
          peach: '#FFEAD6',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        solid: '0 2px 10px rgba(0, 0, 0, 0.05)',
        card: '0 4px 16px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
