module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'JIT',
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Maven Pro', 'sans-serif'],
        monospace: [ 'Red Hat Mono', 'monospace' ]
      },
      colors: {
        primary: {
          100: "hsl(189,94%,83%)",
          200: "hsl(189,94%,73%)",
          300: "hsl(189,94%,63%)",
          400: "hsl(189,94%,53%)",
          500: "hsl(189,94%,43%)",
          600: "hsl(189,94%,33%)",
          700: "hsl(189,94%,23%)",
          800: "hsl(189,94%,13%)",
          900: "hsl(189,94%,3%)",
          DEFAULT: "hsl(189,94%,43%)"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
