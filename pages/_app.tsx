/**
 * @file _app.tsx
 * @description Componente raiz da aplicação. É usado para inicializar páginas.
 * É o local ideal para importar estilos globais.
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
import "../styles/globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/Layout";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Head>
          {/* A meta tag de viewport é essencial para a responsividade.
              Ela instrui o navegador a usar a largura do dispositivo como a largura da viewport,
              permitindo que as media queries (e os breakpoints do Tailwind) funcionem corretamente. */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
