import { Box, Typography, Divider } from "@mui/material";
import {
  mainStyles,
  cardStyles,
  boxStyles,
  mainTitle,
} from "./amenitiesFeaturesStyles";

interface FeaturesSlugProps {
  features: {
    name: string;
    features: string[];
  };
}

export const featuresStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const FeaturesSlug = ({ features }: FeaturesSlugProps) => {
  return (
    <Box sx={cardStyles}>
      <Typography variant="h6" sx={mainTitle}>
        {features.name}
      </Typography>
      <Box sx={boxStyles}>
        {features?.features?.map((opt) => (
          <Typography key={opt} variant="body2" sx={mainStyles}>
            {opt}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturesSlug;
