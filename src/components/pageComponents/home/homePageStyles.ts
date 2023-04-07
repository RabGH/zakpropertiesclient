import { Theme } from "@mui/material";
export const getHomePageStyles = (muiTheme: Theme) => {
  return {
    contentHeader: {
      fontSize: "1.2rem",
      lineHeight: "1.5",
      textAlign: "center",
      maxWidth: "70ch",
      margin: "0 auto",
      mb: "-27rem",
      fontStyle: "italic",
    },

    boxContentProject: {
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    mapCardPos: {
      m: 3,
    },

    mapCard: {
      width: "100%",
      height: "500px",
      borderRadius: "15px",
      overflow: "hidden",
      padding: "1rem",
    },

    mapCardContent: {
      backgroundColor: "#333",
      border: "2px solid #fff",
    },

    locationTitleStyles: {
      paddingBottom: "1rem",
      color: muiTheme.palette.primary.main,
    },

    dividerStyles: {
      mt: "1rem",
      "&::before, &::after": {
        borderWidth: 1,
        borderColor: "white",
      },
    },

    mainContainer: {},
    propertyVillaCards: {},
    propertyTownCards: {},
    propertyAptCards: {},
    projectCards: {},
  };
};
