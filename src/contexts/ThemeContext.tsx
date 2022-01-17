import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return (
    <div>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </div>
  );
}
