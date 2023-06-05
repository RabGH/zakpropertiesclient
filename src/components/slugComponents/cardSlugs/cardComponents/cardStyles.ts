import { useTheme } from "@mui/material";

export const CardStyles = () => {
  const theme = useTheme();
  return {
    // PropertyAptCards Villa And Town styles
    homeItemCardBoxStyles: {
      justifyContent: "center",
      scrollSnapAlign: "start",
      flexShrink: 0,
      flexBasis: "33%",
      mt: "1.5rem",
    },

    homeContainerBoxStyles: {
      display: "flex",
      width: "100%",
      margin: "0 auto",
      overflowX: "auto",
      whiteSpace: "nowrap",
      scrollSnapType: "x mandatory",
    },

    // index.tsx position and scroll styles
    homePropertyCardsComponentPos: {
      display: "flex",
      width: "100%",
      margin: "0 auto",
      overflowX: "auto",
      whiteSpace: "nowrap",
      scrollSnapType: "x mandatory",
      webkitOverflowScrolling: "touch",
      "@media (min-width: 1024px)": {
        overflowX: "auto",
        "&::before, &::after": {
          content: '""',
          flex: 1,
        },
      },
    },

    // Property Home Card Styles and property all card styles
    allCardStyles: {
      maxWidth: "450px",
      maxHeight: "510px",
      boxShadow: "none",
      borderRadius: "10px",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      backgroundColor: "transparent",
      padding: "0.7rem",
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
        width: "360px",
      },
      "@media (max-width: 360px)": {
        width: "345px",
      },
      "@media (max-width: 320px)": {
        width: "260px",
      },
    },

    offPlanReadyToBuyStyles: {},

    mainAll: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mb: "2rem",
      "@media (max-width: 600px)": {
        mb: "1rem",
      },
      "@media (max-width: 400px)": {
        mb: "1rem",
      },
    },
    featuredTitlePos: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      m: "1.2rem",
      fontSize: "1.5rem",
      "@media (max-width: 600px)": {
        fontSize: "1.2rem",
      },
      "@media (max-width: 400px)": {
        fontSize: "1rem",
      },
    },
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
      fontSize: "0.9rem",
    },
    cardInfoStyles: {
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
    },
    mainBox: {
      display: "flex",
      flexDirection: "row",
      "@media (max-width: 481px)": {},
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
