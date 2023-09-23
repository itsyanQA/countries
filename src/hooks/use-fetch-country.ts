import { useEffect, useState } from "react";

export function useFetchCountry(countryName: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countryInfo, setCountryInfo] = useState();

  useEffect(() => {
    const fetchCountry = async () => {
      setIsLoading(true);
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
      setIsLoading(false);
      setCountryInfo(await response.json());
    };

    fetchCountry();
  }, []);

  return { isLoading, countryInfo };
}
