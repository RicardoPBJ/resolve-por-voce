/**
 * @file contexts/ThemeContext.tsx
 * @description Provedor de contexto para o tema da aplicação (claro/escuro).
 *
 * Este arquivo gerencia o estado do tema, permite a troca entre os modos
 * claro e escuro, e persiste a escolha do usuário no localStorage.
 */
"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // O estado inicial é lido de forma síncrona no cliente para evitar hydration mismatch.
  // No servidor, o padrão será 'light', mas o script em _document cuidará do tema correto.
  const [theme, setTheme] = useState<Theme>(
    () =>
      (typeof window !== "undefined" &&
        (localStorage.getItem("theme") as Theme)) ||
      "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
