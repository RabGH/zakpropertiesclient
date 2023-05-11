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
    bedroomPopperStyles: {
      width: "800px",
      height: "500px",
      overflow: "visible",
    },
    bedroomSearchBoxStyles: {},
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
    sizePopperStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      p: "0.5rem",
      width: "320px",
      height: "200px",
      borderRadius: "8px",
      backgroundColor: muiTheme.palette.background.paper,
      border: "1px solid gray",
      zIndex: 9999,
    },
    sizeSearchBoxStyles: {},
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
      mb: 0.3,
    },
    sizeChipNumberStyles: {
      color: "white",
      backgroundColor: muiTheme.palette.grey[900],
    },
    sizeButtonStackStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      mt: "1rem",
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