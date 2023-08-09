/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: '1168px',
    extend: {
      colors: {
        primary: {
          purple: 'var(--primary-purple)',
          white: 'var(--primary-white)',
          green: 'var(--primary-green)',
        },
        secondary: {
          purple: 'var(--secondary-purple)',
        },
        input: 'var(--input)',
        hover: 'var(--hover)',
        separator: 'var(--separator)'
      }
    },
  },
  plugins: [],
}

