import { Box, Typography, Card, Divider } from "@mui/material";
import { Property } from "@lib/types";
import { CardStyles } from "../cardComponents/cardStyles";
import PropertyAllCard from "@/components/slugComponents/cardSlugs/buyPropertiesCardComponents/PropertyAllCards"; // import the component

interface PropertyVillaCardBodyProps {
  properties?: Property[];
}

const PropertyVillaCardBodyData = ({
  properties,
}: PropertyVillaCardBodyProps) => {
  const styles = CardStyles();
  if (!properties) {
    return null;
  }

  const villas = properties.filter(
    (property) => property.propertyType === "Villa"
  );

  return (
    <>
      {properties && (
        <Box sx={styles.mainAll}>
          <Box sx={styles.mainBox}>
            <Box>
              <Divider sx={styles.dividerStyles}>
                <Typography variant="h5" sx={styles.featuredTitlePos}>
                  Featured Villas
                </Typography>
              </Divider>
              <Box sx={styles.homeContainerBoxStyles}>
                {villas?.slice(0, 3).map((property) => (
                  <Box key={property._id} sx={styles.homeItemCardBoxStyles}>
                    <PropertyAllCard property={property} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PropertyVillaCardBodyData;
