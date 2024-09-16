// File: tailwind.config.js

module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          // You can add custom colors here
          'primary': '#3490dc',
          'secondary': '#ffed4a',
          'danger': '#e3342f',
        },
        fontFamily: {
          // Add custom fonts here if needed
          'sans': ['Graphik', 'sans-serif'],
          'serif': ['Merriweather', 'serif'],
        },
      },
    },
    plugins: [],
  }