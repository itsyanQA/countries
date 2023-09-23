export type Country = {
  name: Name;
  population: number;
  region: string;
  capital: string[];
  flags: Flags;
  subregion: string;
  tld: string[];
  languages: any;
  currencies: any;
};

type Name = {
  common: string;
  official: string;
};

type Flags = {
  png: string;
  svg: string;
};

export type Currency = {
  name: string;
  symbol: string;
};
