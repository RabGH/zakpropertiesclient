import { useTheme } from "@mui/material";

export const getGeneralSlugStyles = () => {
  const muiTheme = useTheme();

  return {
    dividerStyles: {
      m: 3,
    },
    titleContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: "3rem",
      textAlign: "center",
    },
    contentContainer: {
      pr: "12rem",
      pl: "12rem",
    },
    priceStyle: {
      ml: 2,
      fontSize: "1.3rem",
      p: "1rem",
      borderRadius: "0.5rem",
      backgroundColor: "#F1EDEE",
      color: "#3D3D3D",
    },
    bodyStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },

    descriptionStyles: {
      my: "1rem",
    },

    priceButtonPos: {
      mt: "3rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    buttonStyles: {
      "&:hover": {
        backgroundColor: muiTheme.palette.primary.light,
      },
      mb: "1rem",
    },
    mapCard: {
      width: "100%",
      height: "500px",
      borderRadius: "5px",
      overflow: "hidden",
      padding: "1rem",
    },
    viewMoreProperties: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mt: "1rem",
    },
    titleStyle: {},
    offPlanStyles: {},
    offPlanTextStyles: {},
    offPlanCompleteStyles: {},
    locationTitle: {},
    priceBox: {},
    mainSection: {},
  };
};
