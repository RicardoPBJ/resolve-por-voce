/**
 * @file components/Header.tsx
 * @description Componente de cabeçalho reutilizável com navegação responsiva.
 * @component
 * @returns {React.JSX.Element} O componente de cabeçalho.
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = (): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Contatos", href: "/contato" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">Resolve Por Você</Link>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Botão WhatsApp (Mobile) */}
        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors md:hidden"
        >
          WhatsApp
        </a>

        {/* Ícone do Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? (
              <FiX data-testid="fi-x-icon" />
            ) : (
              <FiMenu data-testid="fi-menu-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <div
        data-testid="mobile-nav"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white border-t`}
      >
        <nav className="flex flex-col items-center space-y-4 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-blue-600"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
