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
          ink: '#242424',
          apricot: '#E86526',
          slate: '#666666',
          muted: '#94A3B8',
          peach: '#FFEAD6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        solid: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        card: '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -1px rgba(15, 23, 42, 0.03)',
      },
    },
  },
  plugins: [],
};

export default config;
