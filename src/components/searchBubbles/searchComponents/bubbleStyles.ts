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
      mb: "2rem",
    },
    searchButtonBox: {
      p: "8px",
    },

    resultsTypography: {},

    // ResultsBubble.tsx Styles
    searchResultsButton: {},

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
      height: "180px",
      overflow: "visible",
      mt: "0.5rem",
      "@media (max-width: 600px)": {
        width: "885px",
        ml: "1.1rem",
      },
      "@media (max-width: 400px)": {
        width: "885px",
        ml: "1.1rem",
      },
    },
    bedroomMenuListStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      pt: "2rem",
      pr: "2rem",
      pl: "2rem",
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
      "@media (max-width: 600px)": {
        width: "885px",
        ml: "1.1rem",
      },
      "@media (max-width: 400px)": {
        width: "885px",
        ml: "1.1rem",
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
      "@media (max-width: 600px)": {
        width: "885px",
        ml: "1.1rem",
      },
      "@media (max-width: 400px)": {
        width: "885px",
        ml: "1.1rem",
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
    generalPopperBox: {},
  };
};
