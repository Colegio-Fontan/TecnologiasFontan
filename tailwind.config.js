/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fontan: {
          violet: "#50007D",
          cyan: "#00C8FF",
        },
      },
    },
  },
  plugins: [],
}
