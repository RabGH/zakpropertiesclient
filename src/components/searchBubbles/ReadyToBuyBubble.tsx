import { useState } from "react";
import {
  Button,
  ButtonGroup,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { ReadyToBuyBubbleProps } from "./bubbleInterfaces";

export default function ReadyToBuyBubble({
  readyToBuyOption,
  setReadyToBuyOption,
}: ReadyToBuyBubbleProps) {
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
      sx={{ p: 2, borderBottom: "1px solid #ccc", mb: "2rem" }}
    >
      <ButtonGroup variant="outlined" aria-label="ready to buy dropdown">
        <Button onClick={handleButtonClick}>{readyToBuyOption}</Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
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
