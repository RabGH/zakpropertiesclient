import { Box, Card, Typography, Divider } from "@mui/material";

interface AmenitiesCardProps {
  amenities: string[];
}

const AmenitiesCard = ({ amenities }: AmenitiesCardProps) => {
  const amenityStyles = {
    p: 2,
    backgroundColor: "#F7F7F7",
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

  const amenitiesCardStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const amenitiesBoxStyles = {
    width: "100%",
  };

  const rowStyles = {
    display: "flex",
    justifyContent: "center",
    gap: 1,
    height: "2rem",
  };

  const amenitiesTitle = {
    mb: "0.5rem",
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
  };

  const columns = [];
  let column = [];

  for (let i = 0; i < amenities.length; i++) {
    column.push(amenities[i]);

    if (column.length === 4) {
      columns.push(column);
      column = [];
    }
  }

  if (column.length > 0) {
    columns.push(column);
  }

  return (
    <Card sx={amenityStyles}>
      <Box sx={amenitiesCardStyles}>
        <Typography variant="h6" sx={amenitiesTitle}>
          Property's Amenities
        </Typography>
        <Divider sx={{ borderBottom: "4px solid #000000", zIndex: 3 }} />
        <Box sx={amenitiesBoxStyles}>
          {columns.map((col, idx) => (
            <Box key={idx} sx={rowStyles}>
              {col.map((amenity) => (
                <Typography key={amenity} variant="body2" sx={amenityStyles}>
                  {amenity}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default AmenitiesCard;
