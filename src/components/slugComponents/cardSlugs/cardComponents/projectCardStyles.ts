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
      scrollSnapAlign: "start",
      flexShrink: 0,
      minWidth: "33%",
      mt: "1.5rem",
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
      alignItems: "center",
      width: "100%",
      overflowX: "auto",
      whiteSpace: "nowrap",
      scrollSnapType: "x mandatory",
      ml: "20rem",
      "@media (max-width: 1440px)": {
        ml: 0,
      },
      "@media (max-width: 1280px)": {
        ml: 0,
      },
      "@media (max-width: 1024px)": {
        ml: "0rem",
      },
      "@media (max-width: 960px)": {},
      "@media (max-width: 768px)": {},
      "@media (max-width: 641px)": {},
      "@media (max-width: 600px)": {},

      "@media (max-width: 481px)": {
        ml: 0,
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
      "@media (max-width: 1440px)": {
        width: 320,
      },
      "@media (max-width: 400px)": {
        width: 290,
      },
      "@media (max-width: 375px)": {
        width: 285,
      },
      "@media (max-width: 360px)": {
        width: 270,
      },
      "@media (max-width: 320px)": {
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
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))",
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
