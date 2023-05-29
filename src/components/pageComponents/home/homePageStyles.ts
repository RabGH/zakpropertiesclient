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
      },
      "@media (max-width: 400px)": {
        fontSize: "1rem",
      },
    },

    boxContentProject: {
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "@media (max-width: 600px)": {
        minHeight: "80vh",
        mb: "-6rem",
      },
      "@media (max-width: 400px)": {
        minHeight: "30vh",
        mb: "15rem",
      },
    },

    mapCardPos: {
      m: 3,
      display: {
        xs: "none",
        sm: "none",
        md: "block",
        lg: "block",
        xl: "block",
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
      fontSize: "1.5rem",
      "@media (max-width: 600px)": {
        fontSize: "1.3rem",
        mb: "1rem",
      },
      "@media (max-width: 400px)": {
        fontSize: "1.3rem",
        mb: "1rem",
      },
    },

    mainContainer: {
      display: "flex",
      width: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
      },
      margin: "0 auto",
    },
    projectCards: {},
  };
};
