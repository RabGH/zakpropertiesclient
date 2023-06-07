import { Box } from "@mui/material";
import { Property } from "@lib/types";
import { CardStyles } from "../cardComponents/propertyCardStyles";
import PropertyAllCard from "@/components/slugComponents/cardSlugs/propertyCards/PropertyAllCards"; // import the component

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
