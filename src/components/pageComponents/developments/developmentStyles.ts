import { useTheme } from "@mui/material";

export const getDevelopmentStyles = () => {
  const muiTheme = useTheme();
  return {
    mainContainer: {
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
      mt: "10rem",
    },
    divider: {},
    contactButton: {
      mt: "3rem",
      mb: "3rem",
    },
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    mainBox: {
      display: "flex",
      flexDirection: "row",
      mb: "2rem",
    },
  };
};
