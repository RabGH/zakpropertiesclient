import { useTheme } from "@mui/material";

export const getDeveloperCardStyles = () => {
  const muiTheme = useTheme();
  return {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    mainBox: {
      display: "flex",
      flexDirection: "row",
      mb: "2rem",
    },

    projectItemCardBoxStyles: {
      justifyContent: "center",
      // scrollSnapAlign: "start",
      flexShrink: 0,
      minWidth: "33%",
      mt: "1.5rem",
      scrollSnapAlign: "center",
    },

    projectContainerBoxStyles: {
      display: "flex",
      width: "100%",
      overflowX: "auto",
      whiteSpace: "nowrap",
    },

    cardStyles: {
      position: "relative",
      width: 275,
      height: 200,
      borderRadius: "3%",
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      objectFit: "cover",
      zIndex: 1,
      backgroundColor: "white",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      "&:hover": {
        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
        transform: "scale(1.02)",
      },
      [muiTheme.breakpoints.down("xl")]: {
        width: 235,
        height: 180,
      },
      [muiTheme.breakpoints.down("smallphones")]: {
        width: 215,
        height: 160,
      },
      [muiTheme.breakpoints.down("xs")]: {
        width: 190,
        height: 140,
      },
    },

    projectTitleCard: {
      display: "flex",
      justifyContent: "center",
    },

    imageBoxStyles: {},

    cardInfoStyles: {},
  };
};
