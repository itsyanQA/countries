import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { Filter } from "../../styled/Filter";
import useThemeContext from "../../hooks/use-theme-context";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Dispatch, SetStateAction } from "react";

type CountrySelectProps = {
  regionFilter: string;
  setRegionFilter: Dispatch<SetStateAction<string>>;
};

export default function CountrySelect({ regionFilter, setRegionFilter }: CountrySelectProps) {
  const { theme } = useThemeContext();
  const backgroundColor = theme === "light" ? "var(--white)" : "var(--dark-blue)";
  const fontColor = theme === "light" ? "var(--dark-blue)" : "var(--white)";

  return (
    <FormControl>
      <InputLabel
        sx={{
          color: fontColor,
          fontWeight: "600",
          "&.MuiInputLabel-shrink": { top: "-7px" },
          "&.Mui-focused": { color: fontColor },
        }}
      >
        Filter by Region
      </InputLabel>
      <Filter
        value={regionFilter}
        onChange={(e) => setRegionFilter(e.target.value as string)}
        IconComponent={ExpandMoreIcon}
        displayEmpty
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: backgroundColor,
              color: fontColor,
              marginTop: "5px",
            },
          },
        }}
        sx={{
          backgroundColor: backgroundColor,
          color: fontColor,
          "& svg": {
            color: fontColor,
          },
        }}
      >
        <MenuItem value="africa">Africa</MenuItem>
        <MenuItem value="americas">Americas</MenuItem>
        <MenuItem value="asia">Asia</MenuItem>
        <MenuItem value="europe">Europe</MenuItem>
        <MenuItem value="oceania">Oceania</MenuItem>
      </Filter>
    </FormControl>
  );
}
