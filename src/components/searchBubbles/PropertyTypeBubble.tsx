import { useState } from "react";
import { Button, ButtonGroup, Menu, MenuItem, Stack } from "@mui/material";
import { PropertyTypeBubbleProps } from "./bubbleInterfaces";

const PropertyTypeBubble = ({
  handleSearch,
  search,
  setSearch,
}: PropertyTypeBubbleProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePropertyTypeChange = (propertyType: string) => {
    handleSearch(propertyType);
    setSearch((prevSearch) => ({ ...prevSearch, propertyType }));
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ p: 2, borderBottom: "1px solid #ccc", mb: "2rem" }}
    >
      <ButtonGroup variant="outlined" aria-label="property type dropdown">
        <Button onClick={handleClick}>{search.propertyType}</Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handlePropertyTypeChange("All")}>
            All
          </MenuItem>
          <MenuItem onClick={() => handlePropertyTypeChange("Villa")}>
            Villa
          </MenuItem>
          <MenuItem onClick={() => handlePropertyTypeChange("Townhouse")}>
            Townhouse
          </MenuItem>
          <MenuItem onClick={() => handlePropertyTypeChange("Apartment")}>
            Apartment
          </MenuItem>
          <MenuItem onClick={() => handlePropertyTypeChange("Penthouse")}>
            Penthouse
          </MenuItem>
          <MenuItem onClick={() => handlePropertyTypeChange("Loft & Duplex")}>
            Loft & Duplex
          </MenuItem>
          <MenuItem onClick={() => handlePropertyTypeChange("Plot")}>
            Plot
          </MenuItem>
        </Menu>
      </ButtonGroup>
    </Stack>
  );
};

export default PropertyTypeBubble;
