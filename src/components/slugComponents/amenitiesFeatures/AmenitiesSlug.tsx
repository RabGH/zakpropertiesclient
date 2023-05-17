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

export const amenityStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const AmenitiesSlug = ({ amenities }: AmenitiesSlugProps) => {
  return (
    <Box sx={cardStyles}>
      <Typography variant="h6" sx={mainTitle}>
        {amenities.name}
      </Typography>
      <Box sx={boxStyles}>
        {amenities?.amenities?.map((opt) => (
          <Typography key={opt} variant="body2" sx={mainStyles}>
            {opt}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default AmenitiesSlug;
