/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fff7ed',
          100: '#ffedd5',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        brand: {
          blue:   '#1a3a7c',
          yellow: '#f5c400',
          red:    '#e8323a',
          dark:   '#0f1e3d',
        },
      },
      fontFamily: {
        display: ['"Nunito"', 'sans-serif'],
        body:    ['"Nunito"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'float':      'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'card':  '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.18)',
        'hero':  '0 8px 60px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
};
