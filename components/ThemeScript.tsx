/**
 * @file components/ThemeScript.tsx
 * @description Script para bloqueio de renderização que evita o "flash de tema incorreto".
 *
 * Este script é injetado no <head> do documento e executado antes da renderização da página.
 * Ele lê o tema do localStorage ou a preferência do sistema e aplica a classe 'dark'
 * ao elemento <html>, garantindo que o tema correto seja exibido desde o início.
 */
import Script from "next/script";

const ThemeScript = () => {
  const script = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;

  return (
    <Script
      id="theme-switcher"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
};

export default ThemeScript;
