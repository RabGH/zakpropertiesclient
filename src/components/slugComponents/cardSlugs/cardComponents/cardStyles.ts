import { useTheme } from "@mui/material";

export const CardStyles = () => {
  const theme = useTheme();
  return {
    // Specific PropertyAllCard Styles
    allCardStyles: {
      maxWidth: {
        xl: "500px",
        lg: "420px",
        md: "400px",
        sm: "385px",
        xs: "385px",
      },
      maxHeight: {
        xl: "610px",
        lg: "490px",
        md: "490px",
        sm: "490px",
        xs: "490px",
      },
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
    },
    offPlanReadyToBuyStyles: {},

    // Property Home Card Styles
    mainAll: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mb: "2rem",
    },
    featuredTitlePos: {
      mt: "1rem",
      ml: "1rem",
      mb: "1rem",
      mr: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      m: "1.2rem",
      fontSize: "1.5rem",
    },
    // cardStyles: {
    // maxWidth: {
    //   xl: "400px",
    //   lg: "420px",
    //   md: "400px",
    //   sm: "350px",
    //   xs: "300px",
    // },
    // maxHeight: {
    //   xl: "510px",
    //   lg: "490px",
    //   md: "470px",
    //   sm: "470px",
    //   xs: "470px",
    // },
    //   boxShadow: "none",
    //   borderRadius: "10px",
    //   overflow: "hidden",
    //   transition: "all 0.3s ease-in-out",
    //   backgroundColor: "transparent",
    //   padding: "0.7rem",
    //   mt: "-1rem",
    //   "&:hover": {
    //     boxShadow: "0px 4px 20px rgba(0, 0, 0, 1)",
    //     backgroundColor: "rgba(255, 255, 255, 0.05)",
    //   },
    // },
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
      mb: "2rem",
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
