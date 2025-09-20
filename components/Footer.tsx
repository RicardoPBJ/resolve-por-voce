/**
 * @file components/Footer.tsx
 * @description Componente de rodapé reutilizável que exibe o ano atual e os direitos autorais.
 *
 * @component
 * @returns {React.JSX.Element} O componente de rodapé.
 */
const Footer = (): React.JSX.Element => {
  return (
    <footer className="w-full bg-gray-100 p-4 text-center text-gray-600 dark:bg-gray-800 dark:text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} Resolve Por Você. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
