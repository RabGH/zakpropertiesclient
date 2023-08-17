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

  const handleAmenityChange = (amenity: string) => {
    const isSelected = search.propertyAmenities.includes(amenity);
    let updatedAmenities: string[];
    if (isSelected) {
      updatedAmenities = search.propertyAmenities.filter((a) => a !== amenity);
    } else {
      updatedAmenities = [...search.propertyAmenities, amenity];
    }
    setSearch((prevSearch) => ({
      ...prevSearch,
      propertyAmenities: updatedAmenities,
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
          Amenities {selectedCount > 0 ? `${selectedCount}` : " "}
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
              onClick={() => handleAmenityChange("Balcony")}
            >
              Balcony
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Built in Wardrobes")}
              onClick={() => handleAmenityChange("Built in Wardrobes")}
            >
              Built-in Wardrobes
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Pool")}
              onClick={() => handleAmenityChange("Pool")}
            >
              Pool
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Concierge Service")}
              onClick={() => handleAmenityChange("Concierge Service")}
            >
              Concierge Service
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Covered Parking")}
              onClick={() => handleAmenityChange("Covered Parking")}
            >
              Covered Parking
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes(
                "Fully Fitted Kitchen"
              )}
              onClick={() => handleAmenityChange("Fully Fitted Kitchen")}
            >
              Fully Fitted Kitchen
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Shared Gym")}
              onClick={() => handleAmenityChange("Shared Gym")}
            >
              Shared Gym
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Private Gym")}
              onClick={() => handleAmenityChange("Private Gym")}
            >
              Private Gym
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Security")}
              onClick={() => handleAmenityChange("Security")}
            >
              Security
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Spa")}
              onClick={() => handleAmenityChange("Spa")}
            >
              Spa
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Walk in Closet")}
              onClick={() => handleAmenityChange("Walk in Closet")}
            >
              Walk-in Closet
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Study")}
              onClick={() => handleAmenityChange("Study")}
            >
              Study
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Private Pool")}
              onClick={() => handleAmenityChange("Private Pool")}
            >
              Private Pool
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Private Garden")}
              onClick={() => handleAmenityChange("Private Garden")}
            >
              Private Garden
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Maid Service")}
              onClick={() => handleAmenityChange("Maid Service")}
            >
              Maid Service
            </MenuItem>
            <MenuItem
              selected={search.propertyAmenities.includes("Fireplace")}
              onClick={() => handleAmenityChange("Fireplace")}
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
