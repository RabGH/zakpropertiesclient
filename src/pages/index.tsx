import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  Paper,
  useTheme,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import HomeHeader from "@/components/pageComponents/home/HomeHeader";

import { sanityClient } from "@lib/sanity";
import { Property, Project } from "@lib/types";

import PropertyVillaCardSlug from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyVillaCards";
import PropertyAptCardSlug from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyAptCards";
import PropertyTownCardSlug from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyTownCards";
import ProjectCardSlug from "@/components/pageComponents/developments/ProjectCardSlugs";
import { featuredTitlePos } from "@/components/slugComponents/cardSlugs/cardComponents/cardStyles";
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
  const muiTheme = useTheme();
  const styles = getHomePageStyles(muiTheme);
  return (
    <>
      <Box sx={styles.mainContainer}>
        <HomeHeader properties={properties} projects={projects} />
        <Container>
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

          <Grid container spacing={3} direction="column">
            <Box sx={styles.propertyVillaCards}>
              <PropertyVillaCardSlug properties={properties} />
            </Box>
          </Grid>
          <Grid container spacing={3} direction="column">
            <Box sx={styles.propertyAptCards}>
              <PropertyAptCardSlug properties={properties} />
            </Box>
          </Grid>
          <Grid container spacing={3} direction="column">
            <Box sx={styles.propertyTownCards}>
              <PropertyTownCardSlug properties={properties} />
            </Box>
          </Grid>
          <Grid container spacing={3} direction="column">
            <Divider sx={styles.dividerStyles}>
              <Typography variant="h5" sx={featuredTitlePos}>
                Featured Developments
              </Typography>
            </Divider>
            <Box sx={styles.projectCards}>
              <ProjectCardSlug projects={projects.slice(0, 3)} />
            </Box>
          </Grid>
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

export async function getServerSideProps() {
  const propertyQuery = '*[_type == "property"]{..., location}';
  const projectQuery = '*[_type == "projects"]{..., location}';
  const [properties, projects] = await Promise.all([
    sanityClient.fetch<Property[]>(propertyQuery),
    sanityClient.fetch<Project[]>(projectQuery),
  ]);

  return {
    props: {
      properties,
      projects,
    },
  };
}

export default Home;
