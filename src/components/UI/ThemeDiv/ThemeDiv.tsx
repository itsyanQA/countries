import React, { ReactNode } from "react";
import useThemeContext from "../../../hooks/use-theme-context";
import "./ThemeDiv.scss";

type ThemeDivProps = {
  children: ReactNode;
  props?: any;
};

export default function ThemeDiv({ children, props }: ThemeDivProps) {
  const { theme } = useThemeContext();
  return (
    <main
      {...props}
      className="theme-container"
      style={{ backgroundColor: theme === "light" ? "var(--very-light-gray)" : "var(--very-dark-blue-1)" }}
    >
      {children}
    </main>
  );
}
