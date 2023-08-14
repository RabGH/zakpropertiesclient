import { useTheme } from "@mui/material";
export const getContactStyles = () => {
  const muiTheme = useTheme();
  return {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      height: "90vh",
      justifyContent: "center",
      alignItems: "center",
      [muiTheme.breakpoints.down("xl")]: {
        height: "90vh",
      },
      [muiTheme.breakpoints.down("lg")]: {
        height: "100vh",
      },
      [muiTheme.breakpoints.down("md")]: {
        height: "100vh",
      },
      [muiTheme.breakpoints.down("sm")]: {
        height: "100vh",
      },
      [muiTheme.breakpoints.down("xs")]: {
        height: "100vh",
      },
    },

    titleBox: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      mt: "4rem",
      [muiTheme.breakpoints.down("xl")]: {
        width: "87%",
      },
      [muiTheme.breakpoints.down("lg")]: {
        width: "100%",
      },
      [muiTheme.breakpoints.down("md")]: {
        width: "93%",
      },
      [muiTheme.breakpoints.down("sm")]: {
        width: "90%",
      },
      [muiTheme.breakpoints.down("xs")]: {
        width: "80%",
      },
    },

    contactGrid: {
      display: "flex",
      flexDirection: "row",
      mt: "2rem",
    },

    formBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    textField: {
      display: "flex",
      flexDirection: "row",
      marginBottom: "1rem",
    },

    contactField: {
      width: "50vw",
      [muiTheme.breakpoints.down("xl")]: {
        width: "40vw",
      },
      [muiTheme.breakpoints.down("lg")]: {
        width: "40vw",
      },
      [muiTheme.breakpoints.down("md")]: {
        width: "87vw",
      },
      [muiTheme.breakpoints.down("sm")]: {
        width: "80vw",
      },
      "& .MuiFilledInput-input": {
        color: muiTheme.palette.common.white,
      },
      "& .MuiFilledInput-root": {
        backgroundColor: muiTheme.palette.common.white,
      },
      "& input": {
        color: muiTheme.palette.common.white,
      },
      "& textarea": {
        color: muiTheme.palette.common.white,
      },
      "& .MuiOutlinedInput-root": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: muiTheme.palette.common.white,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: muiTheme.palette.grey[300],
        },
      },
      ":-webkit-autofill": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
    },
    buttonBox: {
      display: "flex",
      flexDirection: "row",
    },
    sendButtonStyles: {
      mt: "1rem",
      mr: "1rem",
      mb: "1rem",
      fontWeight: "bold",
      "&:hover": {
        color: "#f5f5f5",
      },
    },
    resetButtonStyles: {
      mt: "1rem",
      ml: "1rem",
      mb: "1rem",
      fontWeight: "bold",
      "&:hover": {
        color: "#f5f5f5",
      },
    },

    imgGrid: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    logoStyles: {
      [muiTheme.breakpoints.down("md")]: {
        display: "none",
      },
    },

    imageStyles: {
      filter: "invert(100%)",
      maxWidth: "100%",
    },

    formControl: {
      width: "100%",
    },
    snackbarStyles: {},
  };
};
