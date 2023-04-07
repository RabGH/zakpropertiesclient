import { Theme } from "@mui/material";

export const getDevelopmentStyles = (muiTheme: Theme) => {
  return {
    mainContainer: {
      height: "275vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    titleStyles: {
      fontWeight: "bold",
      mb: "1rem",
      mt: "5rem",
    },
    projectTitle: {
      fontWeight: "bold",
      mb: "0.5rem",
    },
    projectDesc: {
      mb: "1rem",
    },
    divider: {},
    contactButton: {
      mt: "2rem",
    },
  };
};
