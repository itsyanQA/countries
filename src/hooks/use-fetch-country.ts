import { useEffect, useState } from "react";
import { Country } from "../types";

export function useFetchCountry(countryCode: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countryInfo, setCountryInfo] = useState<Country[]>();

  useEffect(() => {
    const fetchCountry = async () => {
      setIsLoading(true);
      const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryCode}`);
      setIsLoading(false);
      setCountryInfo(await response.json());
    };

    fetchCountry();
  }, [countryCode]);

  return { isLoading, countryInfo };
}
