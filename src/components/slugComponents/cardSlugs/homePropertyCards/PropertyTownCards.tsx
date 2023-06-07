import { Box, Typography, Divider } from "@mui/material";
import { Property } from "@lib/types";
import { CardStyles } from "../cardComponents/propertyCardStyles";
import PropertyAllCard from "@/components/slugComponents/cardSlugs/propertyCards/PropertyAllCards"; // import the component

interface PropertyTownCardBodyProps {
  properties?: Property[];
}

const PropertyTownCardBodyData = ({
  properties,
}: PropertyTownCardBodyProps) => {
  const styles = CardStyles();
  if (!properties) {
    return null;
  }

  const townhouses = properties.filter(
    (property) => property.propertyType === "Townhouse"
  );

  return (
    <>
      {properties && (
        <Box sx={styles.mainAll}>
          <Box sx={styles.mainBox}>
            <Box>
              <Box sx={styles.homeContainerBoxStyles}>
                {townhouses?.slice(0, 3).map((property) => (
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
export default PropertyTownCardBodyData;
