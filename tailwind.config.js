/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05060A",
        surface: "rgba(255,255,255,0.05)",
        primary: "#1E6BFF",
        "primary-glow": "#4D9BFF",
        ink: "#F5F7FA",
        muted: "#8A93A6",
      },
      fontFamily: {
        sans: ["Outfit", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "Outfit", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 28px rgba(30, 107, 255, 0.45)",
      },
    },
  },
  plugins: [],
};
