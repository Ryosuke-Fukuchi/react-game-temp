/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 20 row grid
        '20': 'repeat(20, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
