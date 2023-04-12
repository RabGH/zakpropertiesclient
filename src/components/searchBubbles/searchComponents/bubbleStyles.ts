import { useTheme } from "@mui/material";

export const getBubbleStyles = () => {
  const muiTheme = useTheme();

  return {
    // SearchFieldBubbles.tsx Styles
    mainSearchFieldStack: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: muiTheme.palette.success.main,
    },
    searchButtonBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      m: "2rem",
    },
    searchResultsButton: {},
    searchFieldMainBox: {},

    // BedroomBubble.tsx Styles
    bedroomButtonStyles: {},
    bedroomPopperStyles: {
      width: "300px",
      height: "300px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: muiTheme.palette.background.paper,
    },
    bedroomSearchBoxStyles: {},
    bedroomSliderStyles: {
      width: "250px",
      color: muiTheme.palette.secondary.main,
    },
    bedroomButtonStackStyles: {},
    bedroomApplyButtonStyles: {},
    bedroomResetButtonStyles: {},

    // FeatureBubble.tsx Styles
    featureButtonGroupStyles: {},
    featureButtonStyles: {},
    featureMenuStyles: {},

    // PriceRangeBubble.tsx Styles
    priceButtonStyles: {},
    pricePopperStyles: {
      width: "300px",
      height: "300px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: muiTheme.palette.background.paper,
    },
    priceSearchBoxStyles: {},
    priceSliderStyles: {
      width: "250px",
      color: muiTheme.palette.secondary.main,
    },
    priceStackTypographyStyles: {
      px: 2,
    },
    priceButtonStackStyles: {},
    priceApplyButtonStyles: {},
    priceResetButtonStyles: {},

    // PropertyTypeBubble.tsx Styles
    typeButtonGroupStyles: {},
    typeButtonStyles: {},
    typeMenuStyles: {},

    // ReadyToBuyBubble.tsx Styles
    readyButtonGroupStyles: {},
    readyButtonStyles: {},
    readyMenuStyles: {},

    // SizeBubble.tsx Styles
    sizeButtonStyles: {},
    sizePopperStyles: {
      width: "300px",
      height: "230px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: muiTheme.palette.background.paper,
    },
    sizeSearchBoxStyles: {},
    sizeSliderStyles: {
      width: "250px",
      color: muiTheme.palette.secondary.main,
    },
    sizeStackTypographyStyles: {
      p: 1,
    },
    sizeButtonStackStyles: {},
    sizeApplyButtonStyles: {},
    sizeResetButtonStyles: {},

    // General Bubble Styles
    generalBubbleStackStyles: {
      p: 2,
    },
  };
};
