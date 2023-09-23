import React from "react";
import "./Header.scss";
import ColorMode from "../ColorMode/ColorMode";
import { useNavigate } from "react-router-dom";
import useThemeContext from "../../hooks/use-theme-context";

export default function Header() {
  const navigate = useNavigate();
  const { themeClass } = useThemeContext();

  return (
    <header className={`header ${themeClass}`}>
      <h1 className={themeClass} onClick={() => navigate("/")}>
        Where in the world?
      </h1>
      <ColorMode />
    </header>
  );
}
