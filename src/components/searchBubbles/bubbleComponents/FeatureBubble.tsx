import React, { useState } from "react";
import { Button, ButtonGroup, Menu, MenuItem, Stack } from "@mui/material";
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
        variant="outlined"
        aria-label="feature dropdown"
        sx={styles.featureButtonGroupStyles}
      >
        <Button onClick={handleClick} sx={styles.featureButtonStyles}>
          Features: {selectedCount > 0 ? `${selectedCount} selected` : "Any"}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={styles.featureMenuStyles}
        >
          <MenuItem onClick={() => handleFeatureChange("Balcony")}>
            Balcony
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Garden")}>
            Built-in wardrobes
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Pool")}>Pool</MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Garage")}>
            Concierge Service
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Fireplace")}>
            Covered Parking
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Fireplace")}>
            Equipped Kitchen
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Fireplace")}>
            Gym
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Fireplace")}>
            Private Gym
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Fireplace")}>
            Security
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Fireplace")}>
            Spa
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Fireplace")}>
            Walk-in Closet
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Fireplace")}>
            Study room
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Fireplace")}>
            Private Pool
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Fireplace")}>
            Private Garden
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Fireplace")}>
            Maid Service
          </MenuItem>
          <MenuItem onClick={() => handleFeatureChange("Fireplace")}>
            Fireplace
          </MenuItem>
          {/* add more features as you like */}
        </Menu>
      </ButtonGroup>
    </Stack>
  );
};

export default FeatureBubble;
