import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Project } from "@lib/types";
import { GetStaticProps } from "next";
import { sanityClient } from "@lib/sanity";
import { previewClient } from "@lib/client";
import Link from "next/link";
import Head from "next/head";
import { getAllProjectStyles } from "@/components/pageComponents/projects/allProjectStyles";
import ProjectAllCards from "@/components/slugComponents/cardSlugs/projectCards/ProjectAllCards";

interface AllProjectsProps {
  projects?: Project[];
}

function AllProjects({ projects }: AllProjectsProps) {
  const styles = getAllProjectStyles();

  return (
    <Box sx={styles.mainContainer}>
      <Head>
        <title>ZakProperties Projects Page</title>
        <meta name="description" content="ZakProperties Projects Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h3" component="h1" sx={styles.titleStyles}>
        Featured Projects
      </Typography>
      <Typography variant="body1" sx={styles.introText}>
        Welcome to our projects page, where you can find the latest and most
        luxurious real estate projects in Dubai UAE. Whether you are looking for
        apartments, villas, townhouses, or off-plan properties, we have
        something for everyone. Browse through our featured projects and
        discover their unique features, amenities, and locations. You can also
        contact us for more information and inquiries about any of the projects.
      </Typography>

      {projects && (
        <Box sx={styles.main}>
          <Box sx={styles.mainBox}>
            <Box>
              <Grid container spacing={2} sx={{ mt: "2rem" }}>
                {projects?.map((projects) => (
                  <Grid item key={projects._id} xs={12} sm={6} md={4} lg={3}>
                    <ProjectAllCards project={projects} />
                    <Divider sx={styles.dividerStyles} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      )}

      <Typography variant="h6" sx={{ mt: "1rem" }}>
        Contact us for project inquiries and off-plan projects
      </Typography>
      <Link href="/contactUs">
        <Button variant="contained" size="large" sx={styles.contactButton}>
          Learn More
        </Button>
      </Link>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  previewData,
}) => {
  const projectQuery = '*[_type == "project"]{..., location}';
  const client = preview ? previewClient : sanityClient;
  const params = preview ? previewData : {};
  const projects = await client.fetch(projectQuery, params);

  return {
    props: {
      projects,
      preview,
    },
    revalidate: 60,
  };
};

export default AllProjects;
