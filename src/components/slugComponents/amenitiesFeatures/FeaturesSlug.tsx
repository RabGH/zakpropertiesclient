import { Box, Typography, Divider } from "@mui/material";
import {
  mainStyles,
  cardStyles,
  boxStyles,
  dividerCardStyles,
  mainTitle,
} from "./amenitiesFeaturesStyles";

interface FeaturesSlugProps {
  features: string[];
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
          Property's Features
        </Typography>
        <Divider sx={dividerCardStyles} />
        <Box sx={boxStyles}>
          {features.map((feat) => (
              <Typography key={feat} variant="body2" sx={mainStyles}>
                {feat}
              </Typography>
          ))}
        </Box>
      </Box>
  );
};

export default FeaturesSlug;
