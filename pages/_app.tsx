/**
 * @file _app.tsx
 * @description Componente raiz da aplicação. É usado para inicializar páginas.
 * É o local ideal para importar estilos globais.
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
