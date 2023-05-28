import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Stack,
  Menu,
  ButtonGroup,
  MenuItem,
} from "@mui/material";
import { SortByBubbleProps } from "./searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";

const SortByBubble: React.FC<SortByBubbleProps> = ({
  search,
  setSearch,
  latestProperty,
  oldestProperty,
  lowPrice,
  highPrice,
}) => {
  const styles = getBubbleStyles();
  const [buttonText, setButtonText] = useState<string>("Any");
  const [open, setOpen] = useState<boolean>(false);
  const buttonRef = React.useRef(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen((prev) => !prev);
  };

  return (
    <Stack>
      <Button
        onClick={handleButtonClick}
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
            open={open}
            onClose={() => setOpen(false)}
            sx={styles.sortByMenuStyles}
            disableScrollLock
          >
            <MenuItem></MenuItem>
          </Menu>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};

export default SortByBubble;
