import { useState } from "react";
import {
  Button,
  ButtonGroup,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { ReadyToBuyBubbleProps } from "./bubbleInterfaces";

export default function ReadyToBuyBubble({
  search,
  setSearch,
  properties,
  setFilteredProperties,
}: ReadyToBuyBubbleProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState<string>("Any");

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    let filteredProperties = properties;
    let updatedSearch = { ...search };

    if (option === "Any") {
      updatedSearch.filteredProperties = properties;
      filteredProperties = properties.filter(
        (property) => !property.propertyOffPlan?.offplan
      );
    } else {
      updatedSearch.propertyOffPlan = option === "Off-Plan";
      if (option === "Off-Plan") {
        filteredProperties = properties.filter(
          (property) =>
            property.propertyOffPlan?.offplan ??
            property.propertyOffPlan === undefined
        );
      } else if (option === "Ready to Buy") {
        filteredProperties = properties.filter(
          (property) => !property.propertyOffPlan?.offplan
        );
      }
    }

    setSearch(updatedSearch);
    setFilteredProperties(filteredProperties);
    handleMenuClose();
  };

  return (
    <ButtonGroup variant="outlined" aria-label="ready to buy dropdown">
      <Button onClick={handleButtonClick}>{selectedOption}</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleOptionSelect("Any")}>
          <ListItemText primary="Any" />
        </MenuItem>
        <MenuItem onClick={() => handleOptionSelect("Ready to Buy")}>
          <ListItemText primary="Ready to Buy" />
        </MenuItem>
        <MenuItem onClick={() => handleOptionSelect("Off-Plan")}>
          <ListItemText primary="Off-Plan" />
        </MenuItem>
      </Menu>
    </ButtonGroup>
  );
}
