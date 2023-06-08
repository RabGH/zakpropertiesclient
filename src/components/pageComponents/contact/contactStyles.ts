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
      mr: "35rem",
      "@media (max-width: 1024px)": {
        height: "80vh",
        pl: "18rem",
      },
      "@media (max-width: 768px)": {
        height: "90vh",
      },
      "@media (max-width: 480px)": {
        height: "95vh",
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
      ":-webkit-autofill": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
    },
    buttonBox: {
      display: "flex",
      flexDirection: "row",
      marginTop: "1rem",
    },
    sendButtonStyles: {
      marginTop: "1rem",
      mr: "1rem",
      fontWeight: "bold",
      "&:hover": {
        color: "#f5f5f5",
      },
    },
    resetButtonStyles: {
      marginTop: "1rem",
      ml: "1rem",
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
      "@media (max-width: 1024px)": {
        display: "none",
      },
      "@media (max-width: 600px)": {
        display: "none",
      },
      "@media (max-width: 400px)": {
        display: "none",
      },
    },

    imageStyles: {
      filter: "invert(100%)",
      "@media (max-width: 1440px)": {},
      "@media (max-width: 1280px)": {},
      "@media (max-width: 1024px)": {},
      "@media (max-width: 960px)": {},
      "@media (max-width: 768px)": {},
      "@media (max-width: 641px)": {},
      "@media (max-width: 600px)": {},
      "@media (max-width: 481px)": {},
      "@media (max-width: 400px)": {},
      "@media (max-width: 375px)": {},
      "@media (max-width: 360px)": {},
      "@media (max-width: 320px)": {},
    },

    formControl: {
      width: "100%",
    },
    snackbarStyles: {},
  };
};
