import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import { ReadyToBuyBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";

export default function ReadyToBuyBubble({
  search,
  setSearch,
}: ReadyToBuyBubbleProps) {
  const styles = getBubbleStyles();

  const handleButtonClick = (option: boolean | undefined) => {
    setSearch((prev) => ({ ...prev, propertyOffPlan: option }));
  };

  return (
    <ButtonGroup
      variant="contained"
      aria-label="ready to buy buttons"
      sx={styles.readyButtonGroupStyles}
    >
      <Button
        onClick={() => handleButtonClick(undefined)}
        sx={styles.readyButtonStyles}
        color={search.propertyOffPlan === undefined ? "primary" : "inherit"}
      >
        Any
      </Button>
      <Button
        onClick={() => handleButtonClick(false)}
        sx={styles.readyButtonStyles}
        color={search.propertyOffPlan === false ? "primary" : "inherit"}
      >
        Ready to Buy
      </Button>
      <Button
        onClick={() => handleButtonClick(true)}
        sx={styles.readyButtonStyles}
        color={search.propertyOffPlan === true ? "primary" : "inherit"}
      >
        Off-Plan
      </Button>
    </ButtonGroup>
  );
}
