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

    propertyTypeStyles: {
      fontSize: "0.9rem",
      pr: 3,
      pl: 3,
      mb: "1.5rem",
      mt: "0.5rem",
    },

    dividerStyles: {
      width: "100%",
      mt: 3,
      mb: 4,
    },

    lifeStyles: {
      mt: 1,
    },
    lifeBoxStyles: {
      pr: 3,
      pl: 3,
    },

    titleStyle: {
      pr: 3,
      pl: 3,
    },

    descriptionStyles: {
      pr: 3,
      pl: 3,
    },

    mapSlug: {
      pr: 3,
      pl: 3,
    },

    contentContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      p: 10,
    },
  };
};
