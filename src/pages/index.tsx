import React from "react";
import { Container, Typography, Box, Button, Card, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import HomeHeader from "@/components/pageComponents/home/HomeHeader";
import { GetStaticProps } from "next";
import { sanityClient } from "@lib/sanity";
import { previewClient } from "@lib/client";
import { Property, Project } from "@lib/types";

import PropertyTownCardBodyData from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyTownCards";
import PropertyAptCardBodyData from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyAptCards";
import PropertyVillaCardBodyData from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyVillaCards";
import ProjectsCardBodyData from "@/components/slugComponents/cardSlugs/projectCards/ProjectCardScroll";

import dynamic from "next/dynamic";

import { getHomePageStyles } from "@/components/pageComponents/home/homePageStyles";
import { getPropertyCardStyles } from "@/components/slugComponents/cardSlugs/cardComponents/propertyCardStyles";
import { getProjectCardStyles } from "@/components/slugComponents/cardSlugs/cardComponents/projectCardStyles";
const DashBoardMap = dynamic(
  () =>
    import(
      "@/components/slugComponents/pageSlugComponents/miscellaneousSlugComponents/DashBoardMap"
    ),
  {
    ssr: false,
  }
);

interface HomeProps {
  properties: Property[];
  projects: Project[];
}

function Home({ properties, projects }: HomeProps) {
  const propCardStyles = getPropertyCardStyles();
  const projCardStyles = getProjectCardStyles();
  const styles = getHomePageStyles();
  return (
    <>
      <Box sx={styles.homeHeaderContainerBox}>
        <HomeHeader properties={properties} projects={projects} />
      </Box>
      <Box sx={styles.indexMainContainer}>
        <Container sx={styles.mainBoxContainer} maxWidth="xl">
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
            <Button
              href="/buyProperties"
              sx={styles.buyPropertiesButton}
              variant="outlined"
            >
              View all properties
            </Button>
          </Box>

          <Divider sx={styles.dividerStyles}>
            <Typography variant="h5" sx={propCardStyles.featuredTitlePos}>
              Featured Apartments
            </Typography>
          </Divider>
          <Box sx={propCardStyles.homePropertyCardsPos}>
            <PropertyAptCardBodyData properties={properties} />
          </Box>

          <Divider sx={styles.dividerStyles}>
            <Typography variant="h5" sx={propCardStyles.featuredTitlePos}>
              Featured Townhouses
            </Typography>
          </Divider>
          <Box sx={propCardStyles.homePropertyCardsPos}>
            <PropertyTownCardBodyData properties={properties} />
          </Box>

          <Divider sx={styles.dividerStyles}>
            <Typography variant="h5" sx={propCardStyles.featuredTitlePos}>
              Featured Villas
            </Typography>
          </Divider>
          <Box sx={propCardStyles.homePropertyCardsPos}>
            <PropertyVillaCardBodyData properties={properties} />
          </Box>

          <Divider sx={styles.dividerStyles}>
            <Typography variant="h5" sx={propCardStyles.featuredTitlePos}>
              Featured Developments
            </Typography>
          </Divider>
          <Box sx={projCardStyles.homeProjectCardsPos}>
            <ProjectsCardBodyData projects={projects.slice(0, 3)} />
          </Box>

          {/* <Divider sx={styles.dividerStyles}>
            <Typography variant="h3" sx={styles.mapTitleStyles}>
              Properties and Projects
            </Typography>
          </Divider> */}
        </Container>
        {/* <Box sx={styles.mapCardPos}>
          <DashBoardMap properties={properties} projects={projects} />
        </Box> */}
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  previewData,
}) => {
  const propertyQuery = '*[_type == "property"]{..., location}';
  const projectQuery =
    '*[_type == "projects"]{..., location, address->{street,city}}';
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
