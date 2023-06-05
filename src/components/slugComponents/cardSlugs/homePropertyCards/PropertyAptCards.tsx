import { Box } from "@mui/material";
import { Property } from "@lib/types";
import { CardStyles } from "../cardComponents/cardStyles";
import PropertyAllCard from "@/components/slugComponents/cardSlugs/buyPropertiesCardComponents/PropertyAllCards"; // import the component

interface PropertyAptCardBodyProps {
  properties?: Property[];
}

const PropertyAptCardBodyData = ({ properties }: PropertyAptCardBodyProps) => {
  const styles = CardStyles();
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
