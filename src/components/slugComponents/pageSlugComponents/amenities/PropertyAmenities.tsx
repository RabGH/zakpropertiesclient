import { Box, Typography } from "@mui/material";
import { getAmenitiesStyles } from "./amenitiesStyles";
import { PropertyAmenities } from "@lib/types";

interface AmenitiesSlugProps {
  propertyAmenities: PropertyAmenities;
}

const AmenitiesSlug = ({ propertyAmenities }: AmenitiesSlugProps) => {
  const styles = getAmenitiesStyles();

  return (
    <Box sx={{ ...styles.cardStyles, alignItems: "left" }}>
      <Typography variant="h3" sx={styles.mainTitle}>
        {propertyAmenities?.name ?? "Amenities"}
      </Typography>
      <Box
        sx={{
          ...styles.boxStyles,
          gridTemplateColumns: "repeat(2, 2fr)",
          justifyContent: "space-between",
          gridColumnGap: "2rem",
        }}
      >
        {propertyAmenities?.propertiesAmenities ? (
          propertyAmenities.propertiesAmenities.map((opt) => (
            <Typography key={opt} variant="body1" sx={styles.mainStyles}>
              {opt}
            </Typography>
          ))
        ) : (
          <Typography variant="body1" sx={styles.mainStyles}>
            No amenities available
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default AmenitiesSlug;
