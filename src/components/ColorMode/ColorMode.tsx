import MoonIcon from "@mui/icons-material/DarkModeOutlined";
import SunIcon from "@mui/icons-material/LightModeOutlined";
import "./ColorMode.scss";
import useThemeContext from "../../hooks/use-theme-context";
import { CSSProperties } from "react";
import { Theme } from "../../contexts/theme-context";

export default function ColorMode() {
  const { theme, setTheme, themeClass } = useThemeContext();
  const isLight: boolean = theme === "light";
  const opposingTheme: Theme = isLight ? "dark" : "light";

  const colorModeClickHandler = (): void => {
    if (isLight) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    window.sessionStorage.setItem("theme", opposingTheme);
  };

  const colorModeIconStyle: CSSProperties = {
    width: "20px",
    height: "20px",
    color: isLight ? "#000" : "#fff",
  };

  return (
    <div className="color-mode" onClick={colorModeClickHandler}>
      {isLight ? <MoonIcon sx={colorModeIconStyle} /> : <SunIcon sx={colorModeIconStyle} />}
      <span className={`color-mode__text ${themeClass}`}>{`${isLight ? "Dark" : "Light"} Mode`}</span>
    </div>
  );
}
