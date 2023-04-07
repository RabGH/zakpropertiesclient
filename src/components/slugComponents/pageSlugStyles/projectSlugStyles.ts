import { useTheme } from "@mui/material";

export const getProjectPageStyles = () => {
  const muiTheme = useTheme();

  return {
    mapCardPos: {
      mt: 3,
      mb: 3,
      pr: "12rem",
      pl: "12rem",
    },
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
