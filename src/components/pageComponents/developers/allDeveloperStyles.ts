import { useTheme } from "@mui/material";

export const getAllDeveloperStyles = () => {
  const muiTheme = useTheme();
  return {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
    },
    titleStyles: {
      fontWeight: "bold",
      mb: "1rem",
      mt: "10rem",
    },
    dividerStyles: {
      mt: "1rem",
      mb: "1rem",
      width: "90%",
      borderColor: "white",
    },
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
    introText: {
      fontSize: "1.2rem",
      lineHeight: "1.5",
      textAlign: "center",
      maxWidth: "70ch",
      margin: "0 auto",
      mt: "2rem",
      mb: "2rem",
    },
  };
};
