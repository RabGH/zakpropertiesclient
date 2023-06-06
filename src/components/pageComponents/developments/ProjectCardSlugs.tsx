import { urlFor } from "@lib/sanity";
import { formatPrice, formatArea } from "@lib/utils";
import { Project } from "@lib/types";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Container, Grid, Card } from "@mui/material";
import { getDevelopmentStyles } from "./developmentStyles";

interface ProjectsCardBodyProps {
  projects?: Project[];
}
//! FIX CARD LOOKS BAD
const ProjectsCardBodyData = ({ projects }: ProjectsCardBodyProps) => {
  const styles = getDevelopmentStyles();

  return (
    <>
      {projects && (
        <Container>
          <Box sx={styles.main}>
            <Box>
              <Box sx={styles.mainBox}>
                <Grid container spacing={2} justifyContent="center">
                  {projects?.map((projects) => (
                    <Grid item key={projects._id} xs={12} sm={6} md={4}>
                      <Link
                        key={projects._id}
                        href={`projects/${projects.slug.current}`}
                      >
                        <Card sx={styles.cardStyles}>
                          {projects.mainProjectImage && (
                            <Box sx={styles.imageBoxStyles}>
                              <Image
                                src={urlFor(projects.mainProjectImage)
                                  .auto("format")
                                  .url()
                                  .toString()}
                                alt={projects.title}
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
                            <Typography
                              variant="body1"
                              sx={styles.projectTypeStyles}
                            >
                              {projects.projectPropertyTypes}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={styles.projectTitleCard}
                            >
                              {projects.title}
                            </Typography>
                            <Typography
                              variant="h5"
                              sx={styles.projectPriceCard}
                            >
                              {formatPrice(projects.totalPrice)}
                            </Typography>
                          </Box>
                        </Card>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default ProjectsCardBodyData;
