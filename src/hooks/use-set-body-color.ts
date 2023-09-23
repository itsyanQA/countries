import { useEffect } from "react";
import useThemeContext from "./use-theme-context";

export default function useSetBodyColor() {
  const { theme } = useThemeContext();

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "var(--very-light-gray)" : "var(--very-dark-blue-1)";
  }, [theme]);
}
