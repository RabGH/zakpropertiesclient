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
      [muiTheme.breakpoints.down("lg")]: {
        pl: "10%",
        pr: "10%",
      },
      [muiTheme.breakpoints.down("md")]: {
        pl: "5%",
        pr: "5%",
      },
      [muiTheme.breakpoints.down("sm")]: {
        pl: "2%",
        pr: "2%",
      },
      [muiTheme.breakpoints.down("smallphones")]: {
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
      [muiTheme.breakpoints.down("lg")]: {
        pl: "10%",
        pr: "10%",
      },
      [muiTheme.breakpoints.down("md")]: {
        pl: "5%",
        pr: "5%",
      },
      [muiTheme.breakpoints.down("sm")]: {
        pl: "2%",
        pr: "2%",
      },
      [muiTheme.breakpoints.down("smallphones")]: {
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
    },
    projectLocationPos: {
      m: 1,
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
      [muiTheme.breakpoints.down("lg")]: {
        pl: "10%",
        pr: "10%",
      },
      [muiTheme.breakpoints.down("md")]: {
        pl: "5%",
        pr: "5%",
      },
      [muiTheme.breakpoints.down("sm")]: {
        pl: "2%",
        pr: "2%",
      },
      [muiTheme.breakpoints.down("smallphones")]: {
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
      [muiTheme.breakpoints.down("lg")]: {
        pl: "10%",
        pr: "10%",
      },
      [muiTheme.breakpoints.down("md")]: {
        pl: "5%",
        pr: "5%",
      },
      [muiTheme.breakpoints.down("sm")]: {
        pl: "2%",
        pr: "2%",
      },
      [muiTheme.breakpoints.down("smallphones")]: {
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
      p: "4.5%",
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
      [muiTheme.breakpoints.down("smallphones")]: {
        mt: "1rem",
        mb: "1rem",
      },
    },
  };
};
