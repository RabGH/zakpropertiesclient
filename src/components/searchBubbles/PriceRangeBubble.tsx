import React, { useEffect, useState } from "react";
import { PriceRangeBubbleProps } from "./bubbleInterfaces";
import { Button, Slider, Stack, Popper, Box } from "@mui/material";

const PriceRangeBubble: React.FC<PriceRangeBubbleProps> = ({
  handlePriceRange,
  priceRange,
  search,
  setIsChanged,
  setSearch,
}) => {
  const [low, setLow] = useState<number>(priceRange[0]);
  const [high, setHigh] = useState<number>(priceRange[1]);
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleApply = () => {
    handlePriceRange([low, high]);
    setOpen(false);
    setIsChanged(true);
    setSearch((prev) => ({ ...prev, priceRange: [low, high] }));
  };

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setLow(Math.round(Math.pow(10, newValue[0])));
      setHigh(Math.round(Math.pow(10, newValue[1])));
    }
  };

  const valueLabelFormat = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "AED",
      maximumFractionDigits: 0,
    }).format(Math.pow(10, value));
  };

  const marks = [
    { value: 3, label: valueLabelFormat(3) },
    { value: 4, label: valueLabelFormat(4) },
    { value: 5, label: valueLabelFormat(5) },
    { value: 6, label: valueLabelFormat(6) },
    { value: 7, label: valueLabelFormat(7) },
    { value: 8, label: valueLabelFormat(8) },
    { value: 9, label: valueLabelFormat(9) },
  ];

  const handleReset = () => {
    setLow(10000);
    setHigh(1000000000);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (low !== priceRange[0] || high !== priceRange[1]) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [low, high, priceRange, setIsChanged]);

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ p: 2, borderBottom: "1px solid #ccc", mb: "2rem" }}
    >
      <Button onClick={handleButtonClick} variant="outlined">
        Price Range: {valueLabelFormat(Math.log10(low))} -{" "}
        {valueLabelFormat(Math.log10(high))}
        {high === search.maxPrice && "+"}
      </Button>
      <Popper open={open} anchorEl={anchorEl}>
        <Box>
          <Slider
            value={[Math.log10(low), Math.log10(high)]}
            onChange={handleSliderChange}
            min={3}
            max={9}
            step={0.01}
            marks={marks}
            valueLabelDisplay="auto"
            valueLabelFormat={valueLabelFormat}
          />
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
