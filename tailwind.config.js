/**
 * @file tailwind.config.js
 * @description Arquivo de configuração para o Tailwind CSS.
 * @type {import('tailwindcss').Config}
 *
 * @see https://tailwindcss.com/docs/configuration
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // A propriedade 'content' é a mais importante. Ela diz ao Tailwind
  // para escanear todos esses arquivos em busca de classes de utilitário.
  // Se os caminhos estiverem errados, a responsividade não funcionará.
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
