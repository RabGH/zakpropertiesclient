import { useState } from "react";
import {
  Button,
  ButtonGroup,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { ReadyToBuyBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";

export default function ReadyToBuyBubble({
  readyToBuyOption,
  setReadyToBuyOption,
}: ReadyToBuyBubbleProps) {
  const styles = getBubbleStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: string) => {
    setReadyToBuyOption(option);
    handleMenuClose();
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={styles.generalBubbleStackStyles}
    >
      <ButtonGroup
        variant="contained"
        aria-label="ready to buy dropdown"
        sx={styles.readyButtonGroupStyles}
      >
        <Button onClick={handleButtonClick} sx={styles.generalButtonStyles}>
          {readyToBuyOption}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={styles.readyMenuStyles}
        >
          <MenuItem onClick={() => handleMenuItemClick("Any")}>
            <ListItemText primary="Any" />
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Ready to Buy")}>
            <ListItemText primary="Ready to Buy" />
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Off-Plan")}>
            <ListItemText primary="Off-Plan" />
          </MenuItem>
        </Menu>
      </ButtonGroup>
    </Stack>
  );
}
