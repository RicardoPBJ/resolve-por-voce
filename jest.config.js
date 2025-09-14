/**
 * @file jest.config.js
 * @description Arquivo de configuração para o Jest.
 *
 * O Next.js vem com uma configuração de Jest pronta para uso.
 * `next/jest` cria uma configuração base que lida com a transpilação de
 * arquivos `.js`, `.jsx`, `.ts`, e `.tsx` usando o compilador do Next.js,
 * além de outras configurações úteis.
 *
 * @see https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler
 */

// Importa a função `next/jest` para criar a configuração base do Jest para Next.js.
const nextJest = require("next/jest");

// `createJestConfig` é uma função que recebe a configuração do Next.js e retorna
// uma função de configuração assíncrona para o Jest.
const createJestConfig = nextJest({
  // O `dir` aponta para o diretório do seu projeto Next.js.
  // Isso é necessário para que o `next/jest` possa carregar corretamente
  // os arquivos de configuração do Next.js (como `next.config.js`) e as
  // variáveis de ambiente (`.env`).
  dir: "./",
});

// `customJestConfig` é onde adicionamos nossas configurações personalizadas do Jest.
// Essas configurações serão mescladas com a configuração base do Next.js.
const customJestConfig = {
  // Uma lista de caminhos para módulos que rodam código de configuração
  // ou setup *após* o ambiente de teste ser instalado.
  // Usamos para importar o `@testing-library/jest-dom` e ter acesso a matchers
  // como `toBeInTheDocument()`.
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // O ambiente de teste que será usado. Para projetos web com React,
  // `jest-environment-jsdom` simula um ambiente de navegador (DOM).
  testEnvironment: "jest-environment-jsdom",

  // Um mapa de expressões regulares para nomes de módulos que permite
  // "enganar" o sistema de módulos do Jest. É muito útil para lidar com
  // aliases de importação (path aliases) que configuramos no `tsconfig.json`.
  moduleNameMapper: {
    // Lida com importações de CSS (com CSS Modules)
    // https://jestjs.io/docs/webpack#handling-static-assets
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
};

// `createJestConfig(customJestConfig)` retorna uma função assíncrona.
// O Next.js precisa disso para garantir que a configuração do Next seja carregada
// antes de exportar a configuração final do Jest.
module.exports = createJestConfig(customJestConfig);
