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
    extend: {
      colors: {
        // Primary Color
        primary: {
          DEFAULT: "#642067",
          50: "#F9F2F9",
          100: "#F2E5F2",
          200: "#DEC7DE",
          300: "#CAA9CA",
          400: "#A66CA6",
          500: "#642067",
          600: "#5A1C5D",
          700: "#3C133E",
          800: "#2D0E2F",
          900: "#1E0A1F",
        },
        // Secondary Color
        secondary: {
          DEFAULT: "#0063A0",
          50: "#E6F3FA",
          100: "#CCE7F5",
          200: "#99CFEB",
          300: "#66B7E1",
          400: "#339FD7",
          500: "#0063A0",
          600: "#00578A",
          700: "#004573",
          800: "#00335D",
          900: "#002146",
        },
        // Background Color
        background: {
          DEFAULT: "#FEFEFE",
        },
      },
    },
  },
  plugins: [],
};
