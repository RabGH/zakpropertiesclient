import { useTheme } from "@mui/material";

export const getSearchbarStyles = () => {
  const muiTheme = useTheme();
  return {
    autoSearchStyles: {
      width: "600px",
      flexGrow: 1,
      zIndex: 5,
      "& .MuiInputBase-input": {
        color: "black",
      },
      "& .MuiInputLabel-root": {
        color: "black",
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(30, 59, 114, 1)",
        borderWidth: "0px",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "& .MuiOutlinedInput-root": {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "black",
      },
      [muiTheme.breakpoints.down("lg")]: {
        width: "470px",
      },
      [muiTheme.breakpoints.down("md")]: {
        width: "370px",
      },
      [muiTheme.breakpoints.down("smallphones")]: {
        width: "300px",
      },
    },

    mainBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    autoTextField: {},

    propertiesButtonStyles: {
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "white",
      textDecoration: "underline",
      fontWeight: "bold",
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
      textDecoration: "underline",
      fontWeight: "bold",
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

    mainSearchContainer: {
      display: "flex",
    },

    mainButtonContainer: {
      display: "flex",
      flexDirection: "row",
      spaceBetween: "1rem",
      alignItems: "center",
      justifyContent: "center",
      mb: "1rem",
    },
  };
};
