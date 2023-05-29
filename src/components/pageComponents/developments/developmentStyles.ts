import { useTheme } from "@mui/material";

export const getDevelopmentStyles = () => {
  const muiTheme = useTheme();

  return {
    mainContainer: {
      height: "275vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    titleStyles: {
      fontWeight: "bold",
      mb: "1rem",
      mt: "5rem",
    },
    projectTitle: {
      fontWeight: "bold",
      mb: "0.5rem",
    },
    projectDesc: {
      mb: "1rem",
    },
    divider: {},
    contactButton: {
      mt: "2rem",
    },
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "45vh",
      minWidth: "45vh",
    },
    cardStyles: {
      position: "relative",
      width: 500,
      height: 340,
      boxShadow: "none",
      borderRadius: "10px",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      objectFit: "cover",
      zIndex: 1,
      padding: "2rem",
      mr: 2,
      ml: 2,
      "&:hover": {
        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
      },
    },
    imageBoxStyles: {
      "&::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        "&:hover": {
          boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
        },
      },
    },
    projectTypeStyles: {
      color: "rgba(255, 255, 255, 1)",
      paddingBottom: "0.7rem",
      fontWeight: "700",
    },
    projectTitleCard: {
      color: "white",
      paddingBottom: "0.7rem",
    },
    projectAreaCard: {
      color: "rgba(255, 255, 255, 1)",
      paddingBottom: "0.3rem",
      fontWeight: "700",
    },
    projectPriceCard: {
      color: "rgba(255, 255, 255, 1)",
      fontSize: "0.9rem",
      fontWeight: "700",
    },
    cardInfoStyles: {
      position: "absolute",
      top: 0,
      left: 0,
      padding: "1rem",
      color: "rgba(255, 255, 255, 1)",
      fontSize: "1.2rem",
      fontWeight: "700",
      zIndex: 2,
    },
    mainBox: {
      display: "flex",
      flexDirection: "row",
      mb: "2rem",
    },
  };
};
