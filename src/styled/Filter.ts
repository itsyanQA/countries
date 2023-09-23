import { Select, styled } from "@mui/material";

export const Filter = styled(Select)(({ theme }) => ({
  width: "250px",
  boxShadow: "0px 0px 7px 2px hsl(0deg 0% 0% / 12%)",
  [theme.breakpoints.down("sm")]: {
    width: "75%",
  },
  "& fieldset": {
    border: "none",
  },
}));
