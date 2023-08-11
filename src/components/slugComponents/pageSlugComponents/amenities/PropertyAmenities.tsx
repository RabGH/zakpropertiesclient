import { Box, Typography } from "@mui/material";
import {
  mainStyles,
  cardStyles,
  boxStyles,
  mainTitle,
} from "./amenitiesStyles";
import { PropertyAmenities } from "@lib/types";

interface AmenitiesSlugProps {
  propertyAmenities: PropertyAmenities;
}

const AmenitiesSlug = ({ propertyAmenities }: AmenitiesSlugProps) => {
  return (
    <Box sx={{ ...cardStyles, alignItems: "left" }}>
      <Typography variant="h3" sx={mainTitle}>
        {propertyAmenities?.name ?? "Amenities"}
      </Typography>
      <Box
        sx={{
          ...boxStyles,
          gridTemplateColumns: "repeat(3, 3fr)",
          justifyContent: "space-between",
          gridColumnGap: "3rem",
        }}
      >
        {propertyAmenities?.propertiesAmenities ? (
          propertyAmenities.propertiesAmenities.map((opt) => (
            <Typography key={opt} variant="body1" sx={mainStyles}>
              {opt}
            </Typography>
          ))
        ) : (
          <Typography variant="body1" sx={mainStyles}>
            No amenities available
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default AmenitiesSlug;
