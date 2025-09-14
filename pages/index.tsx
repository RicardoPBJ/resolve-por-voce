/**
 * @file pages/index.tsx
 * @description Componente da página inicial.
 */
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600">Resolve Por Você</h1>
    </div>
  );
};

export default HomePage;
