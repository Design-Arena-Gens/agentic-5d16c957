import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0e13",
        fg: "#e8e9ed",
        accent: "#6ee7b7",
        subtle: "#94a3b8"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(110, 231, 183, 0.35)",
      }
    },
  },
  plugins: [],
}
export default config
