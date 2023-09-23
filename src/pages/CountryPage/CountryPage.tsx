import ThemeDiv from "../../components/UI/ThemeDiv/ThemeDiv";
import { Button } from "../../styled/Button";
import ArrowIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import "./CountryPage.scss";
import { Country } from "../../types";
import CountryDetail from "../../components/CountryDetail/CountryDetail";
import useThemeContext from "../../hooks/use-theme-context";
import { accessFirstObjKey } from "../../utils/helper";
import useSetBodyColor from "../../hooks/use-set-body-color";

export default function CountryPage() {
  const navigate = useNavigate();
  useSetBodyColor();
  const country: Country = JSON.parse(localStorage.getItem("country") as string);
  const { themeClass, theme } = useThemeContext();
  const themeButtonColor = theme === "light" ? "#000" : "#fff";
  const buttonStyle = {
    color: theme === "light" ? "#000" : "#fff",
    backgroundColor: theme === "light" ? "#fff" : "var(--dark-blue)",
  };

  return (
    <ThemeDiv>
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
              <CountryDetail title="Sub Region" answer={country?.subregion} />
              <CountryDetail title="Capital" answer={country?.capital?.join(", ")} />
            </div>
            <div className="country-info__detail-container__block">
              <CountryDetail title="Top Level Domain" answer={country?.tld?.join(", ")} />
              <CountryDetail
                title="Currencies"
                answer={country?.currencies?.[accessFirstObjKey(country?.currencies) || ""]?.name}
              />
              <CountryDetail
                title="Languages"
                answer={country?.languages?.[accessFirstObjKey(country?.languages) || ""]}
              />
            </div>
          </div>
        </div>
      </section>
    </ThemeDiv>
  );
}
