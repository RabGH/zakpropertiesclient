import { Box, Typography, Divider } from "@mui/material";
import {
  mainStyles,
  cardStyles,
  boxStyles,
  dividerCardStyles,
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
      <Divider sx={dividerCardStyles} />
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
