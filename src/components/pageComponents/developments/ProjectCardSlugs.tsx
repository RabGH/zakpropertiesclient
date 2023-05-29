import { urlFor } from "@lib/sanity";
import { formatPrice, formatArea } from "@lib/utils";
import { Project } from "@lib/types";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Container, Grid } from "@mui/material";
import { getDevelopmentStyles } from "./developmentStyles";

interface ProjectsCardBodyProps {
  projects?: Project[];
}

const ProjectsCardBodyData = ({ projects }: ProjectsCardBodyProps) => {
  const styles = getDevelopmentStyles();

  return (
    <>
      {projects && (
        <Container>
          <Box sx={styles.main}>
            <Box>
              <Box sx={styles.mainBox}>
                <Grid container spacing={0} justifyContent="center">
                  {projects?.map((projects) => (
                    <Grid item xs={12} sm={6} md={4}>
                      <Link
                        key={projects._id}
                        href={`projects/${projects.slug.current}`}
                      >
                        <Box sx={styles.cardStyles}>
                          {projects.mainProjectImage && (
                            <Box sx={styles.imageBoxStyles}>
                              <Image
                                src={urlFor(projects.mainProjectImage)
                                  .auto("format")
                                  .url()}
                                alt={projects.title}
                                width={1920}
                                height={1080}
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
                              variant="body1"
                              sx={styles.projectAreaCard}
                            >
                              Area {formatArea(projects.squareFootage)}
                            </Typography>
                            <Typography
                              variant="h5"
                              sx={styles.projectPriceCard}
                            >
                              {formatPrice(projects.totalPrice)}
                            </Typography>
                          </Box>
                        </Box>
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
