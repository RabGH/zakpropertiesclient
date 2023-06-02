import React, { useState } from "react";
import { Box, Button, Stack, Menu, ButtonGroup, MenuItem } from "@mui/material";
import { SortByBubbleProps } from "./searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";

const SortByBubble: React.FC<SortByBubbleProps> = ({ search, setSearch }) => {
  const styles = getBubbleStyles();
  const [buttonText, setButtonText] = useState<string>("Featured");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const buttonRef = React.useRef(null);

  const sortBy = (criterion: string) => {
    setAnchorEl(null);
    setButtonText(criterion);
    const filteredProperties = search.filteredProperties;
    console.log("Filtered properties:", filteredProperties);

    switch (criterion) {
      case "High Price":
        filteredProperties.sort((a, b) => b.totalPrice - a.totalPrice);
        break;
      case "Low Price":
        filteredProperties.sort((a, b) => a.totalPrice - b.totalPrice);
        break;
      case "Latest Property":
        filteredProperties.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "Oldest Property":
        filteredProperties.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
    }
    setSearch({ ...search, filteredProperties });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={styles.generalBubbleStackStyles}
    >
      <Button
        onClick={handleClick}
        variant="outlined"
        sx={styles.sortByButtonStyle}
        ref={buttonRef}
      >
        Sort By: {buttonText}
      </Button>
      <Box sx={styles.sortByMenuBoxStyles}>
        <ButtonGroup
          variant="outlined"
          aria-label="Sort By dropdown"
          sx={styles.sortByButtonGroupStyles}
        >
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={styles.sortByMenuStyles}
            disableScrollLock
          >
            <MenuItem onClick={() => sortBy("Featured")}>Featured</MenuItem>
            <MenuItem onClick={() => sortBy("High Price")}>High Price</MenuItem>
            <MenuItem onClick={() => sortBy("Low Price")}>Low Price</MenuItem>
            {/* <MenuItem onClick={() => sortBy("Latest Property")}>
              Latest Property
            </MenuItem>
            <MenuItem onClick={() => sortBy("Oldest Property")}>
              Oldest Property
            </MenuItem> */}
          </Menu>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};

export default SortByBubble;
