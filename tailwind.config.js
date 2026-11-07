/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        surface: "rgba(255,255,255,0.06)",
        primary: "#FFFFFF",
        "primary-glow": "#D4D4D4",
        ink: "#F4F4F4",
        muted: "#9A9A9A",
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
