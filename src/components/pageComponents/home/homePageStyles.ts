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
      minHeight: "55vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "@media (max-width: 2560px)": {
        minHeight: "55vh",
      },
      "@media (max-width: 1920px)": {
        minHeight: "65vh",
      },
      "@media (max-width: 1440px)": {
        minHeight: "65vh",
      },
      "@media (max-width: 1024px)": {
        minHeight: "55vh",
      },
      "@media (max-width: 961px)": {
        minHeight: "55vh",
      },
      "@media (max-width: 912px)": {
        minHeight: "65vh",
      },
      "@media (max-width: 768px)": {
        minHeight: "50vh",
        mt: "1rem",
      },
      "@media (max-width: 600px)": {
        minHeight: "65vh",
        mt: "1rem",
      },
      "@media (max-width: 481px)": {
        minHeight: "55vh",
        mb: "3rem",
      },
      "@media (max-width: 400px)": {
        minHeight: "35vh",
        mb: "3rem",
      },
      "@media (max-width: 375px)": {
        minHeight: "35vh",
        mb: "5rem",
      },
    },
    //* Main Content Section Styles index.tsx
    contentHeader: {
      fontSize: "1.4rem",
      lineHeight: "1.5",
      textAlign: "center",
      maxWidth: "70ch",
      // fontStyle: "italic",
      mt: "14rem",
      "@media (max-width: 2560px)": {
        mt: "25rem",
      },
      "@media (max-width: 1920px)": {
        mt: "15rem",
      },
      "@media (max-width: 1440px)": {
        mt: "15rem",
      },
      "@media (max-width: 1024px)": {
        fontSize: "1.3rem",
        mt: "7rem",
      },
      "@media (max-width: 961px)": {
        mt: "12rem",
      },
      "@media (max-width: 912px)": {
        fontSize: "1.3rem",
        mt: "12rem",
      },
      "@media (max-width: 768px)": {
        fontSize: "1.2rem",
        mt: "7rem",
      },
      "@media (max-width: 600px)": {
        fontSize: "1.2rem",
        mt: "13rem",
      },
      "@media (max-width: 481px)": {
        fontSize: "1.2rem",
        mt: "10rem",
      },
      "@media (max-width: 400px)": {
        fontSize: "1.2rem",
        mt: "10rem",
      },
      "@media (max-width: 320px)": {
        fontSize: "1.2rem",
        mt: "10rem",
      },
      "@media (max-width: 360px)": {},
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
      width: "99%",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.20)",
      "&::before, &::after": {
        borderWidth: 1,
        borderColor: "white",
      },
      "@media (max-width: 2560px)": {
        width: "90%",
      },
      "@media (max-width: 1440px)": {
        width: "94.5%",
      },
      "@media (max-width: 1024px)": {
        width: "98.5%",
      },
      "@media (max-width: 768px)": {
        width: "97.5%",
      },
    },
    //* Property Home Cards Section
    //! Inside of propertyCardStyles.ts and homePropertyCards folder

    //* Project Section
    //! Inside of projectCardStyles.ts and projectCards folder

    //* index.tsx map section
    mapCardPos: {},

    mapTitleStyles: {
      paddingBottom: "1rem",
      color: muiTheme.palette.primary.main,
      textAlign: "center",
      "@media (max-width: 600px)": {
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

      "@media (max-width: 1440px)": {},
      "@media (max-width: 1281px)": {},
      "@media (max-width: 1024px)": {
        height: "100vh",
      },
      "@media (max-width: 961px)": {
        height: "100vh",
      },
      "@media (max-width: 768px)": {
        height: "100vh",
      },
      "@media (max-width: 641px)": {},
      "@media (max-width: 600px)": {
        height: "100vh",
      },
      "@media (max-width: 481px)": {},
      "@media (max-width: 400px)": {
        height: "100vh",
      },
      "@media (max-width: 375px)": {
        height: "100vh",
      },
      "@media (max-width: 360px)": {
        height: "100vh",
      },
      "@media (max-width: 320px)": {},
    },

    imgOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: "110vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      "@media (max-width: 1440px)": {},
      "@media (max-width: 1281px)": {},
      "@media (max-width: 1024px)": {
        height: "100vh",
      },
      "@media (max-width: 961px)": {
        height: "100vh",
      },
      "@media (max-width: 768px)": {
        height: "100vh",
      },
      "@media (max-width: 641px)": {},
      "@media (max-width: 600px)": {
        height: "100vh",
      },
      "@media (max-width: 481px)": {},
      "@media (max-width: 400px)": {
        height: "100vh",
      },
      "@media (max-width: 375px)": {
        height: "100vh",
      },
      "@media (max-width: 360px)": {
        height: "100vh",
      },
      "@media (max-width: 320px)": {},
    },

    contentContainer: {
      position: "absolute",
      top: "37%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
      textAlign: "center",
      color: "white",
      maxWidth: "1300px",
      margin: "0 auto",
      "@media (max-width: 1440px)": {
        top: "47%",
        fontSize: "1rem",
      },
      "@media (max-width: 1280px)": {
        top: "47%",
        fontSize: "1rem",
      },
      "@media (max-width: 1024px)": {
        top: "43%",
        fontSize: "0.9rem",
      },
      "@media (max-width: 600px)": {
        top: "33%",
        fontSize: "0.8rem",
      },
      "@media (max-width: 540px)": {
        top: "37%",
        fontSize: "0.6rem",
      },
      "@media (max-width: 425px)": {
        top: "33%",
        fontSize: "0.6rem",
      },
      "@media (max-width: 400px)": {
        top: "37%",
        fontSize: "0.6rem",
      },
      "@media (max-width: 375px)": {
        top: "37%",
        fontSize: "0.6rem",
      },
      "@media (max-width: 360px)": {
        top: "35%",
        fontSize: "0.6rem",
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
        fontSize: "3.5rem",
      },
      "@media (max-width: 960px)": {
        fontSize: "3rem",
      },
      "@media (max-width: 600px)": {
        fontSize: "3rem",
        mb: "0rem",
      },
      "@media (max-width: 481px)": {
        fontSize: "2.8rem",
        mb: "0rem",
      },
      "@media (max-width: 400px)": {
        fontSize: "2.7rem",
        mb: "0rem",
      },
      "@media (max-width: 375px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width: 360px)": {
        fontSize: "2rem",
        mb: "0rem",
      },
    },

    zakSubTitle: {
      fontSize: "1.3rem",
      fontWeight: "400",
      mt: "3rem",
      color: "white",
      textAlign: "left",
      "@media (max-width: 1440px)": {
        mb: "7rem",
      },
      "@media (max-width: 1024px)": {
        mb: "3rem",
      },
      "@media (max-width: 768px)": {
        mt: "2rem",
        fontSize: "1rem",
      },
      "@media (max-width: 600px)": {
        mt: "2rem",
      },
      "@media (max-width: 481px)": {
        mb: "0rem",
      },
      "@media (max-width: 400px)": {
        mt: "3rem",
        fontSize: "1rem",
      },
      "@media (max-width: 375px)": {
        fontSize: "1rem",
        mt: "1rem",
      },
      "@media (max-width: 360px)": {
        mt: "1rem",
        fontSize: "1rem",
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
      "@media (max-width: 1024px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width: 960px)": {
        fontSize: "2rem",
      },
      "@media (max-width: 600px)": {
        fontSize: "2rem",
        mb: "0rem",
      },
      "@media (max-width: 481px)": {
        fontSize: "2.3rem",
        mb: "0rem",
      },
      "@media (max-width: 400px)": {
        fontSize: "1.5rem",
        mb: "0rem",
      },
      "@media (max-width: 375px)": {
        fontSize: "1rem",
      },
      "@media (max-width: 360px)": {
        fontSize: "1rem",
        mb: "0rem",
      },
    },
    zakStaticSubTitle: {
      fontSize: "1.3rem",
      fontWeight: "400",
      mt: "1rem",
      textAlign: "center",
      "@media (max-width: 1440px)": {},
      "@media (max-width: 1024px)": {
        mb: "1rem",
      },
      "@media (max-width: 768px)": {
        mt: "2rem",
        fontSize: "1rem",
      },
      "@media (max-width: 600px)": {
        mt: "2rem",
      },
      "@media (max-width: 481px)": {
        mb: "0rem",
      },
      "@media (max-width: 400px)": {
        mt: "3rem",
        fontSize: "1rem",
      },
      "@media (max-width: 375px)": {
        fontSize: "1rem",
        mt: "1rem",
      },
      "@media (max-width: 360px)": {
        mt: "1rem",
        fontSize: "1rem",
      },
    },
    zakStaticSubSubTitle: {
      fontSize: "1.3rem",
      fontWeight: "400",
      mt: "1rem",
      textAlign: "center",
      "@media (max-width: 1440px)": {
        mb: "8rem",
      },
      "@media (max-width: 1024px)": {
        mb: "3rem",
      },
      "@media (max-width: 600px)": {
        mt: "2rem",
        mb: "-1rem",
      },
      "@media (max-width: 481px)": {
        fontSize: "1.2rem",
        mb: "0rem",
      },
      "@media (max-width: 400px)": {
        mt: "3rem",
        fontSize: "1rem",
      },
      "@media (max-width: 375px)": {
        fontSize: "1rem",
        mt: "1rem",
      },
      "@media (max-width: 360px)": {
        mt: "1rem",
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
