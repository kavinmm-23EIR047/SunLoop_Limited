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
<<<<<<< HEAD
          'bg-subtle': '#FFF7F2',
          ink: '#1A1A1A',
          slate: '#555555',
          muted: '#888888',
          border: '#E8E0DA',
=======
          ink: '#242424',
          apricot: '#E86526',
          slate: '#555555',
          muted: '#94A3B8',
>>>>>>> c10e3386c4900e673439e1cf9c75bf2270169494
          peach: '#FFEAD6',
        },
      },
      fontFamily: {
<<<<<<< HEAD
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
=======
        sans: ['var(--font-body)', 'Public Sans', 'sans-serif'],
        heading: ['var(--font-heading)', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['var(--font-heading)', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['var(--font-body)', 'Public Sans', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.4' }],
        sm: ['0.9375rem', { lineHeight: '1.5' }],
      },
      boxShadow: {
        solid: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        card: '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 10px 25px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.04)',
      },
      spacing: {
        'section-sm': '3rem',
        'section-md': '5rem',
        'section-lg': '6rem',
        'section-xl': '8rem',
      },
      borderRadius: {
        'card': '12px',
        'card-lg': '16px',
        'card-xl': '20px',
>>>>>>> c10e3386c4900e673439e1cf9c75bf2270169494
      },
    },
  },
  plugins: [],
};

export default config;
