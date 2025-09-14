/**
 * @file tailwind.config.js
 * @description Arquivo de configuração para o Tailwind CSS.
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Para compatibilidade com o App Router, se for usado no futuro
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
