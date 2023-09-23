export type Country = {
  name: Name;
  population: number;
  region: string;
  capital: string[];
  flags: Flags;
};

type Name = {
  common: string;
  official: string;
};

type Flags = {
  png: string;
  svg: string;
};
