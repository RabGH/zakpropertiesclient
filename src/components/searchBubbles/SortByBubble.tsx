import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { SortByBubbleProps } from "./searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";

const SortByBubble: React.FC<SortByBubbleProps> = ({
  search,
  setSearch,
  latestProperty,
  oldestProperty,
  lowPrice,
  highPrice,
}) => {
  return <Box>SortByBubble</Box>;
};

export default SortByBubble;
