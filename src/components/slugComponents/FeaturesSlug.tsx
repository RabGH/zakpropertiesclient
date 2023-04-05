import { Box, Card, Typography, Divider } from "@mui/material";

interface FeaturesSlugProps {
  features: string[];
}

export const featuresStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const FeaturesSlug = ({ features }: FeaturesSlugProps) => {
  const featureStyles = {
    p: 2,
    backgroundColor: "#9B9B9B",
    boxShadow: "none",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    whiteSpace: "nowrap",
    "&:not(:last-child)::after": {
      content: '","',
    },
  };

  const featureTextStyles = {
    fontSize: 16,
    whiteSpace: "nowrap",
    "&:not(:last-child)::after": {
      content: '","',
    },
  };

  const featuresCardStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const featuresBoxStyles = {
    width: "100%",
  };

  const rowStyles = {
    display: "flex",
    justifyContent: "center",
    gap: 1,
    height: "2rem",
  };

  const featuresTitle = {
    mb: "0.5rem",
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
  };

  const columns = [];
  let column = [];

  for (let i = 0; i < features.length; i++) {
    column.push(features[i]);

    if (column.length === 4) {
      columns.push(column);
      column = [];
    }
  }

  if (column.length > 0) {
    columns.push(column);
  }

  return (
    <Card>
      <Box sx={featuresCardStyles}>
        <Typography variant="h6" sx={featuresTitle}>
          Property's Features
        </Typography>
        <Divider sx={{ borderBottom: "4px solid #000000", zIndex: 3 }} />
        <Box sx={featuresBoxStyles}>
          {columns.map((col, idx) => (
            <Box key={idx} sx={rowStyles}>
              {col.map((feat) => (
                <Typography key={feat} variant="body2" sx={featureStyles}>
                  {feat}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default FeaturesSlug;
