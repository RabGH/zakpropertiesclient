import { useTheme } from "@mui/material";

export const getProjectCardStyles = () => {
  const muiTheme = useTheme();
  return {
    //* ProjectCardScroll.tsx ProjectAllCards.tsx
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

    //* index.tsx position and scroll styles for home project cards
    homeProjectCardsPos: {
      display: "flex",
      width: "100%",
      overflowX: "auto",
      whiteSpace: "nowrap",
      scrollSnapType: "x mandatory",
      pl: "10rem",
      pr: "10rem",
      [muiTheme.breakpoints.down("xl")]: {
        pl: "6rem",
        pr: "6rem",
      },
      [muiTheme.breakpoints.down("lg")]: {
        pl: "3rem",
        pr: "3rem",
      },
      [muiTheme.breakpoints.down("md")]: {
        pl: "0rem",
        pr: "0rem",
      },
    },

    //* Information Box Under ProjectAddCards.tsx
    infoBoxStyles: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "1rem",
      backgroundColor: muiTheme.palette.primary.main,
    },

    projectInfoStyles: {
      mt: "1rem",
      ml: "1rem",
      mr: "1rem",
    },

    //* ProjectAllCards.tsx
    cardStyles: {
      position: "relative",
      width: 350,
      height: 500,
      boxShadow: "none",
      borderRadius: "1%",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      objectFit: "cover",
      zIndex: 1,
      padding: "2rem",
      ml: "1rem",
      mr: "1rem",
      "&:hover": {
        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
        transform: "scale(1.05)",
      },
      [muiTheme.breakpoints.down("xl")]: {
        width: 320,
      },
      [muiTheme.breakpoints.down("smallphones")]: {
        width: 290,
      },
      [muiTheme.breakpoints.down("xs")]: {
        width: 230,
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
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4))",
        "&:hover": {
          boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
        },
      },
    },

    cardInfoStyles: {},

    projectTitleCard: {
      position: "absolute",
      bottom: 0,
      zIndex: 2,
      mb: "2rem",
    },

    projectTypeStyles: {},

    projectCityStyles: {},
    projectAreaTypeStyles: {},
    projectBedroomsStyles: {},
    projectPriceCard: {},
  };
};
