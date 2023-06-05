import { Box, Typography } from "@mui/material";
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

const FeaturesSlug = ({ features }: FeaturesSlugProps) => {
  return (
    <Box sx={cardStyles}>
      <Typography variant="h3" sx={mainTitle}>
        {features?.name ?? "Features"}
      </Typography>
      <Box sx={boxStyles}>
        {features?.features?.map((opt) => (
          <Typography key={opt} variant="body1" sx={mainStyles}>
            {opt}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturesSlug;
