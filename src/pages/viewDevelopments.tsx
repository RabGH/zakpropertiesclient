import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Development } from "@lib/types";
import { GetStaticProps } from "next";
import { sanityClient } from "@lib/sanity";
import { previewClient } from "@lib/client";
import Link from "next/link";
import Head from "next/head";
import { getAllDevelopmentStyles } from "@/components/pageComponents/developments/allDevelopmentStyles";
// import ProjectAllCards from "@/components/slugComponents/cardSlugs/projectCards/ProjectAllCards";

interface AllDevelopmentProps {
  developments?: Development[];
}

function AllDevelopments({ developments }: AllDevelopmentProps) {
  const styles = getAllDevelopmentStyles();

  return (
    <Box sx={styles.mainContainer}>
      <Head>
        <title>ZakProperties Development Page</title>
        <meta name="description" content="ZakProperties Development Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h3" component="h1" sx={styles.titleStyles}>
        Featured Developments
      </Typography>
      <Typography variant="body1" sx={styles.introText}>
        Welcome to our developments page, where you can find the latest and most
        luxurious real estate projects in Dubai UAE. Whether you are looking for
        apartments, villas, townhouses, or off-plan properties, we have
        something for everyone. Browse through our featured developments and
        discover their unique ready and offplan projects. You can also contact
        us for more information and inquiries about any of the developments.
      </Typography>

      {developments && (
        <Box sx={styles.main}>
          <Box sx={styles.mainBox}>
            <Box>
              <Grid container spacing={2} sx={{ mt: "2rem" }}>
                {developments?.map((developments) => (
                  <Grid
                    item
                    key={developments._id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                  >
                    {/* <ProjectAllCards project={projects} /> */}
                    <Divider sx={styles.dividerStyles} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      )}

      <Typography variant="h6" sx={{ mt: "1rem" }}>
        Contact us for development inquiries
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
  const developerQuery = '*[_type == "development"]';
  const client = preview ? previewClient : sanityClient;
  const params = preview ? previewData : {};
  const developments = await client.fetch(developerQuery, params);

  return {
    props: {
      developments,
      preview,
    },
    revalidate: 60,
  };
};

export default AllDevelopments;
