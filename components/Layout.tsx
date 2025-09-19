/**
 * @file components/Layout.tsx
 * @description Componente de layout principal que envolve o conteúdo de cada página.
 *
 * @component
 * @param {object} props - As propriedades do componente.
 * @param {React.ReactNode} props.children - O conteúdo da página a ser renderizado.
 * @returns {JSX.Element} O layout da página com cabeçalho e rodapé.
 */
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout = ({ children }: { children: ReactNode }): React.JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
