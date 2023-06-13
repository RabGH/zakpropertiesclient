import { useTheme } from "@mui/material";

export const getBubbleStyles = () => {
  const muiTheme = useTheme();

  return {
    // SearchFieldBubbles.tsx Styles
    searchFieldMainBox: {},
    mainSearchFieldStack: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      p: "0.5rem",
      mb: "1rem",
    },

    searchButtonBox: {
      p: "8px",
    },

    // SortByBubble.tsx Styles
    sortByButtonStyle: {},
    sortByMenuBoxStyles: {},
    sortByMenuStyles: {
      position: "absolute",
    },
    sortByButtonGroupStyles: {},

    // ClearSelectionBubble.tsx Styles
    clearSelectionButtonStyles: {},

    // BedroomBubble.tsx Styles
    bedroomMenuStyles: {
      position: "absolute",
      width: "500px",
      height: "250px",
      overflow: "visible",
      mt: "0.5rem",
      top: "50%",
      left: "50%",
      transform: "translate(-120%, -85%)",
      "@media (max-width: 1440px)": {},
      "@media (max-width: 1280px)": {},
      "@media (max-width: 1024px)": {},
      "@media (max-width: 960px)": {},
      "@media (max-width: 768px)": {
        mt: 0,
        top: "10%",
        left: "35%",
        transform: "translate(-50%, -120%)",
      },
      "@media (max-width: 641px)": {},
      "@media (max-width: 600px)": {
        width: "450px",
      },
      "@media (max-width: 481px)": {
        width: "350px",
        top: "100%",
        left: "70%",
        transform: "translate(-100%, -100%)",
      },
      "@media (max-width: 400px)": {},
      "@media (max-width: 375px)": {
        width: "330px",
        top: "40%",
        left: "-15%",
        transform: "translate(-50%, -117%)",
      },
      "@media (max-width: 360px)": {},
      "@media (max-width: 320px)": {},
    },
    bedroomMenuListStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      pr: "2rem",
      pl: "2rem",
      pt: "2.5rem",
    },
    bedroomSliderStyles: {
      width: "250px",
      "& & .MuiSlider-valueLabel": {
        color: "white",
      },
      "& .MuiSlider-track": {
        backgroundImage: "linear-gradient(to right, white, gray)",
      },
      "& .MuiSlider-rail": {
        backgroundImage: "linear-gradient(to right, white, gray)",
      },
      "& .MuiSlider-thumb": {
        borderColor: "white",
      },
      "@media (max-width: 1440px)": {},
      "@media (max-width: 1280px)": {},
      "@media (max-width: 1024px)": {},
      "@media (max-width: 960px)": {},
      "@media (max-width: 768px)": {},
      "@media (max-width: 641px)": {},
      "@media (max-width: 600px)": {},
      "@media (max-width: 481px)": {},
      "@media (max-width: 400px)": {},
      "@media (max-width: 375px)": {
        width: "200px",
      },
      "@media (max-width: 360px)": {},
      "@media (max-width: 320px)": {},
    },
    bedroomButtonStackStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },

    // FeatureBubble.tsx Styles
    featureButtonGroupStyles: {},
    featureMenuStyles: {
      position: "absolute",
    },
    featureMainMenuBoxStyles: {
      width: "315px",
      height: "215px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "repeat(4, 1fr)",
      gap: "8px",
    },

    // PriceRangeBubble.tsx Styles
    priceMenuStyles: {
      position: "absolute",
      width: "1000px",
      height: "1000px",
      overflow: "visible",
      mt: "0.5rem",
      justifyContent: "center",
      "@media (max-width: 1440px)": {},
      "@media (max-width: 1280px)": {
        width: "950px",
      },
      "@media (max-width: 1024px)": {
        width: "700px",
      },
      "@media (max-width: 961px)": {
        width: "600px",
      },
      "@media (max-width: 912px)": {
        width: "600px",
      },
      "@media (max-width: 768px)": {
        top: "50%",
        right: "50%",
        transform: "translate(-5%, -51%)",
        width: "600px",
      },
      "@media (max-width: 600px)": {
        width: "550px",
      },
      "@media (max-width: 481px)": {
        width: "430px",
        top: "68%",
        left: "51%",
        transform: "translate(-50%, -50%)",
      },
      "@media (max-width: 400px)": {
        width: "435px",
      },
      "@media (max-width: 375px)": {
        width: "370px",
        top: "62%",
        left: "49%",
        transform: "translate(-50%, -50%)",
      },
      "@media (max-width: 360px)": {
        width: "345px",
      },
      "@media (max-width: 320px)": {
        width: "260px",
      },
    },
    priceMenuListStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    priceSearchBoxStyles: {
      pr: 2,
      pl: 2,
    },
    priceSelectStackStyles: {
      alignItems: "center",
    },
    priceSelectStyles: {
      width: "170px",
      "& .MuiInputLabel-root": {
        "&.Mui-focused": {
          color: muiTheme.palette.grey[400],
        },
        "&:hover": {
          color: muiTheme.palette.grey[300],
        },
      },
      "& .MuiSelect-select": {
        backgroundColor: muiTheme.palette.grey[500],
        borderRadius: "4px",
        "&:hover": {
          backgroundColor: muiTheme.palette.grey[600],
        },
        "&.Mui-focused": {
          backgroundColor: muiTheme.palette.grey[700],
        },
      },
      "& .MuiMenuItem-root": {
        color: muiTheme.palette.common.white,
        backgroundColor: muiTheme.palette.grey[800],
        "&.Mui-selected": {
          backgroundColor: muiTheme.palette.grey[700],
        },
        "&:hover": {
          backgroundColor: muiTheme.palette.grey[900],
        },
      },
      "@media (max-width: 1440px)": {},
      "@media (max-width: 1280px)": {},
      "@media (max-width: 1024px)": {},
      "@media (max-width: 960px)": {},
      "@media (max-width: 768px)": {},
      "@media (max-width: 641px)": {},
      "@media (max-width: 600px)": {},
      "@media (max-width: 481px)": {
        width: "150px",
      },
      "@media (max-width: 400px)": {},
      "@media (max-width: 375px)": {
        width: "130px",
      },
      "@media (max-width: 360px)": {},
      "@media (max-width: 320px)": {},
    },
    priceButtonStackStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      mt: "1rem",
    },
    priceMenuPaperStyles: {
      maxHeight: "400px",
      overflow: "auto",
      zIndex: 9999,
    },

    priceMenuPropStyles: {
      position: "absolute",
    },

    // PropertyTypeBubble.tsx Styles
    typeButtonGroupStyles: {},
    typeButtonStyles: {},
    typeMenuStyles: {
      position: "absolute",
    },
    typeReadyToBuyPos: {
      mt: "0.5rem",
    },
    typeMainMenuBoxStyles: {
      p: 2,
    },

    // ReadyToBuyBubble.tsx Styles
    readyButtonGroupStyles: {
      mt: 1,
    },
    readyMenuStyles: {},
    readyButtonStyles: {},

    // SizeBubble.tsx Styles
    sizeMenuStyles: {
      position: "absolute",
      width: "1000px",
      height: "1000px",
      overflow: "visible",
      mt: "0.5rem",
      justifyContent: "center",
      "@media (max-width: 1440px)": {},
      "@media (max-width: 1280px)": {
        width: "950px",
      },
      "@media (max-width: 1024px)": {
        width: "700px",
      },
      "@media (max-width: 961px)": {
        width: "600px",
      },
      "@media (max-width: 912px)": {
        width: "600px",
      },
      "@media (max-width: 768px)": {
        top: "50%",
        right: "50%",
        transform: "translate(-5%, -51%)",
        width: "600px",
      },
      "@media (max-width: 600px)": {
        width: "550px",
      },
      "@media (max-width: 481px)": {
        width: "430px",
        top: "68%",
        left: "51%",
        transform: "translate(-50%, -50%)",
      },
      "@media (max-width: 400px)": {
        width: "435px",
      },
      "@media (max-width: 375px)": {
        width: "370px",
        top: "62%",
        left: "49%",
        transform: "translate(-50%, -50%)",
      },
      "@media (max-width: 360px)": {
        width: "345px",
      },
      "@media (max-width: 320px)": {
        width: "260px",
      },
    },
    sizeMenuListStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    sizeSearchBoxStyles: {
      pr: 2,
      pl: 2,
    },
    sizeSelectStackStyles: {
      alignItems: "center",
    },
    sizeSelectStyles: {
      width: "170px",
      "& .MuiInputLabel-root": {
        "&.Mui-focused": {
          color: muiTheme.palette.grey[400],
        },
        "& :hover": {
          color: muiTheme.palette.grey[300],
        },
      },
      "& .MuiSelect-select": {
        backgroundColor: muiTheme.palette.grey[500],
        borderRadius: "4px",
        "& :hover": {
          backgroundColor: muiTheme.palette.grey[600],
        },
        "&.Mui-focused": {
          backgroundColor: muiTheme.palette.grey[700],
        },
      },
      "& .MuiMenuItem-root": {
        color: muiTheme.palette.common.white,
        backgroundColor: muiTheme.palette.grey[800],
        "&.Mui-selected": {
          backgroundColor: muiTheme.palette.grey[700],
        },
        "& :hover": {
          backgroundColor: muiTheme.palette.grey[900],
        },
      },
      "@media (max-width: 1440px)": {},
      "@media (max-width: 1280px)": {},
      "@media (max-width: 1024px)": {},
      "@media (max-width: 960px)": {},
      "@media (max-width: 768px)": {},
      "@media (max-width: 641px)": {},
      "@media (max-width: 600px)": {},
      "@media (max-width: 481px)": {
        width: "150px",
      },
      "@media (max-width: 400px)": {},
      "@media (max-width: 375px)": {
        width: "130px",
      },
      "@media (max-width: 360px)": {},
      "@media (max-width: 320px)": {},
    },
    sizeButtonStackStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      mt: "1rem",
    },
    sizeMenuPaperStyles: {
      maxHeight: "400px",
      overflow: "auto",
      zIndex: 9999,
    },

    sizeMenuPropStyles: {
      position: "absolute",
    },

    // General Bubble Styles
    generalBubbleStackStyles: {
      p: 1,
    },
    generalButtonStyles: {
      color: muiTheme.palette.common.white,
      backgroundColor: muiTheme.palette.grey[800],
      "&:hover": {
        backgroundColor: muiTheme.palette.grey[900],
      },
      position: "relative",
    },
    generalResetButtonStyles: {
      color: muiTheme.palette.grey[900],
    },
    generalApplyButtonStyles: {
      color: muiTheme.palette.common.white,
      backgroundColor: muiTheme.palette.grey[800],
      "&:hover": {
        backgroundColor: muiTheme.palette.grey[900],
      },
    },
    generalPopperBox: {
      display: "flex",
      position: "relative",
      alignItems: "center",
    },
  };
};
