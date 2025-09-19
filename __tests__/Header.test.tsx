/**
 * @file __tests__/components/Header.test.tsx
 * @description Testes para o componente Header.
 *
 * Este arquivo testa a renderização e a interatividade do componente Header,
 * garantindo que a logo, a navegação de desktop e os elementos mobile
 * (incluindo o menu hamburguer e o botão de WhatsApp) funcionem como esperado.
 */

import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";

// Mock dos ícones para não renderizar SVGs complexos nos testes.
jest.mock("react-icons/fi", () => ({
  FiMenu: () => <div data-testid="fi-menu-icon" />,
  FiX: () => <div data-testid="fi-x-icon" />,
}));

describe("Header Component", () => {
  it("deve renderizar a logo com o link correto", () => {
    render(<Header />);
    const logo = screen.getByRole("link", { name: /Resolve Por Você/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
  });

  it("deve renderizar os links de navegação no desktop com os hrefs corretos", () => {
    render(<Header />);
    const contatosLink = screen.getByRole("link", { name: /Contatos/i });
    const sobreLink = screen.getByRole("link", { name: /Sobre/i });
    const servicosLink = screen.getByRole("link", { name: /Serviços/i });

    expect(contatosLink).toBeInTheDocument();
    expect(contatosLink).toHaveAttribute("href", "/contato");
    expect(sobreLink).toBeInTheDocument();
    expect(sobreLink).toHaveAttribute("href", "/sobre");
    expect(servicosLink).toBeInTheDocument();
    expect(servicosLink).toHaveAttribute("href", "/servicos");
  });

  it("deve renderizar os elementos mobile com os atributos corretos", () => {
    render(<Header />);
    expect(screen.getByTestId("fi-menu-icon")).toBeInTheDocument();

    const whatsappLink = screen.getByRole("link", { name: /WhatsApp/i });
    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink).toHaveAttribute("href", "https://wa.me/SEUNUMERO");
    expect(whatsappLink).toHaveAttribute("target", "_blank");
  });

  it("deve exibir e esconder o menu de navegação mobile ao clicar no ícone", () => {
    render(<Header />);

    const menuButton = screen.getByTestId("fi-menu-icon").parentElement;
    // Garante que o botão existe antes de prosseguir
    if (!menuButton) {
      throw new Error("Botão de menu não encontrado no teste.");
    }

    // O menu mobile começa escondido (classe 'hidden')
    const mobileNav = screen.getByTestId("mobile-nav");
    expect(mobileNav).toHaveClass("hidden");

    // Clica para abrir o menu
    fireEvent.click(menuButton);

    // Agora o menu deve estar visível (sem a classe 'hidden')
    expect(mobileNav).not.toHaveClass("hidden");
    expect(screen.getByTestId("fi-x-icon")).toBeInTheDocument();

    // Clica para fechar o menu
    const closeButton = screen.getByTestId("fi-x-icon").parentElement;
    if (!closeButton) {
      throw new Error("Botão de fechar não encontrado no teste.");
    }
    fireEvent.click(closeButton);

    // O menu deve ser escondido novamente
    expect(mobileNav).toHaveClass("hidden");
  });

  it("deve fechar o menu mobile ao clicar em um link", () => {
    render(<Header />);

    const menuButton = screen.getByTestId("fi-menu-icon").parentElement;
    if (!menuButton) {
      throw new Error("Botão de menu não encontrado no teste.");
    }
    const mobileNav = screen.getByTestId("mobile-nav");

    // Abre o menu
    fireEvent.click(menuButton);
    expect(mobileNav).not.toHaveClass("hidden");

    // Clica em um link do menu (usamos o link "Sobre" como exemplo)
    const linkSobre = screen.getAllByRole("link", { name: "Sobre" })[1]; // Pega o segundo, que está no menu mobile
    fireEvent.click(linkSobre);

    // Verifica se o menu fechou
    expect(mobileNav).toHaveClass("hidden");
  });
});
