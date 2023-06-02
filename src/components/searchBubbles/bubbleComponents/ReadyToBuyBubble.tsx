import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import { ReadyToBuyBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";

export default function ReadyToBuyBubble({
  search,
  setSearch,
}: ReadyToBuyBubbleProps) {
  const styles = getBubbleStyles();

  const handleButtonClick = (option: string) => {
    if (option === "Any") {
      setSearch((prev) => ({ ...prev, propertyOffPlan: undefined }));
    } else if (option === "Off-Plan") {
      setSearch((prev) => ({ ...prev, propertyOffPlan: true }));
    } else if (option === "Ready to Buy") {
      setSearch((prev) => ({ ...prev, propertyOffPlan: false }));
    }
  };

  return (
    <ButtonGroup
      variant="contained"
      aria-label="ready to buy buttons"
      sx={styles.readyButtonGroupStyles}
    >
      <Button
        onClick={() => handleButtonClick("Any")}
        sx={styles.readyButtonStyles}
        color={search.propertyOffPlan === undefined ? "primary" : "inherit"}
      >
        Any
      </Button>
      <Button
        onClick={() => handleButtonClick("Ready to Buy")}
        sx={styles.readyButtonStyles}
        color={search.propertyOffPlan === false ? "primary" : "inherit"}
      >
        Ready to Buy
      </Button>
      <Button
        onClick={() => handleButtonClick("Off-Plan")}
        sx={styles.readyButtonStyles}
        color={search.propertyOffPlan === true ? "primary" : "inherit"}
      >
        Off-Plan
      </Button>
    </ButtonGroup>
  );
}