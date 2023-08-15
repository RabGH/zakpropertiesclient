import { useTheme } from "@mui/material";

export const getAmenitiesStyles = () => {
  const muiTheme = useTheme();
  return {
    mainStyles: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "left",
      alignItems: "flex-start",
    },

    cardStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      mr: "2rem",
    },

    boxStyles: {
      display: "grid",
      gap: "0px",
    },

    mainTitle: {
      mb: "1rem",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "left",
      [muiTheme.breakpoints.down("smallphones")]: {
        mr: "3rem",
      },
    },
  };
};
