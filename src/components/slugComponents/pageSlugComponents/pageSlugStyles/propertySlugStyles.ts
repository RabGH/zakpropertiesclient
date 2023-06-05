import { useTheme } from "@mui/material";

export const getPropertyPageStyles = () => {
  const muiTheme = useTheme();

  return {
    mainSection: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      m: "0 auto",
      "@media (max-width: 960px)": {},
      "@media (max-width: 481px)": {
        gridTemplateColumns: "1fr",
      },
    },

    propertyTypeStyles: {
      fontSize: "0.9rem",
      mb: "1.5rem",
      mt: "0.5rem",
      mr: 3,
      ml: 3,
      "@media (max-width: 481px)": {
        mr: 0,
        ml: 0,
      },
    },

    dividerStyles: {
      width: "100%",
      mt: "3rem",
      mb: "3rem",
      "@media (max-width: 481px)": {
        mt: "2rem",
        mb: "2rem",
      },
    },

    outterDividerStyles: {
      width: "50%",
      mb: "3rem",
      ml: "5%",
    },

    lifeStyles: {
      mt: "1rem",
    },

    lifeBoxStyles: {
      mr: 3,
      ml: 3,
      "@media (max-width: 481px)": {
        mr: 0,
        ml: 0,
      },
    },

    titleStyle: {
      mr: 1,
      ml: 3,
      "@media (max-width: 481px)": {
        mr: 0,
        ml: 0,
      },
    },

    descriptionStyles: {
      mr: 3,
      ml: 3,
      "@media (max-width: 481px)": {
        mr: 0,
        ml: 0,
      },
    },

    mapSlug: {
      mr: 3,
      ml: 3,
      "@media (max-width: 481px)": {
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
      "@media (max-width: 1440px)": {},
      "@media (max-width: 1280px)": {},
      "@media (max-width: 1024px)": {},
      "@media (max-width: 960px)": {},
      "@media (max-width: 768px)": {},
      "@media (max-width: 640px)": {
        p: "1%",
        mt: "2rem",
      },
      "@media (max-width: 600px)": {},
      "@media (max-width: 481px)": {
        p: "0%",
        mt: "2rem",
        ml: "1rem",
      },
      "@media (max-width: 400px)": {},
      "@media (max-width: 375px)": {},
      "@media (max-width: 360px)": {},
      "@media (max-width: 320px)": {},
    },
    propertySimilarCardsPos: {},
    featuresSlugPos: {
      mr: 3,
      ml: 3,
      "@media (max-width: 481px)": {
        mr: 0,
        ml: 0,
      },
    },
  };
};
