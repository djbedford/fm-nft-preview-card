/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'hsl(var(--bg-primary))',
        secondary: 'hsl(var(--bg-secondary))',
      },
      fontFamily: {
        'outfit': ['Outfit']
      }
    },
  },
  plugins: [],
}
