import React, { useEffect, useState } from "react";
import { BedroomBubbleProps } from "../searchComponents/bubbleInterfaces";
import { Button, Slider, Stack, Menu, Box, MenuList } from "@mui/material";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";

const BedroomBubble: React.FC<BedroomBubbleProps> = ({
  minBedrooms,
  maxBedrooms,
  search,
  setSearch,
}) => {
  const styles = getBubbleStyles();
  const [low, setLow] = useState<number>(minBedrooms);
  const [high, setHigh] = useState<number>(maxBedrooms);
  const [open, setOpen] = useState<boolean>(false);
  const buttonRef = React.useRef(null);

  useEffect(() => {
    setLow(search.bedrooms[0]);
    setHigh(search.bedrooms[1]);
  }, [search.bedrooms]);

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
          disablePortal={false}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
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
