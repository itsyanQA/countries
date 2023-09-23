import "./CountryDetail.scss";
import useThemeContext from "../../hooks/use-theme-context";

type CountryDetails = {
  title: string;
  answer: string | number | undefined;
};

export default function CountryDetail({ title, answer }: CountryDetails) {
  const { themeClass } = useThemeContext();

  return (
    <div className="detail">
      <span className={`detail__title ${themeClass}`}>{`${title}:`}</span>
      <span className={`detail__answer ${themeClass}`}>{answer || "-"}</span>
    </div>
  );
}
