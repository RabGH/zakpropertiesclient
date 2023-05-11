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
      backgroundColor: "#00000050",
      borderRadius: "15px",
      p: "0.5rem",
      boxShadow: "0px 0px 5px 0px #FFFFFF30",
    },
    searchButtonBox: {
      p: "8px",
    },
    searchResultsButton: {},

    // BedroomBubble.tsx Styles
    bedroomMenuStyles: {
      width: "500px",
      height: "180px",
      overflow: "visible",
      mt: "0.5rem",
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
    featureMenuStyles: {},
    featureMainMenuBoxStyles: {
      width: "315px",
      height: "215px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "repeat(4, 1fr)",
      gap: "8px",
    },

    // PriceRangeBubble.tsx Styles
    pricePopperStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      p: "0.5rem",
      width: "420px",
      height: "150px",
      borderRadius: "8px",
      backgroundColor: muiTheme.palette.background.paper,
      border: "1px solid gray",
    },
    priceSearchBoxStyles: {
      p: 1.5,
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
    typeMenuStyles: {},

    // ReadyToBuyBubble.tsx Styles
    readyButtonGroupStyles: {},
    readyMenuStyles: {},

    // SizeBubble.tsx Styles
    sizeMenuStyles: {
      width: "1000px",
      height: "1000px",
      overflow: "visible",
      mt: "0.5rem",
    },
    sizeMenuListStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      pt: "2rem",
      pr: "3rem",
      pl: "2.3rem",
    },
    sizeSliderStyles: {
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
    sizeStackChipStyles: {},
    sizeChipLabelStyles: {
      color: "white",
      backgroundColor: muiTheme.palette.grey[900],
      mb: "0.5rem",
    },
    sizeChipNumberStyles: {
      color: "white",
      backgroundColor: muiTheme.palette.grey[900],
    },
    sizeButtonStackStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      mt: "0.3rem",
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
      color: muiTheme.palette.grey[400],
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
