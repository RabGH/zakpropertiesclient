import React, { useState } from "react";
import { PriceRangeBubbleProps } from "./bubbleInterfaces";
import {
  Button,
  Menu,
  MenuItem,
  Slider,
  Stack,
  Typography,
} from "@mui/material";

const PriceRangeBubble: React.FC<PriceRangeBubbleProps> = ({
  handlePriceRange,
  priceRange,
  minPrice,
  maxPrice,
  handleSearch,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [low, setLow] = useState<number>(priceRange[0]);
  const [high, setHigh] = useState<number>(priceRange[1]);

  const handleSubmit = () => {
    handleSearch([low, high]);
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setLow(newValue[0]);
      setHigh(newValue[1]);
    }
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ p: 2, borderBottom: "1px solid #ccc", mb: "2rem" }}
    >
      <Button onClick={handleClick}>Price Range</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem sx={{ minWidth: 300 }}>
          <Slider
            value={[low, high]}
            onChange={handleSliderChange}
            min={minPrice}
            max={maxPrice}
            valueLabelDisplay="auto"
            sx={{ my: 2 }}
          />
        </MenuItem>
        <MenuItem>
          <Button onClick={handleSubmit} variant="contained">
            Apply
          </Button>
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default PriceRangeBubble;
