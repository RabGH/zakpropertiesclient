import React, { useState } from "react";
import { Button, Popper, Slider, Stack, Typography, Box } from "@mui/material";
import { SizeBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";

const SizeBubble: React.FC<SizeBubbleProps> = ({
  handleSizeRange,
  sizeRange,
  search,
  setSearch,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [low, setLow] = useState<number>(sizeRange[0]);
  const [high, setHigh] = useState<number>(sizeRange[1]);
  const [buttonText, setButtonText] = useState<string>("Any");

  const styles = getBubbleStyles();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const minSize = 100;
  const maxSize = 100000;
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
    handleSizeRange([low, high]);
    setAnchorEl(null);
    if (low === search.sizeRange[0] && high === search.sizeRange[1]) {
      setButtonText("Any");
    } else if (low === minSize && high === maxSize) {
      setButtonText("Any");
    } else {
      setButtonText("Custom");
    }
  };

  const handleReset = () => {
    setLow(search.sizeRange[0]);
    setHigh(search.sizeRange[1]);
    setSearch((prevSearch) => ({
      ...prevSearch,
      sizeRange: [search.sizeRange[0], search.sizeRange[1]],
    }));
    setButtonText("Any");
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
        sx={styles.sizeButtonStyles}
      >
        Size Range: {buttonText}
      </Button>
      <Popper open={open} anchorEl={anchorEl} sx={styles.sizePopperStyles}>
        <Box sx={styles.sizeSearchBoxStyles}>
          <Slider
            value={[low, high]}
            onChange={handleSliderChange}
            min={minSize}
            max={maxSize}
            step={100}
            marks={marks}
            valueLabelDisplay="auto"
            valueLabelFormat={valueLabelFormat}
            sx={styles.sizeSliderStyles}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={styles.sizeStackTypographyStyles}
          >
            <Typography variant="body2">Min Size</Typography>
            <Typography variant="body2">{valueLabelFormat(low)}</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={styles.sizeStackTypographyStyles}
          >
            <Typography variant="body2">Max Size</Typography>
            <Typography variant="body2">{valueLabelFormat(high)}</Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={styles.sizeButtonStackStyles}>
            <Button
              onClick={handleApply}
              variant="contained"
              sx={styles.sizeApplyButtonStyles}
            >
              Apply
            </Button>
            <Button
              onClick={handleReset}
              variant="text"
              sx={styles.sizeResetButtonStyles}
            >
              Reset
            </Button>
          </Stack>
        </Box>
      </Popper>
    </Stack>
  );
};

export default SizeBubble;
