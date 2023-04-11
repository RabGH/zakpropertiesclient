import React, { useEffect, useState } from "react";
import { SizeBubbleProps } from "./bubbleInterfaces";
import { Button, Slider, Stack, Popper, Box } from "@mui/material";

const SizeBubble: React.FC<SizeBubbleProps> = ({
  handleSizeRange,
  sizeRange,
  search,
  setIsChanged,
  setSearch,
}) => {
  const [low, setLow] = useState<number>(sizeRange[0]);
  const [high, setHigh] = useState<number>(sizeRange[1]);
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const minSize = 0;
  const maxSize = 100000;

  const handleApply = () => {
    handleSizeRange([low, high]);
    setOpen(false);
    setIsChanged(true);
    setSearch((prev) => ({ ...prev, sizeRange: [low, high] }));
  };

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setLow(newValue[0]);
      setHigh(newValue[1]);
    }
  };

  const valueLabelFormat = (value: number) => {
    return `${value} sqft`;
  };

  const marks = [
    { value: 100000, label: "10000 sqft" },
    { value: 200000, label: "20000 sqft" },
    { value: 300000, label: "30000 sqft" },
    { value: 400000, label: "40000 sqft" },
    { value: 500000, label: "50000 sqft" },
    { value: 600000, label: "60000 sqft" },
    { value: 700000, label: "70000 sqft" },
    { value: 800000, label: "80000 sqft" },
    { value: 900000, label: "90000 sqft" },
    { value: 1000000, label: "100000 sqft" },
  ].filter((mark) => mark.value % 50000 === 0);

  const handleReset = () => {
    setLow(minSize);
    setHigh(maxSize);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (low !== sizeRange[0] || high !== sizeRange[1]) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [low, high, sizeRange, setIsChanged]);

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ p: 2, borderBottom: "1px solid #ccc", mb: "2rem" }}
    >
      <Button onClick={handleButtonClick} variant="outlined">
        Size Range: {valueLabelFormat(low)} - {valueLabelFormat(high)}
        {high === search.maxSize && "+"}
      </Button>
      <Popper open={open} anchorEl={anchorEl}>
        <Box>
          <Slider
            value={[low, high]}
            onChange={handleSliderChange}
            min={minSize}
            max={maxSize}
            step={1000}
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

export default SizeBubble;
