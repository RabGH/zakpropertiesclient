import { useTheme } from "@mui/material";

export const CardStyles = () => {
  const theme = useTheme();
  return {
    // Property Home Card Styles and property all card styles
    allCardStyles: {
      maxWidth: 450,
      maxHeight: 490,
      boxShadow: "none",
      borderRadius: "10px",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      backgroundColor: "transparent",
      padding: "0.7rem",
      mt: "-1rem",
      "&:hover": {
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 1)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      },
      "@media (max-width: 600px)": {
        width: "450px",
      },
      "@media (max-width: 400px)": {
        width: "355px",
      },
    },
    offPlanReadyToBuyStyles: {},

    mainAll: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mb: "1rem",
    },
    featuredTitlePos: {
      // mt: "1rem",
      // ml: "1rem",
      // mb: "1rem",
      // mr: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      m: "2rem",
      fontSize: "1.5rem",
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
    homeCardGridStyles: {},
  };
};
