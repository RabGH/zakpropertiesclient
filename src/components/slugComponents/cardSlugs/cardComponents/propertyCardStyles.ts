import { useTheme } from "@mui/material";

export const getPropertyCardStyles = () => {
  const theme = useTheme();
  return {
    //* PropertyAllCards and Box styles used in homePropertyCards
    mainAll: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mb: "1rem",
    },

    mainBox: {
      display: "flex",
      flexDirection: "row",
    },

    //* PropertyAptCards Villa And Town styles
    homeItemCardBoxStyles: {
      justifyContent: "center",
      // scrollSnapAlign: "start",
      flexShrink: 0,
      minWidth: "33%",
      mt: "1.5rem",
      scrollSnapAlign: "center",
    },

    homeContainerBoxStyles: {
      display: "flex",
      width: "100%",
      overflowX: "auto",
      whiteSpace: "nowrap",
    },

    //* index.tsx position and scroll styles for home property cards
    homePropertyCardsPos: {
      display: "flex",
      width: "100%",
      overflowX: "auto",
      whiteSpace: "nowrap",
      scrollSnapType: "x mandatory",
      pl: "4.3rem",
      pr: "4.3rem",
      "@media (max-width: 1440px)": {
        pl: "2rem",
        pr: "2rem",
      },
      "@media (max-width: 1280px)": {
        pl: "1rem",
        pr: "1rem",
      },
      "@media (max-width: 1024px)": {
        pl: 0,
        pr: 0,
      },
    },

    //* title for each property card grid in index.tsx from homePropertyCards folder
    featuredTitlePos: {
      alignSelf: "flex-start",
      pt: "1rem",
      ml: "5rem",
      fontSize: "1.4rem",
      fontWeight: "400",
      "@media (max-width: 1440px)": {
        fontSize: "1.4rem",
        ml: 5,
      },
      "@media (max-width: 1024px)": {
        fontSize: "1.4rem",
        ml: 1,
      },
      "@media (max-width: 768px)": {
        fontSize: "1.3rem",
        ml: 1,
      },
      "@media (max-width: 600px)": {
        fontSize: "1.3rem",
      },
      "@media (max-width: 425px)": {
        fontSize: "1.3rem",
        ml: 1,
      },
      "@media (max-width: 400px)": {
        fontSize: "1.2rem",
      },
      "@media (max-width: 375px)": {
        fontSize: "1.2rem",
        ml: 1,
      },
      "@media (max-width: 320px)": {
        fontSize: "1.2rem",
        ml: 1,
      },
    },

    developmentFeaturedTitlePos: {
      p: "2rem",
      fontSize: "1.5rem",
      "@media (max-width: 600px)": {
        fontSize: "1.2rem",
      },
      "@media (max-width: 400px)": {
        fontSize: "1.3rem",
      },
    },

    //* Property all card styles
    allCardStyles: {
      maxWidth: "450px",
      maxHeight: "510px",
      boxShadow: "none",
      borderRadius: "10px",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      backgroundColor: "transparent",
      padding: "0.7rem",
      cursor: "pointer",
      "&:hover": {
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 1)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      },
      "@media (max-width: 1440px)": {},
      "@media (max-width: 1280px)": {
        width: "420px",
      },
      "@media (max-width: 1024px)": {
        width: "480px",
      },
      "@media (max-width: 961px)": {
        width: "400px",
      },
      "@media (max-width: 912px)": {
        width: "440px",
      },
      "@media (max-width: 768px)": {
        width: "380px",
      },
      "@media (max-width: 600px)": {
        width: "480px",
      },
      "@media (max-width: 481px)": {
        width: "365px",
      },
      "@media (max-width: 400px)": {
        width: "375px",
      },
      "@media (max-width: 375px)": {
        width: "325px",
      },
      "@media (max-width: 360px)": {
        width: "345px",
      },
      "@media (max-width: 320px)": {
        width: "270px",
      },
    },
    offPlanReadyToBuyStyles: {},

    propertyTypeStyles: {
      fontSize: "1.2rem",
    },
    propertyTitleCard: {
      fontSize: "1.2rem",
      paddingBottom: "0.7rem",
      mt: "0.5rem",
    },
    propertyAreaCard: {},
    propertyPriceCard: {
      paddingBottom: "0rem",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    cardInfoStyles: {
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
    },

    dividerStyles: {
      "&::before, &::after": {
        borderBottomWdith: 2,
        borderColor: "white",
      },
    },
    bedroomStyles: {},
    offPlanStyles: {},
    offPlanTextStyles: {},
    offPlanCompleteStyles: {},
  };
};
