import { useTheme } from "@mui/material";

export const getHomePageStyles = () => {
  const muiTheme = useTheme();
  return {
    // Index Styles
    mainBoxContainer: {
      mt: "10rem",
    },
    contentHeader: {
      fontSize: "1.4rem",
      lineHeight: "1.5",
      textAlign: "center",
      maxWidth: "70ch",
      fontStyle: "italic",
      mt: "10rem",
      "@media (max-width: 1024px)": {
        fontSize: "1.3rem",
        mt: "10rem",
      },
      "@media (max-width: 600px)": {
        fontSize: "1.2rem",
        mt: "10rem",
      },
      "@media (max-width: 400px)": {
        fontSize: "1.1rem",
        mt: "10rem",
      },
    },

    boxContentProject: {
      minHeight: "65vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "@media (max-width: 1024px)": {
        minHeight: "65vh",
      },
      "@media (max-width: 600px)": {
        minHeight: "65vh",
        mt: "1rem",
      },
      "@media (max-width: 400px)": {
        minHeight: "65vh",
        mt: "1rem",
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

    indexMainContainer: {
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
    homeHeaderContainerBox: {
      mb: "5rem",
    },

    // HomeImageHeader Styles
    zakLearnMore: {
      textAlign: "left",
      "@media (max-width: 1024px)": {
        fontSize: "1rem",
      },
      "@media (max-width: 600px)": {
        fontSize: "1rem",
        mt: "6rem",
      },
      "@media (max-width: 400px)": {
        fontSize: "0.8rem",
        mt: "6rem",
      },
    },

    zakTitle: {
      fontSize: "5rem",
      fontWeight: "bold",
      mb: "2rem",
      color: "white",
      textAlign: "left",
      transition: "color 0.3s ease-in-out",
      ":hover": {
        color: muiTheme.palette.error.light,
      },
      "@media (max-width: 1024px)": {
        fontSize: "4.5rem",
      },
      "@media (max-width: 600px)": {
        fontSize: "3.4rem",
        mb: "0rem",
      },
      "@media (max-width: 400px)": {
        fontSize: "2rem",
        mb: "0rem",
      },
    },

    zakSubTitle: {
      fontSize: "1.3rem",
      fontWeight: "400",
      mt: "8rem",
      color: "white",
      textAlign: "left",
      "@media (max-width: 1024px)": {
        mt: "4rem",
        mb: "3rem",
      },
      "@media (max-width: 600px)": {
        mt: "6rem",
        mb: "-1rem",
      },
      "@media (max-width: 400px)": {
        mt: "7rem",
        mb: "-1rem",
      },
    },

    imgContainer: {
      position: "relative",
      height: "110vh",
      width: "100%",
      zIndex: 1,
      "@media (max-width: 600px)": {
        height: "110vh",
      },
      "@media (max-width: 400px)": {
        height: "80vh",
      },
    },

    imgOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: "111vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    contentContainer: {
      position: "absolute",
      top: "47%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
      textAlign: "center",
      color: "white",
      maxWidth: "1300px",
      margin: "0 auto",
      "@media (max-width: 600px)": {
        top: "40%",
        fontSize: "0.8rem",
      },
      "@media (max-width: 400px)": {
        top: "35%",
        fontSize: "0.6rem",
      },
    },

    chevRightBox: {
      position: "absolute",
      top: "50%",
      right: "0",
      transform: "translate(50%, -50%)",
      zIndex: "2",
      mr: "3rem",
    },

    chevLeftBox: {
      position: "absolute",
      top: "50%",
      left: "0",
      transform: "translate(-50%, -50%)",
      zIndex: "2",
      ml: "3rem",
    },

    mainBox: {
      position: "relative",
    },

    // Home Header Styles (Holds HomeImageHeader and SearchBar)
    mainContainer: {
      height: "64vh",
      position: "relative",
    },

    searchBarContainer: {},

    searchBarBox: {
      maxWidth: 750,
      width: "100%",
      mt: "20rem",
    },

    homeComponentMainBox: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
  };
};
