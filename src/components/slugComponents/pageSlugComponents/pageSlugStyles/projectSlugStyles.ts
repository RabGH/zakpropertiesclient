import { useTheme } from "@mui/material";

export const getProjectPageStyles = () => {
  const muiTheme = useTheme();

  return {
    contentContainer: {
      pr: "12rem",
      pl: "12rem",
    },
    titleContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: "3rem",
      textAlign: "center",
    },
    titleStyles: {},
    priceStyles: {
      ml: 2,
      fontSize: "1.3rem",
      p: "1rem",
      borderRadius: "0.5rem",
      backgroundColor: "#F1EDEE",
      color: "#3D3D3D",
    },
    priceButtonPos: {
      mt: "3rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    bodyStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    offPlanStyles: {},
    offPlanTextStyles: {},
    offPlanCompleteStyles: {},
    mainSection: {},
    descriptionStyles: {
      my: "1rem",
    },
    priceBox: {},
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
    viewMoreDevelopmentsStyles: {
      "&:hover": {
        backgroundColor: muiTheme.palette.primary.light,
      },
    },
    viewMoreProperties: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mt: "1rem",
    },
    locationTitle: {},
    mapCardPos: {
      mt: 3,
      mb: 3,
      pr: "12rem",
      pl: "12rem",
    },
    dividerStyles: {
      m: 3,
    },
    projectBedroomStyles: {},
    areaTypeStyles: {},
    projectBuiltUpAreaStyles: {},
    numFloorsStyles: {},
    numUnitsStyles: {},
    numVillaStyles: {},
    bedroomStyles: {},
    unitTypeStyles: {},
    mainDeveloperStyles: {},
    projectTypeStyles: {},
    squareFootageStyles: {},
  };
};
