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
import { COUNTRY_CCA3_CODES } from "../../utils/country-codes";
import { useFetchCountry } from "../../hooks/use-fetch-country";
import Loader from "../../components/UI/Loader/Loader";

export default function CountryPage() {
  useSetBodyColor();
  const navigate = useNavigate();
  const countryCode: string = window.location.href.split("/").at(-1) as string;
  const { isLoading, countryInfo } = useFetchCountry(countryCode);
  const country = countryInfo?.[0];
  const { themeClass, theme } = useThemeContext();
  const themeButtonColor = theme === "light" ? "#000" : "#fff";
  const buttonStyle = {
    color: theme === "light" ? "#000" : "#fff",
    backgroundColor: theme === "light" ? "#fff" : "var(--dark-blue)",
  };

  if (isLoading) {
    return <Loader />;
  }

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
        <img src={country?.flags?.png} alt={`${country?.name?.common} flag`} />
        <div className="country-info__details">
          <h2 className={`country-info__details__title ${themeClass}`}>{country?.name?.common}</h2>
          <div className="country-info__detail-container">
            <div className="country-info__detail-container__block">
              <CountryDetail title="Native Name" answer={country?.name?.official} />
              <CountryDetail
                title="Population"
                answer={country?.population?.toLocaleString("en", { useGrouping: true })}
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
          {!!country?.borders?.length && (
            <div className="country-info__borders">
              <h2 className={themeClass}>Border Countries:</h2>
              <div className="country-info__borders__border-countries">
                {country?.borders?.map((border) => (
                  <Button
                    sx={{ color: buttonStyle, width: "auto", height: "25px" }}
                    key={border}
                    onClick={() => navigate(`/country/${border}`)}
                  >
                    {COUNTRY_CCA3_CODES[border as keyof typeof COUNTRY_CCA3_CODES]}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </ThemeDiv>
  );
}
