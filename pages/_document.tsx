/**
 * @file pages/_document.tsx
 * @description Este arquivo customiza o documento HTML que o Next.js renderiza.
 * É o local ideal para adicionar tags <head> globais, como a meta tag de viewport.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-document
 */
import { Html, Head, Main, NextScript } from "next/document";
import ThemeScript from "@/components/ThemeScript";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* O script do tema é injetado aqui para ser executado o mais cedo possível */}
        <ThemeScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
