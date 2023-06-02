import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import { ReadyToBuyBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";
import { useRouter } from "next/router";

export default function ReadyToBuyBubble({ search }: ReadyToBuyBubbleProps) {
  const styles = getBubbleStyles();

  const router = useRouter();

  const handleButtonClick = (option: string) => {
    if (option === "Any") {
      router.push(
        {
          pathname: "/buyProperties",
          query: { ...router.query, propertyOffPlan: undefined },
        },
        undefined,
        { shallow: true }
      );
    } else if (option === "Off-Plan") {
      router.push(
        {
          pathname: "/buyProperties",
          query: { ...router.query, propertyOffPlan: true },
        },
        undefined,
        { shallow: true }
      );
    } else if (option === "Ready to Buy") {
      router.push(
        {
          pathname: "/buyProperties",
          query: { ...router.query, propertyOffPlan: false },
        },
        undefined,
        { shallow: true }
      );
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
