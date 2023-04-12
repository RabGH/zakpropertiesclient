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
      height: "110px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: muiTheme.palette.background.paper,
    },
    bedroomSearchBoxStyles: {},
    bedroomSliderStyles: {
      width: "250px",
      color: muiTheme.palette.secondary.main,
    },
    bedroomButtonStackStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    bedroomApplyButtonStyles: {},
    bedroomResetButtonStyles: {},

    // FeatureBubble.tsx Styles
    featureButtonGroupStyles: {},
    featureButtonStyles: {},
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
    priceButtonStyles: {},
    pricePopperStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      p: "1rem",
      width: "305px",
      height: "190px",
      borderRadius: "8px",
      backgroundColor: muiTheme.palette.background.paper,
    },
    priceSearchBoxStyles: {},
    priceSliderStyles: {
      width: "250px",
    },
    priceStackTypographyStyles: {
      px: 2,
    },
    priceButtonStackStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      mt: "1rem",
    },
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
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      p: "1rem",
      width: "305px",
      height: "190px",
      borderRadius: "8px",
      backgroundColor: muiTheme.palette.background.paper,
    },
    sizeSearchBoxStyles: {},
    sizeSliderStyles: {
      width: "250px",
    },
    sizeStackTypographyStyles: {},
    sizeButtonStackStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      mt: "1rem",
    },
    sizeApplyButtonStyles: {},
    sizeResetButtonStyles: {},

    // General Bubble Styles
    generalBubbleStackStyles: {
      p: 2,
    },
  };
};
