/**
 * @file pages/index.tsx
 * @description Componente da página inicial.
 */
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
      <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400">
        Resolve Por Você
      </h1>
    </div>
  );
};

export default HomePage;
