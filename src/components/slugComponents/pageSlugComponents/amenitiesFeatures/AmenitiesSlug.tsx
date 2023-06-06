import { Box, Typography } from "@mui/material";
import {
  mainStyles,
  cardStyles,
  boxStyles,
  mainTitle,
} from "./amenitiesFeaturesStyles";

interface AmenitiesSlugProps {
  amenities: {
    name: string;
    amenities: string[];
  };
}

const AmenitiesSlug = ({ amenities }: AmenitiesSlugProps) => {
  return (
    <Box sx={{...cardStyles, alignItems: "left",}}>
      <Typography variant="h3" sx={mainTitle}>
        {amenities?.name ?? "Amenities"}
      </Typography>
      <Box
        sx={{
          ...boxStyles,
          gridTemplateColumns: "repeat(2, 2fr)",
          justifyContent: "space-between",
          gridColumnGap: "3rem",
        }}
      >
        {amenities?.amenities?.map((opt) => (
          <Typography key={opt} variant="body1" sx={mainStyles}>
            {opt}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default AmenitiesSlug;
