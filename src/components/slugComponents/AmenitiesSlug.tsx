import { Box, Card, Typography } from '@mui/material';
import { BiDumbbell, BiSwim, BiCartAlt, BiShow, BiSmile, BiLockAlt } from 'react-icons/bi';

interface AmenitiesCardProps {
  amenities: string[];
}

const AmenitiesCard = ({ amenities }: AmenitiesCardProps) => {
  const amenityStyles = {
    display: "flex",
    alignItems: "center",
    gap: 1,
  };

  const amenityIconStyles = {
    fontSize: 24,
  };

  const amenityTextStyles = {
    fontSize: 16,
  };

  const amenitiesList = [
    { name: "Gym", icon: <BiDumbbell /> },
    { name: "Pool", icon: <BiSwim /> },
    { name: "Grocery Store", icon: <BiCartAlt /> },
    { name: "Retail Area", icon: <BiShow /> },
    { name: "Kids Area", icon: <BiSmile /> },
    { name: "Gated Community", icon: <BiLockAlt /> },
  ];

  const amenitiesCardStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  };

  return (
    <Card sx={{ p: 2 }}>
      <Box sx={amenitiesCardStyles}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>Amenities</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
          {amenitiesList.map((amenity) => {
            if (amenities.includes(amenity.name)) {
              return (
                <Box key={amenity.name} sx={amenityStyles}>
                  {amenity.icon}
                  <Typography variant="body1" sx={amenityTextStyles}>
                    {amenity.name}
                  </Typography>
                </Box>
              );
            }
            return null;
          })}
        </Box>
      </Box>
    </Card>
  );
};

export default AmenitiesCard;
