/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F8F4EE",
        charcoal: "#2B2A27",
        sage: {
          50: "#F1F5F2",
          100: "#DEE6E0",
          200: "#C3D0C7",
          300: "#A1B6A6",
          400: "#7B997F",
          500: "#5F7F64",
          600: "#4E6852",
          700: "#3F5343"
        },
        cocoa: "#6B6459"
      },
      fontFamily: {
        serif: ["\"Playfair Display\"", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      },
      borderRadius: {
        "2xl": "1.5rem",
        "3xl": "2rem"
      },
      boxShadow: {
        soft: "0 20px 45px -35px rgba(20, 18, 14, 0.45)",
        card: "0 10px 30px -20px rgba(40, 37, 31, 0.35)"
      }
    }
  },
  plugins: []
};
