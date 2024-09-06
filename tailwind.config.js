// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths as necessary
  ],
  theme: {
    extend: {
      boxShadow: {
        'text': '1px 0 2px #2f4d5a', // Custom text shadow
      },
      colors: {
        'primary-light': '#378EB5',
      },
    },
  },
  plugins: [],
}
