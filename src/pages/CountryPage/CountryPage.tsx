import ThemeDiv from "../../components/UI/ThemeDiv/ThemeDiv";
import { Button } from "../../styled/Button";
import ArrowIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import "./CountryPage.scss";
import { Country } from "../../types";
import CountryDetail from "../../components/CountryDetail/CountryDetail";
import useThemeContext from "../../hooks/use-theme-context";

export default function CountryPage() {
  const navigate = useNavigate();
  const country: Country = JSON.parse(localStorage.getItem("country") as string);
  const { themeClass, theme } = useThemeContext();
  const themeButtonColor = theme === "light" ? "#000" : "#fff";
  const buttonStyle = {
    color: theme === "light" ? "#000" : "#fff",
    backgroundColor: theme === "light" ? "#fff" : "var(--dark-blue)",
  };

  return (
    <ThemeDiv props={{ style: { height: "100vw" } }}>
      <Button
        startIcon={<ArrowIcon sx={{ color: themeButtonColor }} />}
        onClick={() => navigate("/")}
        className="back-button"
        sx={{ color: buttonStyle }}
      >
        Back
      </Button>
      <section className="country-info">
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
        <div className="country-info__details">
          <h2 className={themeClass}>{country.name.common}</h2>
          <div className="country-info__detail-container">
            <div className="country-info__detail-container__block">
              <CountryDetail title="Native Name" answer={country?.name?.official} />
              <CountryDetail
                title="Population"
                answer={country?.population.toLocaleString("en", { useGrouping: true })}
              />
              <CountryDetail title="Region" answer={country?.region} />
              <CountryDetail title="Sub Region" answer={undefined} />
              <CountryDetail title="Capital" answer={country?.capital?.join(", ")} />
            </div>
            <div className="country-info__detail-container__block">
              <CountryDetail title="Top Level Domain" answer={undefined} />
              <CountryDetail title="Currencies" answer={undefined} />
              <CountryDetail title="Languages" answer={undefined} />
            </div>
          </div>
        </div>
      </section>
    </ThemeDiv>
  );
}
