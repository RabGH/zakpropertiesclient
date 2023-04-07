import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

interface PropertySearchBarProps {
  handleSearch: (propertyType: string) => void;
}

const PropertySearchBar = ({ handleSearch }: PropertySearchBarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedPropertyType, setSelectedPropertyType] =
    useState<string>("All");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePropertyTypeChange = (propertyType: string) => {
    setSelectedPropertyType(propertyType);
    handleSearch(propertyType);
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ p: 2, borderBottom: "1px solid #ccc" }}
    >
      <Typography variant="h6">Property Types:</Typography>
      <ButtonGroup variant="outlined" aria-label="property type dropdown">
        <Button onClick={handleClick}>{selectedPropertyType}</Button>
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

export default PropertySearchBar;
