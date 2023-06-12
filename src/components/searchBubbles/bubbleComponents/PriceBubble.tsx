import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  MenuItem,
  Stack,
  Typography,
  Box,
  Menu,
  MenuList,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { PriceRangeBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";

const PriceRangeBubble: React.FC<PriceRangeBubbleProps> = ({
  priceRange,
  search,
  setSearch,
}) => {
  const styles = getBubbleStyles();
  const [low, setLow] = useState<number>(priceRange[0]);
  const [high, setHigh] = useState<number>(priceRange[1]);
  const [buttonText, setButtonText] = useState<string>(" ");
  const [open, setOpen] = useState<boolean>(false);
  const buttonRef = React.useRef(null);

  const [inputCount, setInputCount] = useState<number>(0);

  useEffect(() => {
    setLow(search.priceRange[0]);
    setHigh(search.priceRange[1]);
  }, [search.priceRange]);

  useEffect(() => {
    const minPrice = 0;
    const maxPrice = 500000000;
    let count = 0;
    if (search.priceRange[0] > minPrice) {
      count++;
    }
    if (search.priceRange[1] < maxPrice) {
      count++;
    }
    setInputCount(count);
  }, [search.priceRange]);

  const minPrice = 0;
  const maxPrice = 500000000;

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen((prev) => !prev);
  };

  const handleLowChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLow(Number(event.target.value));
    if (Number(event.target.value) > minPrice) {
      setInputCount((prev) => Math.min(prev + 1, 2));
    } else {
      setInputCount((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleHighChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHigh(Number(event.target.value));
    if (Number(event.target.value) < maxPrice) {
      setInputCount((prev) => Math.min(prev + 1, 2));
    } else {
      setInputCount((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleApply = () => {
    setSearch((prev) => ({ ...prev, priceRange: [low, high] }));
    setOpen(false);
    if (inputCount === 0) {
      setButtonText(" ");
    } else {
      setButtonText(inputCount.toString());
    }
  };

  const handleClose = () => {
    setSearch((prev) => ({ ...prev, priceRange: [low, high] }));
    setOpen(false);
    if (inputCount === 0) {
      setButtonText(" ");
    } else {
      setButtonText(inputCount.toString());
    }
  };

  const handleReset = () => {
    setLow(minPrice);
    setHigh(maxPrice);
    setSearch((prevSearch) => ({
      ...prevSearch,
      priceRange: [minPrice, maxPrice],
    }));
    setButtonText(" ");
    setInputCount(0);
  };

  const priceOptions = [
    1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000,
    9000000, 10000000, 15000000, 20000000, 25000000, 30000000, 35000000,
    40000000, 45000000, 50000000, 60000000, 70000000, 80000000, 90000000,
    100000000, 125000000, 150000000, 175000000, 200000000, 225000000, 250000000,
    275000000, 300000000, 325000000, 350000000, 375000000, 400000000, 425000000,
    450000000, 475000000, 500000000,
  ];

  const valueLabelFormat = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "AED",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
  };

  return (
    <Stack sx={styles.generalBubbleStackStyles}>
      <Button
        onClick={handleButtonClick}
        variant="contained"
        sx={styles.generalButtonStyles}
        ref={buttonRef}
      >
        Price Range {buttonText}
      </Button>
      <Box sx={styles.generalPopperBox}>
        <Menu
          open={open}
          onClose={handleClose}
          anchorEl={buttonRef.current}
          sx={styles.priceMenuStyles}
          disableScrollLock
        >
          <MenuList sx={styles.priceMenuListStyles}>
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
                      disableScrollLock: true,
                      sx: styles.priceMenuPropStyles,
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
                      disableScrollLock: true,
                      sx: styles.priceMenuPropStyles,
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
          </MenuList>
        </Menu>
      </Box>
    </Stack>
  );
};

export default PriceRangeBubble;
