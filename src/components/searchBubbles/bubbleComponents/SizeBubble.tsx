import React, { useState } from "react";
import {
  Button,
  Popper,
  Slider,
  Stack,
  Menu,
  MenuList,
  Box,
  Chip,
} from "@mui/material";
import { SizeBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";

const SizeBubble: React.FC<SizeBubbleProps> = ({
  handleSizeRange,
  sizeRange,
  search,
  setSearch,
}) => {
  const styles = getBubbleStyles();
  const [low, setLow] = useState<number>(sizeRange[0]);
  const [high, setHigh] = useState<number>(sizeRange[1]);
  const [buttonText, setButtonText] = useState<string>("Any");
  const [open, setOpen] = useState<boolean>(false);

  const minSize = 100;
  const maxSize = 100000;

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
    setOpen(false);
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
    return value.toLocaleString("en-US", {
      style: "unit",
      unit: "meter",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
  };

  const marks = [
    { value: 0, label: "0" },
    { value: 50000, label: "50000" },
    { value: 100000, label: "100000" },
  ].filter((mark) => mark.value % 50000 === 0);

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen((prev) => !prev);
  };

  return (
    <Stack sx={styles.generalBubbleStackStyles}>
      <Button
        onClick={handleButtonClick}
        variant="contained"
        sx={styles.generalButtonStyles}
        id="size-button"
      >
        Size Range: {buttonText}
      </Button>
      <Box sx={styles.generalPopperBox}>
        <Menu
          open={open}
          onClose={() => setOpen(false)}
          anchorEl={document.getElementById("size-button")}
          sx={styles.sizeMenuStyles}
        >
          <MenuList sx={styles.sizeMenuListStyles}>
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
              sx={styles.sizeStackChipStyles}
            >
              <Chip
                label="Min Size"
                variant="filled"
                sx={styles.sizeChipLabelStyles}
              />
              <Chip
                label={valueLabelFormat(low)}
                variant="filled"
                sx={styles.sizeChipNumberStyles}
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={styles.sizeStackChipStyles}
            >
              <Chip
                label="Max Size"
                variant="filled"
                sx={styles.sizeChipLabelStyles}
              />
              <Chip
                label={valueLabelFormat(high)}
                variant="filled"
                sx={styles.sizeChipNumberStyles}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={styles.sizeButtonStackStyles}
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

export default SizeBubble;
