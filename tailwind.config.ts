import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: {
          primary: '#E86526',
          secondary: '#D45214',
          accent: '#E86526',
          bg: '#FFFFFF',
          'bg-subtle': '#FFF7F2',
          'bg-warm': '#FAFAF5',
          ink: '#1A1A1A',
          slate: '#555555',
          muted: '#888888',
          border: '#E8E0DA',
          apricot: '#E86526',
          peach: '#FFEAD6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.4' }],
        sm: ['0.9375rem', { lineHeight: '1.5' }],
      },
      boxShadow: {
        solid: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        card: '0 4px 6px -1px rgba(232, 101, 38, 0.08)',
        panel: '0 2px 8px 0 rgba(232, 101, 38, 0.06)',
        'card-hover': '0 10px 25px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.04)',
      },
      spacing: {
        'section-sm': '3rem',
        'section-md': '5rem',
        'section-lg': '6rem',
        'section-xl': '8rem',
      },
      borderRadius: {
        industrial: '4px',
        card: '12px',
        'card-lg': '16px',
        'card-xl': '20px',
      },
    },
  },
  plugins: [],
};

export default config;
