import { useTheme } from "@mui/material";

export const CardStyles = () => {
  const theme = useTheme();
  return {
    // Property Home Card Styles and property all card styles
    allCardStyles: {
      maxWidth: "450px",
      maxHeight: "490px",
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
      "@media (max-width: 600px)": {
        maxWidth: "390px",
      },
      "@media (max-width: 400px)": {
        maxWidth: "300px",
      },
    },
    offPlanReadyToBuyStyles: {},

    mainAll: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mb: "3rem",
      "@media (max-width: 600px)": {},
      "@media (max-width: 400px)": {},
    },
    featuredTitlePos: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      m: "1rem",
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
