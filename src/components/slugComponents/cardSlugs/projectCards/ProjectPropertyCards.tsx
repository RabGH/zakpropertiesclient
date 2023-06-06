import { Box } from "@mui/material";
import { Property } from "@lib/types";
import PropertyAllCard from "@/components/slugComponents/cardSlugs/buyPropertiesCardComponents/PropertyAllCards"; // import the component
import { CardStyles } from "../cardComponents/cardStyles";

interface ProjectPropertyCardsProps {
  properties: Property[];
  projects?: Property[];
}

const ProjectPropertyCards = ({ properties }: ProjectPropertyCardsProps) => {
  const styles = CardStyles();

  return (
    <Box sx={styles.homeContainerBoxStyles}>
      {properties.map((property: Property, index: number) => (
        <Box
          key={`project_${property._id}_${index}`}
          sx={styles.homeItemCardBoxStyles}
        >
          <PropertyAllCard property={property} />
        </Box>
      ))}
    </Box>
  );
};

export default ProjectPropertyCards;
