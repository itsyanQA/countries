import { styled } from "@mui/material";
import { Button as MuiButton } from "@mui/material";

export const Button = styled(MuiButton)(({ theme }) => ({
  boxShadow: "0px 0px 7px 2px hsl(0deg 0% 0% / 12%)",
  width: "110px",
  padding: "4px 8px",
  fontWeight: "500",
  fontSize: "14px",
  textTransform: "none",
  transition: "background-color 0s",
}));
