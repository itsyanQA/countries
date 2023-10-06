import { TextField, styled } from "@mui/material";

export const Input = styled(TextField)(({ theme }) => ({
  width: "420px",
  borderRadius: "5px",
  boxShadow: "0px 0px 7px 2px hsl(0deg 0% 0% / 12%)",
  marginLeft: "7%",
  [theme.breakpoints.down("sm")]: {
    margin: "0 7%",
    width: "auto",
  },

  "& input": {
    fontWeight: "600",
  },
  "& fieldset": {
    border: "none",
  },
}));
