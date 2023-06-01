import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Menu, MenuItem, Stack, Box } from "@mui/material";
import { PropertyTypeBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";
import ReadyToBuyBubble from "./ReadyToBuyBubble";

const PropertyTypeBubble = ({ search, setSearch }: PropertyTypeBubbleProps) => {
  const styles = getBubbleStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [readyToBuyOption, setReadyToBuyOption] = useState(search.readyToBuy);
  useEffect(() => {
    setReadyToBuyOption(search.readyToBuy);
  }, [search.readyToBuy]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePropertyTypeChange = (propertyType: string) => {
    let updatedTypes: string[];
    if (propertyType === "All") {
      updatedTypes = [];
    } else {
      const isSelected = search.propertyType.includes(propertyType);
      if (isSelected) {
        updatedTypes = search.propertyType.filter((t) => t !== propertyType);
      } else {
        updatedTypes = [...search.propertyType, propertyType];
      }
    }
    setSearch((prevSearch) => ({
      ...prevSearch,
      propertyType: updatedTypes,
    }));
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
        aria-label="property type dropdown"
        sx={styles.typeButtonGroupStyles}
      >
        <Button onClick={handleClick} sx={styles.generalButtonStyles}>
          Types:{" "}
          {search.propertyType.length > 0 ? search.propertyType.length : "All"}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={styles.typeMenuStyles}
          disableScrollLock
        >
          <Box sx={styles.typeMainMenuBoxStyles}>
            <MenuItem
              onClick={() => handlePropertyTypeChange("All")}
              selected={search.propertyType.includes("All")}
            >
              All
            </MenuItem>
            <MenuItem
              onClick={() => handlePropertyTypeChange("Villa")}
              selected={search.propertyType.includes("Villa")}
            >
              Villa
            </MenuItem>
            <MenuItem
              onClick={() => handlePropertyTypeChange("Townhouse")}
              selected={search.propertyType.includes("Townhouse")}
            >
              Townhouse
            </MenuItem>
            <MenuItem
              onClick={() => handlePropertyTypeChange("Apartment")}
              selected={search.propertyType.includes("Apartment")}
            >
              Apartment
            </MenuItem>
            <MenuItem
              onClick={() => handlePropertyTypeChange("Penthouse")}
              selected={search.propertyType.includes("Penthouse")}
            >
              Penthouse
            </MenuItem>
            <MenuItem
              onClick={() => handlePropertyTypeChange("Loft & Duplex")}
              selected={search.propertyType.includes("Loft & Duplex")}
            >
              Loft & Duplex
            </MenuItem>
            <MenuItem onClick={() => handlePropertyTypeChange("Plot")}>
              Plot
            </MenuItem>
            <ReadyToBuyBubble
              search={search}
              setSearch={setSearch}
              readyToBuyOption={readyToBuyOption}
              setReadyToBuyOption={setReadyToBuyOption}
            />
          </Box>
        </Menu>
      </ButtonGroup>
    </Stack>
  );
};

export default PropertyTypeBubble;

{
  /* <Button onClick={handleClick} sx={styles.generalButtonStyles}>
Types:{" "}
{search.propertyType.length > 0
? search.propertyType.join(" ")
: "All"}
</Button> */
}
