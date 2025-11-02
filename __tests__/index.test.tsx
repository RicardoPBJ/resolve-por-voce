/**
 * @file __tests__/pages/index.test.tsx
 * @description Testes para a página inicial.
 */

import { render, screen } from "@testing-library/react";
import HomePage from "@/pages/index";

describe("Home Page", () => {
  it("deve renderizar o título principal", () => {
    render(<HomePage />);
    const heading = screen.getByRole("heading", { name: /Resolve Por Você/i });
    expect(heading).toBeInTheDocument();
  });
});
