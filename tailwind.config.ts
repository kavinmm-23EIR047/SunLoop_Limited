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
        sans: ['Montserrat', 'sans-serif'],
        display: ['Black Ops One', 'system-ui'],
        mono: ['Montserrat', 'sans-serif'],
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
