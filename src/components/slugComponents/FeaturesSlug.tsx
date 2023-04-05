import { Box, Card, Typography } from "@mui/material";

interface FeaturesSlugProps {
  features: string[];
}

export const featuresStyles = {
  maxWidth: 700,
  margin: "0 auto",
};

const FeaturesSlug = ({ features }: FeaturesSlugProps) => {
  const featureStyles = {
    display: "flex",
    alignItems: "center",
    gap: 1,
    p: 3,
  };

  const featureTextStyles = {
    fontSize: 18,
  };

  const featuresCardStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  };

  const featuresBox = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 2,
    maxWidth: "100%",
  };

  const featuresTitle = {};

  return (
    <Card sx={featureStyles}>
      <Box sx={featuresCardStyles}>
        <Typography variant="h3" sx={featuresTitle}>
          Property's Features
        </Typography>
        <Box sx={featuresBox}>
          <Typography variant="body1" sx={featureTextStyles}>
            {features.join(", ")}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default FeaturesSlug;
