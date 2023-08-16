import { useTheme } from "@mui/material";

export const getHomePageStyles = () => {
  const muiTheme = useTheme();
  return {
    //! Index Styles
    //* Header box Top of the file index.tsx
    homeHeaderContainerBox: {
      mb: "5rem",
    },

    //* for the entire content container under header index.tsx
    indexMainContainer: {
      display: "flex",
      mt: "13rem",
    },

    mainBoxContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },

    boxContentProject: {
      minHeight: "65vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      mt: "1rem",
      mb: "1rem",
      [muiTheme.breakpoints.down("xl")]: {
        minHeight: "60vh",
      },
      [muiTheme.breakpoints.down("lg")]: {
        minHeight: "55vh",
      },
      [muiTheme.breakpoints.down("md")]: {
        minHeight: "50vh",
      },
      [muiTheme.breakpoints.down("sm")]: {
        minHeight: "45vh",
      },
      [muiTheme.breakpoints.down("xs")]: {
        minHeight: "40vh",
      },
    },
    //* Main Content Section Styles index.tsx
    contentHeader: {
      fontSize: "1.4rem",
      lineHeight: "1.5",
      textAlign: "center",
      maxWidth: "70ch",
      mt: "7rem",
      [muiTheme.breakpoints.down("xl")]: {},
      [muiTheme.breakpoints.down("lg")]: {},
      [muiTheme.breakpoints.down("md")]: {},
      [muiTheme.breakpoints.down("sm")]: {
        fontSize: "1.1rem",
      },
      [muiTheme.breakpoints.down("xs")]: {},
    },

    buyPropertiesButton: {
      mt: "3rem",
      maxWidth: "300px",
      width: "100%",
      fontSize: "1rem",
    },

    dividerStyles: {
      mt: "1rem",
      mb: "1rem",
      width: "100%",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.20)",
      "&::before, &::after": {
        borderWidth: 1,
        borderColor: "white",
      },
      [muiTheme.breakpoints.down("xl")]: {
        width: "90%",
      },
      [muiTheme.breakpoints.down("lg")]: {
        width: "94.5%",
      },
      [muiTheme.breakpoints.down("md")]: {
        width: "98.5%",
      },
      [muiTheme.breakpoints.down("sm")]: {
        width: "97.5%",
      },
      [muiTheme.breakpoints.down("xs")]: {
        width: "96.5%",
      },
    },
    //* Property Home Cards Section
    //! Inside of propertyCardStyles.ts and homePropertyCards folder

    //* Project Section
    //! Inside of projectCardStyles.ts and projectCards folder

    //* index.tsx map section
    mapCardPos: {
      [muiTheme.breakpoints.down("sm")]: {
        display: "none",
      },
    },

    mapTitleStyles: {
      paddingBottom: "1rem",
      color: muiTheme.palette.primary.main,
      textAlign: "center",
      [muiTheme.breakpoints.down("sm")]: {
        fontSize: "1.2rem",
      },
      //? Title for the map OUTSIDE of container
    },

    //* HomeImageHeader Styles
    mainBox: {
      position: "relative",
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

    imgContainer: {
      position: "relative",
      height: "110vh",
      width: "100%",
      zIndex: 1,
      [muiTheme.breakpoints.down("lg")]: {
        height: "100vh",
      },
    },

    imgOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: "110vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      [muiTheme.breakpoints.down("lg")]: {
        height: "100vh",
      },
    },

    contentContainer: {
      position: "absolute",
      top: "46%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
      textAlign: "center",
      color: "white",
      maxWidth: "1300px",
      margin: "0 auto",
    },

    zakTitle: {
      fontSize: "5rem",
      fontWeight: "bold",
      mb: "1rem",
      color: "white",
      textAlign: "center",
      transition: "color 0.3s ease-in-out",
      ":hover": {
        color: muiTheme.palette.error.light,
      },
      [muiTheme.breakpoints.down("lg")]: {
        fontSize: "3.5rem",
      },
      [muiTheme.breakpoints.down("md")]: {
        fontSize: "3rem",
      },
      [muiTheme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
      [muiTheme.breakpoints.down("xs")]: {
        fontSize: "2.8rem",
      },
      [muiTheme.breakpoints.down("smallphones")]: {
        fontSize: "2rem",
      },
    },

    zakSubTitle: {
      fontSize: "1.3rem",
      fontWeight: "400",
      // mt: "3rem",
      color: "white",
      textAlign: "center",
      [muiTheme.breakpoints.down("md")]: {
        fontSize: "1.1rem",
      },
    },

    // Static Header Styles
    zakStaticTitle: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      mb: "1rem",
      textAlign: "center",
      transition: "color 0.3s ease-in-out",
      ":hover": {
        color: muiTheme.palette.error.light,
      },
      [muiTheme.breakpoints.down("lg")]: {
        fontSize: "3.5rem",
      },
      [muiTheme.breakpoints.down("md")]: {
        fontSize: "2.1rem",
      },
      [muiTheme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
      [muiTheme.breakpoints.down("xs")]: {
        fontSize: "1.8rem",
      },
      [muiTheme.breakpoints.down("smallphones")]: {
        fontSize: "1.7rem",
      },
    },
    zakStaticSubTitle: {
      fontSize: "1.3rem",
      fontWeight: "400",
      mt: "1rem",
      textAlign: "center",
      [muiTheme.breakpoints.down("lg")]: {
        fontSize: "1rem",
      },
      [muiTheme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
      [muiTheme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      [muiTheme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
      [muiTheme.breakpoints.down("smallphones")]: {
        fontSize: "1rem",
      },
    },

    zakStaticSubSubTitle: {
      fontSize: "1.3rem",
      fontWeight: "400",
      mt: "1rem",
      textAlign: "center",
      [muiTheme.breakpoints.down("lg")]: {
        fontSize: "1rem",
      },
      [muiTheme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
      [muiTheme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      [muiTheme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
      [muiTheme.breakpoints.down("smallphones")]: {
        fontSize: "1rem",
      },
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
    },

    homeComponentMainBox: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
  };
};
