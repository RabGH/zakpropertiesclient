import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Stack,
  Grid,
} from "@mui/material";
import { FeatureBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";

const FeatureBubble = ({
  handleSearch,
  search,
  setSearch,
}: FeatureBubbleProps) => {
  const styles = getBubbleStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFeatureChange = (feature: string) => {
    const isSelected = search.propertyFeatures.includes(feature);
    let updatedFeatures: string[];
    if (isSelected) {
      updatedFeatures = search.propertyFeatures.filter((f) => f !== feature);
    } else {
      updatedFeatures = [...search.propertyFeatures, feature];
    }
    setSearch((prevSearch) => ({
      ...prevSearch,
      propertyFeatures: updatedFeatures,
    }));
    handleSearch(updatedFeatures);
  };

  const selectedCount = search.propertyFeatures.length;

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={styles.generalBubbleStackStyles}
    >
      <ButtonGroup
        variant="contained"
        aria-label="feature dropdown"
        sx={styles.featureButtonGroupStyles}
      >
        <Button onClick={handleClick} sx={styles.generalButtonStyles}>
          Features: {selectedCount > 0 ? `${selectedCount} selected` : "Any"}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={styles.featureMenuStyles}
        >
          <Box sx={styles.featureMainMenuBoxStyles}>
            <MenuItem
              selected={search.propertyFeatures.includes("Balcony")}
              onClick={() => handleFeatureChange("Balcony")}
            >
              Balcony
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Built in Wardrobes")}
              onClick={() => handleFeatureChange("Built in Wardrobes")}
            >
              Built-in Wardrobes
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Pool")}
              onClick={() => handleFeatureChange("Pool")}
            >
              Pool
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Concierge Service")}
              onClick={() => handleFeatureChange("Concierge Service")}
            >
              Concierge Service
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Covered Parking")}
              onClick={() => handleFeatureChange("Covered Parking")}
            >
              Covered Parking
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes(
                "Fully Fitted Kitchen"
              )}
              onClick={() => handleFeatureChange("Equipped Kitchen")}
            >
              Equipped Kitchen
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Shared Gym")}
              onClick={() => handleFeatureChange("Shared Gym")}
            >
              Shared Gym
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Private Gym")}
              onClick={() => handleFeatureChange("Private Gym")}
            >
              Private Gym
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Security")}
              onClick={() => handleFeatureChange("Security")}
            >
              Security
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Spa")}
              onClick={() => handleFeatureChange("Spa")}
            >
              Spa
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Walk in Closet")}
              onClick={() => handleFeatureChange("Walk in Closet")}
            >
              Walk-in Closet
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Study")}
              onClick={() => handleFeatureChange("Study")}
            >
              Study
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Private Pool")}
              onClick={() => handleFeatureChange("Private Pool")}
            >
              Private Pool
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Private Garden")}
              onClick={() => handleFeatureChange("Private Garden")}
            >
              Private Garden
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Maid Service")}
              onClick={() => handleFeatureChange("Maid Service")}
            >
              Maid Service
            </MenuItem>
            <MenuItem
              selected={search.propertyFeatures.includes("Fireplace")}
              onClick={() => handleFeatureChange("Fireplace")}
            >
              Fireplace
            </MenuItem>
            {/* add more features as you like */}
          </Box>
        </Menu>
      </ButtonGroup>
    </Stack>
  );
};

export default FeatureBubble;
