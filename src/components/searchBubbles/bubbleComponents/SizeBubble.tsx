import React, { ChangeEvent, useRef, useState } from "react";
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
  const [buttonText, setButtonText] = useState<string>("Any");
  const [open, setOpen] = useState<boolean>(false);
  const buttonRef = React.useRef(null);

  const minSize = 0;
  const maxSize = 10000;

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen((prev) => !prev);
  };

  const handleLowChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLow(Number(event.target.value));
  };

  const handleHighChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHigh(Number(event.target.value));
  };

  const handleApply = () => {
    setSearch((prev) => ({ ...prev, sizeRange: [low, high] }));
    setOpen(false);
    if (low === search.sizeRange[0] && high === search.sizeRange[1]) {
      setButtonText("Any");
    } else if (low === minSize && high === maxSize) {
      setButtonText("Any");
    } else {
      setButtonText("Custom");
    }
  };

  const handleClose = () => {
    setSearch((prev) => ({ ...prev, sizeRange: [low, high] }));
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
    setLow(minSize);
    setHigh(maxSize);
    setSearch((prevSearch) => ({
      ...prevSearch,
      sizeRange: [minSize, maxSize],
    }));
    setButtonText("Any");
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
        Size Range: {buttonText}
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
