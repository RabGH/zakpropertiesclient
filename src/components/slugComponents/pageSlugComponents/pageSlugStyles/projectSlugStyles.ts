import { useTheme } from "@mui/material";

export const getProjectPageStyles = () => {
  const muiTheme = useTheme();

  return {
    mainSection: {
      display: "flex",
      m: "0 auto",
      mt: "3rem",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      pl: "20%",
      pr: "20%",
      "@media (max-width: 768px)": {
        pl: "10%",
        pr: "10%",
      },
      "@media (max-width: 641px)": {
        pl: "5%",
        pr: "5%",
      },
      "@media (max-width: 600px)": {
        pl: "2%",
        pr: "2%",
      },
      "@media (max-width: 481px)": {
        pl: "1%",
        pr: "1%",
      },
    },

    titleStyle: {
      m: "1rem",
    },

    descriptionStyles: {
      m: "1rem",
      mb: "2rem",
      fontSize: "1.2rem",
    },
    projectInfoTitleStyles: {},

    projectInfoStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      pl: "20%",
      pr: "20%",
      "@media (max-width: 768px)": {
        pl: "10%",
        pr: "10%",
      },
      "@media (max-width: 641px)": {
        pl: "5%",
        pr: "5%",
      },
      "@media (max-width: 600px)": {
        pl: "2%",
        pr: "2%",
      },
      "@media (max-width: 481px)": {
        pl: "1%",
        pr: "1%",
      },
    },

    projectPriceStyles: {
      m: 1,
    },
    projectBedroomStyles: {
      m: 1,
    },
    projectBuiltUpStyles: {
      m: 1,
    },
    projectNumFloorsStyles: {
      m: 1,
    },
    projectNumUnitsStyles: {
      m: 1,
    },
    projectNumOfHousesStyles: {
      m: 1,
    },
    projectPropertyTypesStyles: {
      m: 1,
    },
    lifeBoxStyles: {
      m: 1,
    },
    amenitiesSlugPos: {
      m: 1,
      "@media (max-width: 481px)": {},
    },
    projectLocationPos: {
      m: 1,
      "@media (max-width: 481px)": {},
    },

    projectPresentationBoxStyles: {
      display: "flex",
      m: "0 auto",
      mt: "3rem",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    projectPresentationTitleStyles: {
      m: 1,
      pl: "15%",
      pr: "15%",
      "@media (max-width: 768px)": {
        pl: "10%",
        pr: "10%",
      },
      "@media (max-width: 641px)": {
        pl: "5%",
        pr: "5%",
      },
      "@media (max-width: 600px)": {
        pl: "2%",
        pr: "2%",
      },
      "@media (max-width: 481px)": {
        pl: "1%",
        pr: "1%",
      },
    },
    presentationStyles: {
      m: 1,
      mt: "2rem",
      pl: "15%",
      pr: "15%",
      fontSize: "1.2rem",
      "@media (max-width: 768px)": {
        pl: "10%",
        pr: "10%",
      },
      "@media (max-width: 641px)": {
        pl: "5%",
        pr: "5%",
      },
      "@media (max-width: 600px)": {
        pl: "2%",
        pr: "2%",
      },
      "@media (max-width: 481px)": {
        pl: "1%",
        pr: "1%",
      },
    },

    projectPropertiesTitleStyles: {},

    buttonStyles: {
      "&:hover": {
        backgroundColor: muiTheme.palette.primary.light,
      },
      mb: "3rem",
      mt: "3rem",
    },

    projectPropertyItem: {
      scrollSnapAlign: "start",
      flexBasis: "33%",
    },

    projectPropertyContainer: {
      display: "flex",
      overflowX: "auto",
      whiteSpace: "nowrap",
      scrollSnapType: "x mandatory",
      p: "1%",
    },

    viewMoreProperties: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    dividerStyles: {
      width: "90%",
      mt: "0.5rem",
      mb: "0.5rem",
      "@media (max-width: 481px)": {
        mt: "1rem",
        mb: "1rem",
      },
    },
  };
};
