import React from "react";
import { Container, Typography, Box, Grid, Card, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import HomeHeader from "@/components/pageComponents/home/HomeHeader";
import { GetStaticProps } from "next";
import { sanityClient } from "@lib/sanity";
import { previewClient } from "@lib/client";
import { Property, Project } from "@lib/types";

import PropertyTownCardBodyData from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyTownCards";
import PropertyAptCardBodyData from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyAptCards";
import PropertyVillaCardBodyData from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyVillaCards";

import ProjectCardSlug from "@/components/pageComponents/developments/ProjectCardSlugs";
import dynamic from "next/dynamic";

import { getHomePageStyles } from "@/components/pageComponents/home/homePageStyles";
import { CardStyles } from "@/components/slugComponents/cardSlugs/cardComponents/cardStyles";

const DashBoardMap = dynamic(
  () => import("@/components/pageComponents/home/DashBoardMap"),
  {
    ssr: false,
  }
);

interface HomeProps {
  properties: Property[];
  projects: Project[];
  mainProjectImage: string[];
}

function Home({ properties, projects, mainProjectImage }: HomeProps) {
  const cardStyles = CardStyles();
  const styles = getHomePageStyles();
  return (
    <>
      <Box sx={styles.homeHeaderContainerBox}>
        <HomeHeader properties={properties} projects={projects} />
      </Box>
      <Box sx={styles.indexMainContainer}>
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

          <Divider sx={styles.dividerStyles}>
            <Typography variant="h5" sx={cardStyles.featuredTitlePos}>
              Featured Apartments
            </Typography>
          </Divider>
          <Box sx={cardStyles.homePropertyCardsComponentPos}>
            <PropertyAptCardBodyData properties={properties} />
          </Box>

          <Divider sx={styles.dividerStyles}>
            <Typography variant="h5" sx={cardStyles.featuredTitlePos}>
              Featured Townhouses
            </Typography>
          </Divider>
          <Box sx={cardStyles.homePropertyCardsComponentPos}>
            <PropertyTownCardBodyData properties={properties} />
          </Box>

          <Divider sx={styles.dividerStyles}>
            <Typography variant="h5" sx={cardStyles.featuredTitlePos}>
              Featured Villas
            </Typography>
          </Divider>
          <Box sx={cardStyles.homePropertyCardsComponentPos}>
            <PropertyVillaCardBodyData properties={properties} />
          </Box>

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

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  previewData,
}) => {
  const propertyQuery = '*[_type == "property"]{..., location}';
  const projectQuery = '*[_type == "projects"]{..., location}';
  const params = preview ? previewData : {};
  const client = preview ? previewClient : sanityClient;
  const [properties, projects] = await Promise.all([
    client.fetch(propertyQuery, params),
    client.fetch(projectQuery, params),
  ]);

  return {
    props: {
      properties,
      projects,
      preview,
    },
    revalidate: 60,
  };
};

export default Home;
