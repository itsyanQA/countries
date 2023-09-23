import "./HomePage.scss";
import CountrySearchBar from "../../components/CountrySearchBar/CountrySearchBar";
import useFetchCountries from "../../hooks/use-fetch-countries";
import CountryCard from "../../components/CountryCard/CountryCard";
import { Country } from "../../types";
import { useState, useMemo } from "react";
import ThemeDiv from "../../components/UI/ThemeDiv/ThemeDiv";
import CountrySelect from "../../components/CountrySelect/CountrySelect";
import useSetBodyColor from "../../hooks/use-set-body-color";
import { CircularProgress } from "@mui/material";

export default function HomePage() {
  useSetBodyColor();
  const { isLoading, countriesData } = useFetchCountries();
  const [searchValue, setSearchValue] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string>("");

  const searchFilteredCountries = useMemo(() => {
    return countriesData?.filter((country) => {
      const regex = new RegExp(searchValue, "i");
      return regex.test(country?.name?.common);
    });
  }, [countriesData, searchValue]);

  const regionFilteredCountries = searchFilteredCountries?.filter((country) => {
    if (!regionFilter) return country;
    return country.region.toLowerCase() === regionFilter;
  });

  if (isLoading) {
    return <CircularProgress className="loader" />;
  }

  return (
    <ThemeDiv>
      <div className="filtering-container">
        <CountrySearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <CountrySelect regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
      </div>
      <div className="cards">
        {regionFilteredCountries?.map((country: Country) => (
          <CountryCard country={country} />
        ))}
      </div>
      {regionFilteredCountries?.length === 0 && <p className="cards__not-found">Countries were not found</p>}
    </ThemeDiv>
  );
}
