/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}", // Agrega todas tus carpetas
  ],
  important: true, // <- Agrega esto para forzar prioridad
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        "glow-purple": "0 0 14px rgba(138, 43, 226, 1)",
      }
    },
  },
  plugins: [],
};