import { useTheme } from "@mui/material";

export const getPropertyCardStyles = () => {
  const muiTheme = useTheme();
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
      [muiTheme.breakpoints.down("md")]: {
        fontSize: "1.2rem",
        pl: "0rem",
        pr: "0rem",
      },
    },

    //* title for each property card grid in index.tsx from homePropertyCards folder
    featuredTitlePos: {
      alignSelf: "flex-start",
      pt: "1rem",
      fontSize: "1.5rem",
      fontWeight: "400",
      pl: "4.3rem",
      pr: "4.3rem",
      [muiTheme.breakpoints.down("xl")]: {
        fontSize: "1.4rem",
      },
      [muiTheme.breakpoints.down("lg")]: {
        fontSize: "1.3rem",
      },
      [muiTheme.breakpoints.down("md")]: {
        fontSize: "1.2rem",
        pl: "0rem",
        pr: "0rem",
      },
      [muiTheme.breakpoints.down("sm")]: {
        fontSize: "1.1rem",
      },
      [muiTheme.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },

    developmentFeaturedTitlePos: {
      p: "2rem",
      fontSize: "1.5rem",
      [muiTheme.breakpoints.down("xl")]: {
        fontSize: "1.4rem",
      },
      [muiTheme.breakpoints.down("lg")]: {
        fontSize: "1.3rem",
      },
      [muiTheme.breakpoints.down("md")]: {
        fontSize: "1.2rem",
      },
      [muiTheme.breakpoints.down("sm")]: {
        fontSize: "1.1rem",
      },
      [muiTheme.breakpoints.down("xs")]: {
        fontSize: "2rem",
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
      [muiTheme.breakpoints.down("xl")]: {
        width: "420px",
      },
      [muiTheme.breakpoints.down("lg")]: {
        width: "480px",
      },
      [muiTheme.breakpoints.down("md")]: {
        width: "420px",
      },
      [muiTheme.breakpoints.down("sm")]: {
        width: "480px",
      },
      [muiTheme.breakpoints.down("xs")]: {
        width: "270px",
      },
    },
    // Card Body Styles PropertyAllCards.tsx
    cardInfoStyles: {
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
    },
    offPlanReadyToBuyStyles: {
      fontWeight: "bold",
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
      fontSize: "1rem",
      fontWeight: "bold",
    },

    bedroomStyles: {},
    offPlanStyles: {},
    offPlanTextStyles: {},
    offPlanCompleteStyles: {
      fontWeight: "bold",
    },
  };
};
