import { useTheme } from "@mui/material";

export const getPropertyPageStyles = () => {
  const muiTheme = useTheme();

  return {
    mainSection: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "1rem",
      [muiTheme.breakpoints.up("md")]: {
        gridTemplateColumns: "2fr 1fr",
      },
    },

    mapCardPos: {
      mt: 3,
      mb: 3,
    },
    propertyBedStyles: {
      fontSize: "1rem",
    },
    propertyBathroomStyles: {
      fontSize: "1rem",
    },
    staticStyles: {
      lineHeight: "1.5",
    },
    squareFootageStyles: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    propertyMainAreaStyles: {
      fontSize: "1rem",
    },
    propertyPlottedAreaStyles: {
      fontSize: "1rem",
    },
    propertyBuiltAreaStyles: {
      fontSize: "1rem",
    },

    propertyTypeStyles: {
      fontSize: "1.3rem",
      mb: "1rem",
      mt: "1rem",
    },
    dividerStyles: {},
    titleStyle: {},
    descriptionStyles: {},
    locationTitle: {},
    mapCard: {},
    contentContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    bodyStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  };
};
