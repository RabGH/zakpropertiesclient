import React from "react";
import { Container, Typography, Box, Grid, Card, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import HomeHeader from "@/components/pageComponents/home/HomeHeader";

import { sanityClient } from "@lib/sanity";
import { Property, Project } from "@lib/types";
import HomePropertyCardsComponent from "@/components/slugComponents/cardSlugs/homePropertyCards/homePropertyCardsComponent";

import ProjectCardSlug from "@/components/pageComponents/developments/ProjectCardSlugs";
import dynamic from "next/dynamic";
const DashBoardMap = dynamic(
  () => import("@/components/pageComponents/home/DashBoardMap"),
  {
    ssr: false,
  }
);
import { getHomePageStyles } from "@/components/pageComponents/home/homePageStyles";

interface HomeProps {
  properties: Property[];
  projects: Project[];
  mainProjectImage: string[];
}
function Home({ properties, projects, mainProjectImage }: HomeProps) {
  const styles = getHomePageStyles();
  return (
    <>
      <HomeHeader properties={properties} projects={projects} />
      <Box sx={styles.mainContainer}>
        <Container sx={styles.mainBoxContainer}>
          <Box sx={styles.boxContentProject}>
            <Typography
              variant="body1"
              component="div"
              sx={styles.contentHeader}
            >
              Zak Properties is a top-tier real estate brokerage in Dubai that
              specializes in selling luxurious apartments, villas, and
              townhouses, as well as showcasing off-plan projects. Whether you
              are a first-time buyer or an experienced investor, we offer a
              range of real estate options to meet your needs.
            </Typography>
          </Box>

          <HomePropertyCardsComponent properties={properties} />

          <Divider sx={styles.dividerStyles}>
            <Typography variant="h5" sx={styles.homeFeaturedTitlePos}>
              Featured Developments
            </Typography>
          </Divider>

          <Box sx={styles.projectCards}>
            <ProjectCardSlug projects={projects.slice(0, 3)} />
          </Box>

          <Divider sx={styles.dividerStyles} />
          <Box sx={styles.mapCardPos}>
            <Card sx={styles.mapCard}>
              <Divider sx={styles.dividerStyles}>
                <Typography variant="h3" sx={styles.locationTitleStyles}>
                  Properties and Projects
                </Typography>
              </Divider>
              <Paper sx={styles.mapCardContent}>
                <DashBoardMap properties={properties} projects={projects} />
              </Paper>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const propertyQuery = '*[_type == "property"]{..., location}';
  const projectQuery = '*[_type == "projects"]{..., location}';
  const [properties, projects] = await Promise.all([
    sanityClient.fetch(propertyQuery),
    sanityClient.fetch(projectQuery),
  ]);

  return {
    props: {
      properties,
      projects,
    },
    revalidate: 60,
  };
}

export default Home;
