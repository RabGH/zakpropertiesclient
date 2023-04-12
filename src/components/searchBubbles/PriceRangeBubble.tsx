import React, { useState } from "react";
import { Button, Popper, Slider, Stack, Typography, Box } from "@mui/material";
import { PriceRangeBubbleProps } from "./bubbleInterfaces";

const PriceRangeBubble: React.FC<PriceRangeBubbleProps> = ({
  handlePriceRange,
  priceRange,
  search,
  setIsChanged,
  setSearch,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [low, setLow] = useState<number>(priceRange[0]);
  const [high, setHigh] = useState<number>(priceRange[1]);
  const [buttonText, setButtonText] = useState<string>("Any");

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
    setIsChanged(low !== priceRange[0] || high !== priceRange[1]);
    if (low === search.priceRange[0] && high === search.priceRange[1]) {
      setButtonText("Any");
    } else {
      setButtonText("Selected");
    }
  };

  const handleReset = () => {
    setLow(search.priceRange[0]);
    setHigh(search.priceRange[1]);
    setSearch((prevSearch) => ({
      ...prevSearch,
      priceRange: [search.priceRange[0], search.priceRange[1]],
    }));
    setIsChanged(false);
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
      sx={{ p: 2, borderBottom: "1px solid #ccc", mb: "2rem" }}
    >
      <Button onClick={handleButtonClick} variant="outlined">
        Price Range: {buttonText}
      </Button>
      <Popper open={open} anchorEl={anchorEl}>
        <Box>
          <Slider
            value={[low, high]}
            onChange={handleSliderChange}
            min={minPrice}
            max={maxPrice}
            step={1000}
            marks={marks}
            valueLabelDisplay="auto"
            valueLabelFormat={valueLabelFormat}
          />
          <Stack direction="row" justifyContent="space-between" sx={{ px: 2 }}>
            <Typography variant="body2">Min Price</Typography>
            <Typography variant="body2">{valueLabelFormat(low)}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" sx={{ px: 2 }}>
            <Typography variant="body2">Max Price</Typography>
            <Typography variant="body2">{valueLabelFormat(high)}</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button onClick={handleApply} variant="contained">
              Apply
            </Button>
            <Button onClick={handleReset} variant="text">
              Reset
            </Button>
          </Stack>
        </Box>
      </Popper>
    </Stack>
  );
};

export default PriceRangeBubble;
