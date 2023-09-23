import { ThemeContext } from "../contexts/theme-context";
import { useContext } from "react";
import { ThemeContextType } from "../contexts/theme-context";

export default function useThemeContext() {
  const context = useContext(ThemeContext) as ThemeContextType;

  return context;
}
