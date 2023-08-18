import { urlFor } from "@lib/sanity";
import { formatPrice, formatArea } from "@lib/utils";
import { Developer } from "@lib/types";
import Image from "next/image";
import { Box, Typography, Card, Link, Container } from "@mui/material";
import { getDeveloperCardStyles } from "@/components/slugComponents/cardSlugs/cardComponents/developerCardStyles";

interface ProjectAllCardsProps {
  developer: Developer;
}

const ProjectAllCards = ({ developer }: ProjectAllCardsProps) => {
  const styles = getDeveloperCardStyles();

  return (
    <Container maxWidth="xl">
      <Link href={`/developer/${developer.slug.current}`}>
        <Card sx={styles.cardStyles}>
          {developer.logo && (
            <Box sx={styles.imageBoxStyles}>
              <Image
                src={urlFor(developer.logo).auto("format").url().toString()}
                alt={developer.name}
                width={270}
                height={200}
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
          {/* <Box sx={styles.cardInfoStyles}>
            <Typography variant="h5" sx={styles.projectTitleCard}>
              {developer.name}
            </Typography>
          </Box> */}
        </Card>
      </Link>
    </Container>
  );
};

export default ProjectAllCards;
