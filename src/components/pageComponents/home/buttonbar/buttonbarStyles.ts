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
      gap: "0rem",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      [muiTheme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },

    btnGrpA: {},

    btnGrpB: {},

    buttonStyles: {
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "white",
      // fontWeight: "bold",
      textTransform: "capitalize",
      fontSize: { xs: "16px", sm: "18px", md: "20px" },
      m: "1rem",
      "&:hover": {
        color: muiTheme.palette.error.light,
        backgroundColor: "transparent",
        boxShadow: "none",
        textDecoration: "underline",
      },
    },
  };
};
