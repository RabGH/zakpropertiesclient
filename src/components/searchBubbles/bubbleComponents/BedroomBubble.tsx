import React, { useEffect, useState } from "react";
import { BedroomBubbleProps } from "../searchComponents/bubbleInterfaces";
import { Button, Slider, Stack, Popover, Box } from "@mui/material";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";
const BedroomBubble: React.FC<BedroomBubbleProps> = ({
  handleBedroomRange,
  minBedrooms,
  maxBedrooms,
  search,
  setIsChanged,
  setSearch,
}) => {
  const styles = getBubbleStyles();
  const [low, setLow] = useState<number>(minBedrooms);
  const [high, setHigh] = useState<number>(maxBedrooms);
  const [open, setOpen] = useState<boolean>(false);

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
  };
  return (
    <Stack sx={styles.generalBubbleStackStyles}>
      <Button
        onClick={handleButtonClick}
        variant="contained"
        sx={styles.generalButtonStyles}
      >
        Bedrooms: {low} - {high}
        {high === maxBedrooms && "+"}
      </Button>
      <Box sx={styles.generalPopperBox}>
        <Popover
          open={open}
          onClose={() => setOpen(false)}
          anchorEl={document.getElementById("bedroom-button")}
          sx={styles.bedroomPopperStyles}
        >
          <Box sx={styles.bedroomSearchBoxStyles}>
            <Slider
              value={[low, high]}
              onChange={handleSliderChange}
              min={minBedrooms}
              max={maxBedrooms}
              step={1}
              marks={marks}
              valueLabelDisplay="auto"
              valueLabelFormat={valueLabelFormat}
              sx={styles.bedroomSliderStyles}
            />
            <Stack
              direction="row"
              spacing={2}
              sx={styles.bedroomButtonStackStyles}
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
        </Popover>
      </Box>
    </Stack>
  );
};

export default BedroomBubble;