import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  MenuItem,
  Stack,
  Typography,
  Box,
  Menu,
  MenuList,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { SizeBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";

const SizeBubble: React.FC<SizeBubbleProps> = ({
  sizeRange,
  search,
  setSearch,
}) => {
  const styles = getBubbleStyles();
  const [low, setLow] = useState<number>(sizeRange[0]);
  const [high, setHigh] = useState<number>(sizeRange[1]);
  const [buttonText, setButtonText] = useState<string>(" ");
  const [open, setOpen] = useState<boolean>(false);
  const buttonRef = React.useRef(null);

  const [inputCount, setInputCount] = useState<number>(0);

  useEffect(() => {
    setLow(search.sizeRange[0]);
    setHigh(search.sizeRange[1]);
  }, [search.sizeRange]);

  useEffect(() => {
    const minSize = 0;
    const maxSize = 10000;
    let count = 0;
    if (search.sizeRange[0] > minSize) {
      count++;
    }
    if (search.sizeRange[1] < maxSize) {
      count++;
    }
    setInputCount(count);
  }, [search.sizeRange]);

  const minSize = 0;
  const maxSize = 10000;

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen((prev) => !prev);
  };

  const handleLowChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLow(Number(event.target.value));
    if (Number(event.target.value) > minSize) {
      setInputCount((prev) => Math.min(prev + 1, 2));
    } else {
      setInputCount((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleHighChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHigh(Number(event.target.value));
    if (Number(event.target.value) < maxSize) {
      setInputCount((prev) => Math.min(prev + 1, 2));
    } else {
      setInputCount((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleApply = () => {
    setSearch((prev) => ({ ...prev, sizeRange: [low, high] }));
    setOpen(false);
    if (inputCount === 0) {
      setButtonText(" ");
    } else {
      setButtonText(inputCount.toString());
    }
  };

  const handleClose = () => {
    setSearch((prev) => ({ ...prev, sizeRange: [low, high] }));
    setOpen(false);
    if (inputCount === 0) {
      setButtonText(" ");
    } else {
      setButtonText(inputCount.toString());
    }
  };

  const handleReset = () => {
    setLow(minSize);
    setHigh(maxSize);
    setSearch((prevSearch) => ({
      ...prevSearch,
      sizeRange: [minSize, maxSize],
    }));
    setButtonText(" ");
    setInputCount(0);
  };

  const sizeOptions = [
    1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
  ];

  return (
    <Stack sx={styles.generalBubbleStackStyles}>
      <Button
        onClick={handleButtonClick}
        variant="contained"
        sx={styles.generalButtonStyles}
        ref={buttonRef}
      >
        Size Range {buttonText}
      </Button>
      <Box sx={styles.generalPopperBox}>
        <Menu
          open={open}
          onClose={handleClose}
          anchorEl={buttonRef.current}
          sx={styles.sizeMenuStyles}
          disableScrollLock
        >
          <MenuList sx={styles.sizeMenuListStyles}>
            <Box sx={styles.sizeSearchBoxStyles}>
              <Stack
                direction="row"
                spacing={2}
                sx={styles.sizeSelectStackStyles}
              >
                <TextField
                  value={low}
                  onChange={handleLowChange}
                  inputProps={{ "aria-label": "Low size", "data-unit": "sqft" }}
                  sx={styles.sizeSelectStyles}
                  select
                  SelectProps={{
                    value: low,
                    displayEmpty: true,
                    inputProps: { "aria-label": "Low size" },
                    sx: styles.sizeSelectStyles,
                    MenuProps: {
                      anchorOrigin: { vertical: "bottom", horizontal: "left" },
                      transformOrigin: { vertical: "top", horizontal: "left" },
                      disableScrollLock: true,
                      sx: styles.sizeMenuPropStyles,
                      PaperProps: {
                        sx: styles.sizeMenuPaperStyles,
                      },
                    },
                  }}
                >
                  <MenuItem value={minSize}>Min</MenuItem>
                  {sizeOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option} sqft
                    </MenuItem>
                  ))}
                </TextField>
                <Typography variant="body1">to</Typography>
                <TextField
                  value={high}
                  onChange={handleHighChange}
                  inputProps={{
                    "aria-label": "High size",
                    "data-unit": "sqft",
                  }}
                  sx={styles.sizeSelectStyles}
                  select
                  SelectProps={{
                    value: high,
                    displayEmpty: true,
                    inputProps: { "aria-label": "High size" },
                    sx: styles.sizeSelectStyles,
                    MenuProps: {
                      anchorOrigin: { vertical: "bottom", horizontal: "left" },
                      transformOrigin: { vertical: "top", horizontal: "left" },
                      disableScrollLock: true,
                      sx: styles.sizeMenuPropStyles,
                      PaperProps: {
                        sx: styles.sizeMenuPaperStyles,
                      },
                    },
                  }}
                >
                  {sizeOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option} sqft
                    </MenuItem>
                  ))}
                  <MenuItem value={maxSize}>Max</MenuItem>
                </TextField>
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
            </Box>
          </MenuList>
        </Menu>
      </Box>
    </Stack>
  );
};

export default SizeBubble;
