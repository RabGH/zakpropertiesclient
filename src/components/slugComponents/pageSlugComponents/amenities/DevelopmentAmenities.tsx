import { Box, Typography } from "@mui/material";
import { getAmenitiesStyles } from "./amenitiesStyles";
import { DevelopmentAmenities } from "@lib/types";

interface AmenitiesSlugProps {
  developmentAmenities: DevelopmentAmenities;
}

const AmenitiesSlug = ({ developmentAmenities }: AmenitiesSlugProps) => {
  const styles = getAmenitiesStyles();

  return (
    <Box sx={{ ...styles.cardStyles, alignItems: "left" }}>
      <Typography variant="h3" sx={styles.mainTitle}>
        {developmentAmenities?.name ?? "Amenities"}
      </Typography>
      <Box
        sx={{
          ...styles.boxStyles,
          gridTemplateColumns: "repeat(2, 2fr)",
          justifyContent: "space-between",
          gridColumnGap: "2rem",
        }}
      >
        {developmentAmenities?.developmentsAmenities?.map((opt) => (
          <Typography key={opt} variant="body1" sx={styles.mainStyles}>
            {opt}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default AmenitiesSlug;
