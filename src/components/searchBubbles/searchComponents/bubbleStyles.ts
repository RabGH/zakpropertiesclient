import { useTheme } from "@mui/material";

export const getBubbleStyles = () => {
  const muiTheme = useTheme();

  return {
    // SearchFieldBubbles.tsx Styles
    mainSearchFieldStack: {},
    resultsSearchButton: {},

    // BedroomBubble.tsx Styles
    bedroomButtonStyles: {},
    bedroomPopperStyles: {},
    bedroomSearchBoxStyles: {},
    bedroomSliderStyles: {},
    bedroomButtonStackStyles: {},
    bedroomApplyButtonStyles: {},
    bedroomResetButtonStyles: {},

    // FeatureBubble.tsx Styles
    featureButtonGroupStyles: {},
    featureButtonStyles: {},
    featureMenuStyles: {},

    // PriceRangeBubble.tsx Styles
    priceButtonStyles: {},
    pricePopperStyles: {},
    priceSearchBoxStyles: {},
    priceSliderStyles: {},
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
    sizePopperStyles: {},
    sizeSearchBoxStyles: {},
    sizeSliderStyles: {},
    sizeStackTypographyStyles: {
      px: 2,
    },
    sizeButtonStackStyles: {},
    sizeApplyButtonStyles: {},
    sizeResetButtonStyles: {},

    // General Bubble Styles
    generalBubbleStackStyles: {
      p: 2,
      borderBottom: "1px solid #ccc",
      mb: "2rem",
    },
  };
};
