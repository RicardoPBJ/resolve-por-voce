// __tests__/index.test.tsx
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/index";

describe("HomePage", () => {
  it("deve renderizar o título principal", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading", {
      name: /Resolve Por Você/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
