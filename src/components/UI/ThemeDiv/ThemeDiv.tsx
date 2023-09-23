import React, { ReactNode, useEffect } from "react";
import useThemeContext from "../../../hooks/use-theme-context";
import "./ThemeDiv.scss";

type ThemeDivProps = {
  children: ReactNode;
};

export default function ThemeDiv({ children }: ThemeDivProps) {
  const { theme } = useThemeContext();

  useEffect(() => window.scroll(0, 0), []);

  return (
    <main
      className="theme-container"
      style={{
        backgroundColor: theme === "light" ? "var(--very-light-gray)" : "var(--very-dark-blue-1)",
      }}
    >
      {children}
    </main>
  );
}
