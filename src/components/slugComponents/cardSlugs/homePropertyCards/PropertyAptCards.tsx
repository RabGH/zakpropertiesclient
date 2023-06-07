import { Box } from "@mui/material";
import { Property } from "@lib/types";
import { getPropertyCardStyles } from "../cardComponents/propertyCardStyles";
import PropertyAllCard from "@/components/slugComponents/cardSlugs/propertyCards/PropertyAllCards"; // import the component

interface PropertyAptCardBodyProps {
  properties?: Property[];
}

const PropertyAptCardBodyData = ({ properties }: PropertyAptCardBodyProps) => {
  const styles = getPropertyCardStyles();
  if (!properties) {
    return null;
  }

  const apartments = properties.filter(
    (property) => property.propertyType === "Apartment"
  );

  return (
    <>
      {properties && (
        <Box sx={styles.mainAll}>
          <Box sx={styles.mainBox}>
            <Box>
              <Box sx={styles.homeContainerBoxStyles}>
                {apartments?.slice(0, 3).map((property) => (
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
export default PropertyAptCardBodyData;
