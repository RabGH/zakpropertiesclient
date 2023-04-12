import React, { useState } from "react";
import { Button, Popper, Slider, Stack, Typography, Box } from "@mui/material";
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
  const minPrice = 1000;
  const maxPrice = 1000000000;
  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleSliderChange = (
    event: Event,
    newValue: number | number[]
  ): void => {
    if (Array.isArray(newValue)) {
      setLow(newValue[0]);
      setHigh(newValue[1]);
    }
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
    setLow(search.priceRange[0]);
    setHigh(search.priceRange[1]);
    setSearch((prevSearch) => ({
      ...prevSearch,
      priceRange: [search.priceRange[0], search.priceRange[1]],
    }));
    setButtonText("Any");
  };

  const marks = [
    {
      value: minPrice,
      label: "1k",
    },
    {
      value: maxPrice,
      label: "1B",
    },
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
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={styles.generalBubbleStackStyles}
    >
      <Button
        onClick={handleButtonClick}
        variant="outlined"
        sx={styles.priceButtonStyles}
      >
        Price Range: {buttonText}
      </Button>
      <Popper open={open} anchorEl={anchorEl} sx={styles.pricePopperStyles}>
        <Box sx={styles.priceSearchBoxStyles}>
          <Slider
            value={[low, high]}
            onChange={handleSliderChange}
            min={minPrice}
            max={maxPrice}
            step={1000}
            marks={marks}
            valueLabelDisplay="auto"
            valueLabelFormat={valueLabelFormat}
            sx={styles.priceSliderStyles}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={styles.priceStackTypographyStyles}
          >
            <Typography variant="body2">Min Price</Typography>
            <Typography variant="body2">{valueLabelFormat(low)}</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={styles.priceStackTypographyStyles}
          >
            <Typography variant="body2">Max Price</Typography>
            <Typography variant="body2">{valueLabelFormat(high)}</Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={styles.priceButtonStackStyles}>
            <Button
              onClick={handleApply}
              variant="contained"
              sx={styles.priceApplyButtonStyles}
            >
              Apply
            </Button>
            <Button
              onClick={handleReset}
              variant="text"
              sx={styles.priceResetButtonStyles}
            >
              Reset
            </Button>
          </Stack>
        </Box>
      </Popper>
    </Stack>
  );
};

export default PriceRangeBubble;
