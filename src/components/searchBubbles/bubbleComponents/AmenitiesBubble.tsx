import React, { useState } from "react";
import { Box, Button, ButtonGroup, Menu, MenuItem, Stack } from "@mui/material";
import { AmenitiesBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";

const AmenitiesBubble = ({ search, setSearch }: AmenitiesBubbleProps) => {
  const styles = getBubbleStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFeatureChange = (feature: string) => {
    const isSelected = search.propertyAmenities.includes(feature);
    let updatedFeatures: string[];
    if (isSelected) {
      updatedFeatures = search.propertyAmenities.filter((f) => f !== feature);
    } else {
      updatedFeatures = [...search.propertyAmenities, feature];
    }
    setSearch((prevSearch) => ({
      ...prevSearch,
      propertyFeatures: updatedFeatures,
    }));
  };

  const selectedCount = search.propertyAmenities.length;

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
          Features {selectedCount > 0 ? `${selectedCount}` : " "}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={styles.featureMenuStyles}
          disableScrollLock
        >
          <Box sx={styles.featureMainMenuBoxStyles}>
            <MenuItem
              selected={search.propertyAmenities.includes("Balcony")}
              onClick={() => handleFeatureChange("Balcony")}
            >
              Balcony
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Built in Wardrobes")}
              onClick={() => handleFeatureChange("Built in Wardrobes")}
            >
              Built-in Wardrobes
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Pool")}
              onClick={() => handleFeatureChange("Pool")}
            >
              Pool
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Concierge Service")}
              onClick={() => handleFeatureChange("Concierge Service")}
            >
              Concierge Service
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Covered Parking")}
              onClick={() => handleFeatureChange("Covered Parking")}
            >
              Covered Parking
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes(
                "Fully Fitted Kitchen"
              )}
              onClick={() => handleFeatureChange("Fully Fitted Kitchen")}
            >
              Fully Fitted Kitchen
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Shared Gym")}
              onClick={() => handleFeatureChange("Shared Gym")}
            >
              Shared Gym
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Private Gym")}
              onClick={() => handleFeatureChange("Private Gym")}
            >
              Private Gym
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Security")}
              onClick={() => handleFeatureChange("Security")}
            >
              Security
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Spa")}
              onClick={() => handleFeatureChange("Spa")}
            >
              Spa
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Walk in Closet")}
              onClick={() => handleFeatureChange("Walk in Closet")}
            >
              Walk-in Closet
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Study")}
              onClick={() => handleFeatureChange("Study")}
            >
              Study
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Private Pool")}
              onClick={() => handleFeatureChange("Private Pool")}
            >
              Private Pool
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Private Garden")}
              onClick={() => handleFeatureChange("Private Garden")}
            >
              Private Garden
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Maid Service")}
              onClick={() => handleFeatureChange("Maid Service")}
            >
              Maid Service
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Fireplace")}
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

export default AmenitiesBubble;
