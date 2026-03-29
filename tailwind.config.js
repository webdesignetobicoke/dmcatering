/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c9a84c',
        'gold-light': '#e2c97e',
        'gold-dim': '#8a6f2e',
        cream: '#f5f0e8',
        charcoal: '#1a1a1a',
        'off-black': '#111111',
      },
    },
  },
  plugins: [],
}
