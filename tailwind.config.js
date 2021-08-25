module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#002C21",
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/double-bubble-outline.png')",
       })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
