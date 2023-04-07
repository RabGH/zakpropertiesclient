import { Box, Typography, Divider } from "@mui/material";
import {
  mainStyles,
  cardStyles,
  boxStyles,
  dividerCardStyles,
  mainTitle,
} from "./amenitiesFeaturesStyles";
interface AmenitiesSlugProps {
  amenities: string[];
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
        Property's Amenities
      </Typography>
      <Divider sx={dividerCardStyles} />
      <Box sx={boxStyles}>
        {amenities.map((amenity) => (
          <Typography key={amenity} variant="body2" sx={mainStyles}>
            {amenity}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default AmenitiesSlug;
