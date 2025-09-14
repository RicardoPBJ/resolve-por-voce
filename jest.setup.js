/**
 * @file jest.setup.js
 * @description Arquivo de configuração que o Jest executa antes de cada teste.
 *
 * É utilizado para estender as funcionalidades do Jest, como adicionar
 * novos "matchers" para asserções mais ricas e declarativas.
 *
 * @see https://jestjs.io/docs/configuration#setupfilesafterenv-array
 */

// Importa os matchers customizados do `@testing-library/jest-dom`.
// Isso adiciona novas asserções ao `expect` do Jest para facilitar a verificação
// de atributos, conteúdo e estado de elementos do DOM.
//
// Exemplos:
// expect(element).toBeInTheDocument()
// expect(element).toHaveAttribute('href', '/')
//
// @see https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
