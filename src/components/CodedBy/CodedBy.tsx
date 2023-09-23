import "./CodedBy.scss";
import useThemeContext from "../../hooks/use-theme-context";

export default function CodedBy() {
  const { themeClass } = useThemeContext();

  return (
    <p className={`coded-by ${themeClass}`}>
      Challenge by&nbsp;
      <a href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca">
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/itsyanQA">Yan Eliyahu</a>.
    </p>
  );
}
