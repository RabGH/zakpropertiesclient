import React, { useEffect, useState } from "react";
import { BedroomBubbleProps } from "./bubbleInterfaces";
import { Button, Slider, Stack, Popper, Box } from "@mui/material";
const BedroomBubble: React.FC<BedroomBubbleProps> = ({
  handleBedroomRange,
  minBedrooms,
  maxBedrooms,
  search,
  setIsChanged,
  setSearch,
}) => {
  const [low, setLow] = useState<number>(minBedrooms);
  const [high, setHigh] = useState<number>(maxBedrooms);
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (low !== search.bedrooms[0] || high !== search.bedrooms[1]) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [low, high, search.bedrooms, setIsChanged]);
  const handleApply = () => {
    handleBedroomRange(low, high);
    setOpen(false);
    setSearch((prev) => ({ ...prev, bedrooms: [low, high] }));
  };

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setLow(newValue[0]);
      setHigh(newValue[1]);
    }
  };

  const valueLabelFormat = (value: number) => {
    return value === maxBedrooms ? `${value}+` : value;
  };
  const marks = [{ value: minBedrooms }, { value: maxBedrooms }];

  const handleReset = () => {
    setLow(1);
    setHigh(15);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
    setAnchorEl(event.currentTarget);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ p: 2, borderBottom: "1px solid #ccc", mb: "2rem" }}
    >
      <Button onClick={handleButtonClick} variant="outlined">
        Bedrooms: {low} - {high}
        {high === maxBedrooms && "+"}
      </Button>
      <Popper open={open} anchorEl={anchorEl}>
        <Box>
          <Slider
            value={[low, high]}
            onChange={handleSliderChange}
            min={minBedrooms}
            max={maxBedrooms}
            step={1}
            marks={marks}
            valueLabelDisplay="auto"
            valueLabelFormat={valueLabelFormat}
            sx={{ my: 2 }}
          />
          <Stack direction="row" spacing={2}>
            <Button onClick={handleApply} variant="contained">
              Apply
            </Button>
            <Button onClick={handleReset} variant="outlined">
              Reset
            </Button>
          </Stack>
        </Box>
      </Popper>
    </Stack>
  );
};

export default BedroomBubble;
