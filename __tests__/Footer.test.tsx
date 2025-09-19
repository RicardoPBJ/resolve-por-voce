/**
 * @file __tests__/components/Footer.test.tsx
 * @description Testes para o componente Footer.
 */
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer Component", () => {
  it("deve renderizar o nome da empresa", () => {
    render(<Footer />);
    const companyName = screen.getByText(/Resolve Por Você/i);
    expect(companyName).toBeInTheDocument();
  });
});
