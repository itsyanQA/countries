import "./HomePage.scss";
import CountrySearchBar from "../../components/CountrySearchBar/CountrySearchBar";
import useFetchCountries from "../../hooks/use-fetch-countries";
import CountryCard from "../../components/CountryCard/CountryCard";
import { Country } from "../../types";
import { useState, useMemo } from "react";
import ThemeDiv from "../../components/UI/ThemeDiv/ThemeDiv";
import CountrySelect from "../../components/CountrySelect/CountrySelect";

export default function HomePage() {
  const { isLoading, countriesData } = useFetchCountries();
  const [searchValue, setSearchValue] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string>("");
  
  const countriesToRender = useMemo(() => {
    return countriesData?.filter((country) => {
      const regex = new RegExp(searchValue, "i");
      return regex.test(country?.name?.common);
    });
  }, [countriesData, searchValue]);

  const filteredCountries = countriesToRender?.filter((country) => {
    if (!regionFilter) return country;
    return country.region.toLowerCase() === regionFilter;
  });



  return (
    <ThemeDiv>
      <div className="filtering-container">
        <CountrySearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <CountrySelect regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
      </div>
      <div className="cards">
        {filteredCountries?.map((country: Country) => (
          <CountryCard country={country} />
        ))}
      </div>
      {filteredCountries?.length === 0 && <p className="cards__not-found">Countries were not found</p>}
    </ThemeDiv>
  );
}
