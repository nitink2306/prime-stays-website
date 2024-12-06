/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F3F3F3",
          100: "#E6E6E6",
          200: "#CFCFCF",
          300: "#B8B8B8",
          400: "#A1A1A1",
          500: "#8A8A8A",
          600: "#6E6E6E",
          700: "#525252",
          800: "#363636",
          900: "#1A1A1A",
          950: "#0D0D0D",
        },
        accent: {
          50: "#E3F8FF",
          100: "#B9EEFF",
          200: "#8FE3FF",
          300: "#65D9FF",
          400: "#3BCEFF",
          500: "#12C4FF",
          600: "#0EA1D8",
          700: "#0B7EB1",
          800: "#075A8A",
          900: "#043764",
          950: "#022548",
        },
      },
    },
  },
  plugins: [],
};
