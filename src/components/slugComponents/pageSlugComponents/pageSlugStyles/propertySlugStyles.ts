import { useTheme } from "@mui/material";

export const getPropertyPageStyles = () => {
  const muiTheme = useTheme();

  return {
    mainSection: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      m: "0 auto",
      [muiTheme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },

    propertyTypeStyles: {
      fontSize: "0.9rem",
      mb: "1.5rem",
      mt: "0.5rem",
      mr: 3,
      ml: 3,
      [muiTheme.breakpoints.down("smallphones")]: {
        mr: 0,
        ml: 0,
      },
    },

    dividerStyles: {
      width: "100%",
      mt: "3rem",
      mb: "3rem",
      [muiTheme.breakpoints.down("smallphones")]: {
        mt: "2rem",
        mb: "2rem",
      },
    },

    outterDividerStyles: {
      width: "90%",
      mb: "3rem",
      ml: "5%",
      mr: "2rem",
    },

    titleStyle: {
      mr: 1,
      ml: 3,
      [muiTheme.breakpoints.down("smallphones")]: {
        mr: 0,
        ml: 0,
      },
    },

    descriptionStyles: {
      mr: 3,
      ml: 3,
      [muiTheme.breakpoints.down("smallphones")]: {
        mr: 0,
        ml: 0,
      },
    },

    mapSlug: {
      mr: 3,
      ml: 3,
      [muiTheme.breakpoints.down("smallphones")]: {
        mr: 0,
        ml: 0,
      },
    },

    contentContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      p: "5%",
      maxWidth: "80%",
      [muiTheme.breakpoints.down("sm")]: {
        p: "1%",
        mt: "2rem",
      },
      [muiTheme.breakpoints.down("smallphones")]: {
        p: "0%",
        mt: "2rem",
        ml: "1rem",
      },
    },
    propertySimilarCardsPos: {},
    paymentPlanPos: {
      mr: 3,
      ml: 3,
      [muiTheme.breakpoints.down("smallphones")]: {
        mr: 0,
        ml: 0,
      },
    },
    featuresSlugPos: {
      mr: 3,
      ml: 3,
      [muiTheme.breakpoints.down("smallphones")]: {
        mr: 0,
        ml: 0,
      },
    },

    lifeBoxStyles: {
      mr: 3,
      ml: 3,
      [muiTheme.breakpoints.down("smallphones")]: {
        mr: 0,
        ml: 0,
      },
    },
  };
};
