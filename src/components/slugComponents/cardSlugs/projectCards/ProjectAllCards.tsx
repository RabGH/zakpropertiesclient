import { urlFor } from "@lib/sanity";
import { formatPrice, formatArea } from "@lib/utils";
import { Project } from "@lib/types";
import Image from "next/image";
import { Box, Typography, Card, Link } from "@mui/material";
import { getProjectCardStyles } from "../cardComponents/projectCardStyles";

interface ProjectAllCardsProps {
  project: Project;
}

const ProjectAllCards = ({ project }: ProjectAllCardsProps) => {
  const styles = getProjectCardStyles();

  return (
    <>
      <Link href={`projects/${project.slug.current}`}>
        <Card sx={styles.cardStyles}>
          {project.mainProjectImage && (
            <Box sx={styles.imageBoxStyles}>
              <Image
                src={urlFor(project.mainProjectImage)
                  .auto("format")
                  .url()
                  .toString()}
                alt={project.title}
                width={1920}
                height={1080}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..."
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: -10,
                }}
              />
            </Box>
          )}
          <Box sx={styles.cardInfoStyles}>
            <Typography variant="h6" sx={styles.projectTitleCard}>
              {project.title}
            </Typography>
          </Box>
        </Card>
      </Link>
      <Box sx={styles.projectInfoStyles}>
        <Typography variant="h4" sx={styles.projectTypeStyles}>
          {`${project.projectPropertyTypes.join(" ")}`}
        </Typography>
        <Typography variant="body1" sx={styles.projectCityStyles}>
          {project.address?.city}
        </Typography>
        {/* <Typography variant="body1" sx={styles.projectAreaTypeStyles}>
{`${project.areaType.join(" ⋅ ")}`}
</Typography> */}
        <Typography variant="body1" sx={styles.projectBedroomsStyles}>
          {`${project.bedrooms} beds`}
        </Typography>
        <Typography variant="body1" sx={styles.projectPriceCard}>
          From {formatPrice(project.totalPrice)}
        </Typography>
      </Box>
    </>
  );
};

export default ProjectAllCards;
