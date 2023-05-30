import { useTheme } from "@mui/material";

export const getDevelopmentStyles = () => {
  const muiTheme = useTheme();
  return {
    mainContainer: {
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
      mt: "10rem",
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
      mt: "3rem",
      mb: "3rem",
    },
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    cardStyles: {
      position: "relative",
      width: 360,
      height: 350,
      boxShadow: "none",
      borderRadius: "10px",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      objectFit: "cover",
      zIndex: 1,
      padding: "2rem",
      "&:hover": {
        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
        transform: "scale(1.05)",
      },
      "@media (max-width: 600px)": {
        width: 345,
      },
      "@media (max-width: 400px)": {
        width: 340,
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
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))",
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
      color: muiTheme.palette.primary.main,
      paddingBottom: "0.7rem",
      fontSize: muiTheme.typography.h5.fontSize,
    },
    projectAreaCard: {
      color: "rgba(255, 255, 255, 1)",
      paddingBottom: "0.3rem",
      fontWeight: "700",
    },
    projectPriceCard: {
      color: muiTheme.palette.secondary.main,
      fontSize: muiTheme.typography.h6.fontSize,
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
