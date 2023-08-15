import { useTheme } from "@mui/material";
const muiTheme = useTheme();

export const mainStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "left",
  alignItems: "flex-start",
};

export const cardStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  mr: "2rem",
};

export const boxStyles = {
  display: "grid",
  gap: "0px",
};

export const mainTitle = {
  mb: "1rem",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "left",
  [muiTheme.breakpoints.down("smallphones")]: {
    mr: "3rem",
  },
};
