import { useEffect, useState } from "react";
import { Country } from "../types";

export default function useFetchCountries() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countriesData, setCountriesData] = useState<Country[]>();

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      const data = await fetch("https://restcountries.com/v3.1/all");
      setCountriesData(await data.json());
      setIsLoading(false);
    };

    fetchCountries();
  }, []);

  return { isLoading, countriesData };
}
