import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E86526',
          secondary: '#D45214',
          accent: '#E86526',
          bg: '#FFFFFF',
          'bg-subtle': '#FFF7F2',
          ink: '#1A1A1A',
          slate: '#555555',
          muted: '#888888',
          border: '#E8E0DA',
          peach: '#FFEAD6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        solid: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        card: '0 4px 6px -1px rgba(232, 101, 38, 0.08)',
        panel: '0 2px 8px 0 rgba(232, 101, 38, 0.06)',
      },
      borderRadius: {
        industrial: '4px',
      },
    },
  },
  plugins: [],
};

export default config;
