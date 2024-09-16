// File: tailwind.config.js

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
        dark: '#1a1a2e',
      },
      boxShadow: {
        glow: '0 0 15px 5px rgba(52, 144, 220, 0.5)',
      },
    },
  },
  plugins: [],
};
