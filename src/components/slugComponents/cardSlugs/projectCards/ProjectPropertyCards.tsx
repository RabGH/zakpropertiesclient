import { Box } from "@mui/material";
import { Property } from "@lib/types";
import PropertyAllCard from "@/components/slugComponents/cardSlugs/buyPropertiesCardComponents/PropertyAllCards"; // import the component
import { getSimilarPropertyGridCardStyles } from "../cardComponents/propertySimilarCardGridStyles"; // import the styles

interface ProjectPropertyCardsProps {
  properties: Property[];
  projects?: Property[];
}

const ProjectPropertyCards = ({ properties }: ProjectPropertyCardsProps) => {
  const styles = getSimilarPropertyGridCardStyles();

  return (
    <Box sx={styles.similarMainBox}>
      <Box sx={styles.similarCardGridContainerStyles}>
        {properties.map((property: Property, index: number) => (
          <Box
            key={`project_${property._id}_${index}`}
            sx={styles.similarCardGridItemStyles}
          >
            <PropertyAllCard property={property} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectPropertyCards;
