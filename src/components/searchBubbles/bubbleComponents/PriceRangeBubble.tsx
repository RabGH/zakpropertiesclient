import React, { ChangeEvent, useRef, useState } from "react";
import {
  Button,
  Popper,
  MenuItem,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { PriceRangeBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";

const PriceRangeBubble: React.FC<PriceRangeBubbleProps> = ({
  handlePriceRange,
  priceRange,
  search,
  setSearch,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [low, setLow] = useState<number>(priceRange[0]);
  const [high, setHigh] = useState<number>(priceRange[1]);
  const [buttonText, setButtonText] = useState<string>("Any");

  const styles = getBubbleStyles();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const minPrice = 0;
  const maxPrice = 1000000000;
  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleLowChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLow(Number(event.target.value));
  };

  const handleHighChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHigh(Number(event.target.value));
  };

  const handleApply = () => {
    handlePriceRange([low, high]);
    setAnchorEl(null);
    if (low === search.priceRange[0] && high === search.priceRange[1]) {
      setButtonText("Any");
    } else if (low === minPrice && high === maxPrice) {
      setButtonText("Any");
    } else {
      setButtonText("Custom");
    }
  };
  const handleReset = () => {
    setLow(minPrice);
    setHigh(maxPrice);
    setSearch((prevSearch) => ({
      ...prevSearch,
      priceRange: [minPrice, maxPrice],
    }));
    setButtonText("Any");
  };

  const priceOptions = [];
  let i = minPrice;
  while (i <= maxPrice) {
    priceOptions.push(i);
    if (i < 10000000) {
      i += 1000000; // add 1 million until 10 million
    } else if (i < 50000000) {
      i += 5000000; // add 5 million until 50 million
    } else if (i < 100000000) {
      i += 10000000; // add 10 million until 100 million
    } else if (i < 300000000) {
      i += 25000000; // add 25 million until 300 million
    } else {
      i += 50000000; // add 50 million until max
    }
  }

  const valueLabelFormat = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "AED",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
  };

  const inputRef = useRef(null);

  return (
    <Stack sx={styles.generalBubbleStackStyles}>
      <Button
        onClick={handleButtonClick}
        variant="contained"
        sx={styles.generalButtonStyles}
        ref={inputRef}
      >
        Price Range: {buttonText}
      </Button>
      <Box sx={styles.generalPopperBox}>
        <Popper open={open} anchorEl={anchorEl} sx={styles.pricePopperStyles}>
          <Box sx={styles.priceSearchBoxStyles}>
            <Stack
              direction="row"
              spacing={2}
              sx={styles.priceSelectStackStyles}
            >
              <TextField
                value={low}
                onChange={handleLowChange}
                inputProps={{ "aria-label": "Low price" }}
                sx={styles.priceSelectStyles}
                select
                SelectProps={{
                  value: low,
                  displayEmpty: true,
                  inputProps: { "aria-label": "Low price" },
                  sx: styles.priceSelectStyles,
                  MenuProps: {
                    anchorOrigin: { vertical: "bottom", horizontal: "left" },
                    transformOrigin: { vertical: "top", horizontal: "left" },
                    PaperProps: {
                      sx: styles.priceMenuPaperStyles,
                    },
                  },
                }}
              >
                <MenuItem value={minPrice}>Min</MenuItem>
                {priceOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {valueLabelFormat(option)}
                  </MenuItem>
                ))}
              </TextField>
              <Typography variant="body1">to</Typography>
              <TextField
                value={high}
                onChange={handleHighChange}
                inputProps={{ "aria-label": "Low price" }}
                sx={styles.priceSelectStyles}
                select
                SelectProps={{
                  value: high,
                  displayEmpty: true,
                  inputProps: { "aria-label": "Low price" },
                  sx: styles.priceSelectStyles,
                  MenuProps: {
                    anchorOrigin: { vertical: "bottom", horizontal: "left" },
                    transformOrigin: { vertical: "top", horizontal: "left" },
                    PaperProps: {
                      sx: styles.priceMenuPaperStyles,
                    },
                  },
                }}
              >
                {priceOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {valueLabelFormat(option)}
                  </MenuItem>
                ))}
                <MenuItem value={maxPrice}>Max</MenuItem>
              </TextField>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={styles.priceButtonStackStyles}
            >
              <Button
                onClick={handleApply}
                variant="contained"
                sx={styles.generalApplyButtonStyles}
              >
                Apply
              </Button>
              <Button
                onClick={handleReset}
                variant="text"
                sx={styles.generalResetButtonStyles}
              >
                Clear
              </Button>
            </Stack>
          </Box>
        </Popper>
      </Box>
    </Stack>
  );
};

export default PriceRangeBubble;
