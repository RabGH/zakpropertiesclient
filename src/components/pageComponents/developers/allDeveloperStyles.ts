import { useTheme } from "@mui/material";

export const getAllDeveloperStyles = () => {
  const muiTheme = useTheme();
  return {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    titleStyles: {
      fontWeight: "bold",
      mb: "1rem",
      mt: "8rem",
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

    mainBox: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      mt: "2rem",
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

    contactBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      m: "3rem",
    },
  };
};
