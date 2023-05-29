import { useTheme } from "@mui/material";
export const getContactStyles = () => {
  const muiTheme = useTheme();
  return {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      height: "75vh",
      justifyContent: "center",
      alignItems: "center",
      mt: "5rem",
      ml: "10rem",
      "@media (max-width: 1024px)": {
        height: "80vh",
        ml: "5rem",
      },
      "@media (max-width: 768px)": {
        height: "90vh",
        ml: "2rem",
      },
      "@media (max-width: 480px)": {
        height: "95vh",
        ml: "0rem",
      },
    },
    titleBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      justifyContent: "center",
      width: "70%",
      mb: "1rem",
      mr: "18rem",
      "@media (max-width: 1024px)": {
        mr: "10rem",
      },
      "@media (max-width: 768px)": {
        mr: "8rem",
      },
      "@media (max-width: 480px)": {
        mr: "5rem",
      },
    },
    contactGrid: {
      display: "flex",
      flexDirection: "row",
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
      "@media (max-width: 1024px)": {
        width: "40vw",
      },
      "@media (max-width: 768px)": {
        width: "50vw",
      },
      "@media (max-width: 480px)": {
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
    },
    buttonBox: {
      display: "flex",
      flexDirection: "row",
      marginTop: "1rem",
    },
    buttonStyles: {
      marginTop: "1rem",
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
      width: "30vw",
      height: "30vh",
    },
    formControl: {
      width: "100%",
    },
    snackbarStyles: {},
  };
};
