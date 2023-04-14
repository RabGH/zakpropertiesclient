import { useTheme } from "@mui/material";

export const getPropertyPageStyles = () => {
  const muiTheme = useTheme();

  return {
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
      mt: 3,
      lineHeight: "1.5",
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
  };
};
