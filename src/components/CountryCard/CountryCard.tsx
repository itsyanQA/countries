import React from "react";
import { Country } from "../../types";
import "./CountryCard.scss";
import CountryDetail from "../CountryDetail/CountryDetail";
import { useNavigate } from "react-router-dom";
import useThemeContext from "../../hooks/use-theme-context";

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  const navigate = useNavigate();
  const { themeClass } = useThemeContext();

  const countryCardClickHandler = () => {
    localStorage.setItem("country", JSON.stringify(country));
    navigate(`/country/${country.name.common}`);
  };

  return (
    <div className={`country-card ${themeClass}`} onClick={countryCardClickHandler}>
      <img src={country?.flags?.png} alt="" />
      <div className={`country-card__title-and-details-container ${themeClass}`}>
        <h2 className={`country-card__title ${themeClass}`}>{country?.name?.common}</h2>
        <div className="country-card__details">
          <CountryDetail title="Population" answer={country?.population.toLocaleString("en", { useGrouping: true })} />
          <CountryDetail title="Region" answer={country?.region} />
          <CountryDetail title="Capital" answer={country?.capital?.join(", ")} />
        </div>
      </div>
    </div>
  );
}
