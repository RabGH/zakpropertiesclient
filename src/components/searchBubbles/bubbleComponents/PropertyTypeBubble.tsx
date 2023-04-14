import React, { useState } from "react";
import { Button, ButtonGroup, Menu, MenuItem, Stack } from "@mui/material";
import { PropertyTypeBubbleProps } from "../searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "../searchComponents/bubbleStyles";

const PropertyTypeBubble = ({
handleSearch,
search,
setSearch,
}: PropertyTypeBubbleProps) => {
const styles = getBubbleStyles();
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
sx={styles.generalBubbleStackStyles}
>
<ButtonGroup
variant="contained"
aria-label="property type dropdown"
sx={styles.typeButtonGroupStyles}
>
<Button onClick={handleClick} sx={styles.generalButtonStyles}>
{search.propertyType}
</Button>
<Menu
anchorEl={anchorEl}
open={Boolean(anchorEl)}
onClose={handleClose}
sx={styles.typeMenuStyles}
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
