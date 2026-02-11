
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Nasalization', 'Arial Black', 'sans-serif'],
        'body': ['Ubuntu', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        imo: {
          deep: "#0C0C0E",
          navy: "#141416",
          ocean: "#D4A853",       // золотой как основной акцент
          wave: "#E8C47A",
          sky: "#F0D8A0",
          foam: "#FAF0D7",
          sand: "#FFF8E1",
          coral: "#D4A853",       // тоже золотой для единообразия
          teal: "#8A8A8A",
          green: "#6B6B6B",
          neon: "#D4A853",        // золотой вместо неона
          magenta: "#B8935A",     // приглушённое золото
          lime: "#E8C47A",        // светлое золото
        },
      },
      boxShadow: {
        'brutal': 'none',
        'brutal-sm': 'none',
        'brutal-white': 'none',
        'brutal-coral': 'none',
        'brutal-lime': 'none',
        'neon-glow': 'none',
        'neon-glow-sm': 'none',
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #0C0C0E 0%, #141416 50%, #1C1C20 100%)',
        'gradient-hero': 'linear-gradient(180deg, #0C0C0E 0%, #141416 40%, #1C1C20 100%)',
        'gradient-neon': 'linear-gradient(135deg, #D4A853 0%, #E8C47A 50%, #B8935A 100%)',
      },
      borderRadius: {
        'brutal': '0',
        'brutal-tl': '0',
        'brutal-br': '0',
      },
    },
  },
  plugins: [
    plugin(function({ addVariant, addUtilities }) {
      addVariant('light', '.light &');
      addUtilities({
        '.brutal-border': {
          border: '1px solid rgba(255, 255, 255, 0.06)',
        },
        '.brutal-border-neon': {
          border: '1px solid rgba(212, 168, 83, 0.2)',
        },
        '.brutal-border-coral': {
          border: '1px solid rgba(212, 168, 83, 0.15)',
        },
      });
    }),
  ],
};
