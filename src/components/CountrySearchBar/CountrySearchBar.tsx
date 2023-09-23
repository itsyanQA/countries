import { Input as SearchBar } from "../../styled/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Dispatch, SetStateAction } from "react";
import useThemeContext from "../../hooks/use-theme-context";
import { theme as muiTheme } from "../../style/theme";

type CountrySearchBarProps = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export default function CountrySearchBar({ searchValue, setSearchValue }: CountrySearchBarProps) {
  const { theme } = useThemeContext();
  const textColor = theme === "light" ? "var(--dark-blue)" : "var(--white)";
  const searchIconStyle = {
    light: {
      opacity: "50%",
    },
    dark: {
      color: "var(--white)",
    },
  };

  return (
    <SearchBar
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search for a country..."
      InputProps={{
        startAdornment: <SearchIcon sx={{ padding: "0 20px 0 10px", ...searchIconStyle[theme] }} />,
      }}
      sx={{
        backgroundColor: theme === "dark" ? "var(--dark-blue)" : "var(--white)",
        color: textColor,
        "& .MuiInputBase-root": {
          color: textColor,
        },
      }}
      inputProps={{
        sx: {
          "&::placeholder": {
            color: textColor,
            [muiTheme.breakpoints.down("sm")]: {
              opacity: "100%",
            },
          },
        },
      }}
    />
  );
}
