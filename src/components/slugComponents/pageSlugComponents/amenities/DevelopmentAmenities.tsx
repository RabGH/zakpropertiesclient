import { Box, Typography } from "@mui/material";
import {
  mainStyles,
  cardStyles,
  boxStyles,
  mainTitle,
} from "./amenitiesStyles";
import { DevelopmentAmenities } from "@lib/types";

interface AmenitiesSlugProps {
  developmentAmenities: DevelopmentAmenities;
}

const AmenitiesSlug = ({ developmentAmenities }: AmenitiesSlugProps) => {
  return (
    <Box sx={{ ...cardStyles, alignItems: "left" }}>
      <Typography variant="h3" sx={mainTitle}>
        {developmentAmenities?.name ?? "Amenities"}
      </Typography>
      <Box
        sx={{
          ...boxStyles,
          gridTemplateColumns: "repeat(3, 3fr)",
          justifyContent: "space-between",
          gridColumnGap: "3rem",
        }}
      >
        {developmentAmenities?.developmentsAmenities?.map((opt) => (
          <Typography key={opt} variant="body1" sx={mainStyles}>
            {opt}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default AmenitiesSlug;
