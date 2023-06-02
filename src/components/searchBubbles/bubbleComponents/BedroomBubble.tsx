import React, { useState } from "react";
import { Button, Stack, Box, Menu, MenuList, Slider } from "@mui/material";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";
import { useRouter } from "next/router";
import { BedroomBubbleProps } from "../searchComponents/bubbleInterfaces";

const BedroomBubble: React.FC<BedroomBubbleProps> = ({ bedroomRange, search, setSearch }) => {
  const styles = getBubbleStyles();
  const [low, setLow] = useState<number>(bedroomRange[0]);
  const [high, setHigh] = useState<number>(bedroomRange[1]);
  const [open, setOpen] = useState<boolean>(false);
  const buttonRef = React.useRef(null);

  const minBedrooms = 1;
  const maxBedrooms = 15;

  const handleApply = () => {
    setSearch((prev) => ({ ...prev, bedrooms: [low, high] }));
    setOpen(false);
  };

  const handleClose = () => {
    setSearch((prev) => ({ ...prev, bedrooms: [low, high] }));
    setOpen(false);
  };

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setLow(newValue[0]);
      setHigh(newValue[1]);
    }
  };

  const handleReset = () => {
    setLow(1);
    setHigh(15);
  };

  const valueLabelFormat = (value: number) => {
    return value === maxBedrooms ? `${value}+` : value;
  };
  const marks = [{ value: minBedrooms }, { value: maxBedrooms }];

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
  };
  return (
    <Stack sx={styles.generalBubbleStackStyles}>
      <Button
        onClick={handleButtonClick}
        variant="contained"
        sx={styles.generalButtonStyles}
        ref={buttonRef}
      >
        Bedrooms: {low} - {high}
        {high === maxBedrooms && "+"}
      </Button>
      <Box sx={styles.generalPopperBox}>
        <Menu
          open={open}
          onClose={handleClose}
          anchorEl={buttonRef.current}
          sx={styles.bedroomMenuStyles}
          disableScrollLock
        >
          <MenuList sx={styles.bedroomMenuListStyles}>
            <Slider
              value={[low, high]}
              onChange={handleSliderChange}
              min={minBedrooms}
              max={maxBedrooms}
              step={1}
              marks={marks}
              valueLabelDisplay="on"
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
          </MenuList>
        </Menu>
      </Box>
    </Stack>
  );
};

export default BedroomBubble;