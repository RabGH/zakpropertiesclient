import { useTheme } from "@mui/material";

export const getHomePageStyles = () => {
  const muiTheme = useTheme();
  return {
    mainBoxContainer: {},
    contentHeader: {
      fontSize: "1.2rem",
      lineHeight: "1.5",
      textAlign: "center",
      maxWidth: "70ch",
      margin: "0 auto",
      mb: "-27rem",
      fontStyle: "italic",
      "@media (max-width: 600px)": {
        fontSize: "1rem",
        mb: "-20rem",
      },
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
      display: {
        xs: "none", // hide on extra-small screens
        sm: "none", // hide on small screens
        md: "block", // show on medium screens
        lg: "block", // show on large screens
        xl: "block", // show on extra-large screens
      },
    },

    mapCard: {
      width: "100%",
      height: "500px",
      borderRadius: "15px",
      overflow: "hidden",
      padding: "1rem",
      "@media (max-width: 600px)": {
        width: "80%",
        height: "300px",
      },
    },

    mapCardContent: {
      backgroundColor: "#333",
      border: "2px solid #fff",
    },

    locationTitleStyles: {
      paddingBottom: "1rem",
      color: muiTheme.palette.primary.main,
      textAlign: "center",
      "@media (max-width: 600px)": {
        fontSize: "2rem",
      },
    },

    dividerStyles: {
      mt: "1rem",
      "&::before, &::after": {
        borderWidth: 1,
        borderColor: "white",
      },
    },

    homeFeaturedTitlePos: {
      mt: "1rem",
      ml: "1rem",
      mb: "1rem",
      mr: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      m: "1.2rem",
      fontSize: {
        xl: "1.5rem",
        lg: "1.5rem",
        md: "1.5rem",
        sm: "1rem",
        xs: "1rem",
      },
    },

    mainContainer: {
      display: "flex",
      width: {
        // use the responsive style helper function here
        xs: "100%", // full width on extra-small screens
        sm: "100%", // 80% width on small screens
        md: "100%", // 60% width on medium screens
        lg: "100%", // 40% width on large screens
        xl: "100%", // 20% width on extra-large screens
      },
      margin: "0 auto", // center the container
    },
    propertyVillaCards: {
      justifyContent: "center",
    },
    propertyAptCards: {
      justifyContent: "center",
    },
    propertyTownCards: {
      justifyContent: "center",
    },
    projectCards: {},
  };
};
