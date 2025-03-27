/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ppurple: {
          50: "#F3E8FF", // Ultra Light Purple
          200: "#D8B4FE", // Pastel Purple
          400: "#8B5CF6", // Soft Purple
          600: "#6D28D9", // Deep Purple
        },
        pgrey: {
          200: "#D1D5DB", // Light Grey
          400: "#aaa", // Neutral Grey
          600: "#374151", // Dark Grey
        },
        pblack: "#111827", // Soft Black
        pwhite: "#F9FAFB", // Off-White
      },
    },
  },
  plugins: [],
}