import { useTheme } from "@mui/material";

export const getDeveloperPageStyles = () => {
  const muiTheme = useTheme();

  return {
    buttonStyles: {
      "&:hover": {
        backgroundColor: muiTheme.palette.primary.light,
      },
      mb: "3rem",
      mt: "3rem",
    },

    dividerStyles: {
      width: "90%",
      mt: "5rem",
      mb: "1rem",
      [muiTheme.breakpoints.down("smallphones")]: {
        mt: "1rem",
        mb: "1rem",
      },
    },
    firstSection: {
      display: "flex",
      m: "0 auto",
      mt: "3rem",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      pl: "10%",
      pr: "10%",
      [muiTheme.breakpoints.down("lg")]: {
        pl: "0%",
        pr: "0%",
      },
    },

    rowWrap: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },

    secondSection: {
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
    logoBox: {},
    nameStyle: {
      mb: "1rem",
    },
    bodyContent: {},
    descriptionStyle: {
      fontSize: "1.2rem",
    },
    websiteLinkStyle: {},
    mainProjectBox: {},
    innerProjectBox: {},
    contactButton: {
      m: "1rem",
      mb: "2rem",
    },
  };
};
