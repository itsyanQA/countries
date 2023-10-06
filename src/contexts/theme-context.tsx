import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export type Theme = "dark" | "light";

export type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  themeClass: string;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>((window.sessionStorage.getItem("theme") as Theme) ?? "light");
  const themeClass: string = theme === "light" ? "light-theme" : "dark-theme";

  return <ThemeContext.Provider value={{ theme, setTheme, themeClass }}>{children}</ThemeContext.Provider>;
}
