/**
 * @file __tests__/components/Layout.test.tsx
 * @description Testes para o componente Layout.
 */

import { render, screen } from "@testing-library/react";
import Layout from "@/components/Layout";

// Mock dos componentes filhos para isolar o teste do Layout
jest.mock("@/components/Header", () => () => <header>Header Mock</header>);
jest.mock("@/components/Footer", () => () => <footer>Footer Mock</footer>);

describe("Layout Component", () => {
  it("deve renderizar o Header, o Footer e o conteúdo filho", () => {
    const childText = "Conteúdo da Página";

    render(
      <Layout>
        <p>{childText}</p>
      </Layout>
    );

    // Verifica se os mocks e o filho foram renderizados
    expect(screen.getByText("Header Mock")).toBeInTheDocument();
    expect(screen.getByText("Footer Mock")).toBeInTheDocument();
    expect(screen.getByText(childText)).toBeInTheDocument();
  });
});
