import { useTheme } from "@mui/material";

export const getButtonbarStyles = () => {
  const muiTheme = useTheme();
  return {
    buttonBarWrapper: {
      position: "absolute",
      top: "100%",
      left: "0",
      right: "0",
      zIndex: "9999",
      flex: 1,
    },

    mainBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    mainButtonContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "3rem",
      mb: "1rem",
    },

    developerButtonStyles: {
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "white",
      // textDecoration: "underline",
      // fontWeight: "bold",
      textTransform: "capitalize",
      fontSize: "22px",
      margin: "0 0px",
      "&:hover": {
        color: muiTheme.palette.error.light,
        backgroundColor: "transparent",
        boxShadow: "none",
        textDecoration: "none",
      },
      [muiTheme.breakpoints.down("sm")]: {
        fontSize: "1.3rem",
      },
      [muiTheme.breakpoints.down("xs")]: {
        mb: "0.7rem",
        fontSize: "1.2rem",
      },
    },

    developmentButtonStyles: {
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "white",
      // textDecoration: "underline",
      // fontWeight: "bold",
      textTransform: "capitalize",
      fontSize: "22px",
      margin: "0 0px",
      "&:hover": {
        color: muiTheme.palette.error.light,
        backgroundColor: "transparent",
        boxShadow: "none",
        textDecoration: "none",
      },
      [muiTheme.breakpoints.down("sm")]: {
        fontSize: "1.3rem",
      },
      [muiTheme.breakpoints.down("xs")]: {
        mb: "0.7rem",
        fontSize: "1.2rem",
      },
    },

    projectButtonStyles: {
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "white",
      // textDecoration: "underline",
      // fontWeight: "bold",
      textTransform: "capitalize",
      fontSize: "22px",
      margin: "0 0px",
      "&:hover": {
        color: muiTheme.palette.error.light,
        backgroundColor: "transparent",
        boxShadow: "none",
        textDecoration: "none",
      },
      [muiTheme.breakpoints.down("sm")]: {
        fontSize: "1.3rem",
      },
      [muiTheme.breakpoints.down("xs")]: {
        mb: "0.7rem",
        fontSize: "1.2rem",
      },
    },

    propertiesButtonStyles: {
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "white",
      // textDecoration: "underline",
      // fontWeight: "bold",
      textTransform: "capitalize",
      fontSize: "22px",
      margin: "0 0px",
      "&:hover": {
        color: muiTheme.palette.error.light,
        backgroundColor: "transparent",
        boxShadow: "none",
        textDecoration: "none",
      },
      [muiTheme.breakpoints.down("sm")]: {
        fontSize: "1.3rem",
      },
      [muiTheme.breakpoints.down("xs")]: {
        mb: "0.7rem",
        fontSize: "1.2rem",
      },
    },
  };
};
