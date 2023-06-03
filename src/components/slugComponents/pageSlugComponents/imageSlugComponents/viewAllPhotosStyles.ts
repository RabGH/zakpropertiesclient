import { useTheme } from "@mui/material";

export const getViewAllPhotosStyles = () => {
  const theme = useTheme();
  return {
    viewAllPhotosButton: {
      textTransform: "none",
    },

    modalBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 9999,
      overflow: "hidden",
    },

    imageBox: {
      position: "relative",
      width: "100%",
      height: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    leftArrowButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      color: "white",
      zIndex: 1,
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
      left: 0,
      margin: 2,
    },

    rightArrowButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      color: "white",
      zIndex: 1,
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
      right: 0,
      margin: 2,
    },

    closeButton: {
      position: "absolute",
      top: 1,
      right: 1,
      zIndex: 1,
      color: "white",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    },

    mainModal: {
      zIndex: 9999,
    },
  };
};
