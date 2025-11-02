/**
 * @file __tests__/components/Footer.test.tsx
 * @description Testes para o componente Footer.
 */
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer Component", () => {
  it("deve renderizar o texto de direitos autorais com o ano atual", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    // Usamos uma regex para encontrar o texto, ignorando o ano que é dinâmico.
    const copyrightText = screen.getByText(
      /Resolve Por Você. Todos os direitos reservados./i
    );
    expect(copyrightText).toBeInTheDocument();
    // Verificamos se o ano atual está presente no texto.
    expect(
      screen.getByText(new RegExp(currentYear.toString()))
    ).toBeInTheDocument();
  });
});
