import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Developer } from "@lib/types";
import { GetStaticProps } from "next";
import { sanityClient } from "@lib/sanity";
import { previewClient } from "@lib/client";
import Link from "next/link";
import Head from "next/head";
import { getAllDeveloperStyles } from "@/components/pageComponents/developers/allDeveloperStyles";
import DeveloperAllCards from "@/components/slugComponents/cardSlugs/developerCards/DeveloperAllCards";
// import ProjectAllCards from "@/components/slugComponents/cardSlugs/projectCards/ProjectAllCards";

interface AllDeveloperProps {
  developers?: Developer[];
}

function AllDevelopers({ developers }: AllDeveloperProps) {
  const styles = getAllDeveloperStyles();

  return (
    <Box sx={styles.mainContainer}>
      <Head>
        <title>ZakProperties Developer Page</title>
        <meta name="description" content="ZakProperties Developer Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h3" component="h1" sx={styles.titleStyles}>
        Featured Developers
      </Typography>
      <Typography variant="body1" sx={styles.introText}>
        Welcome to our developers page!
      </Typography>

      {developers && (
        <Box sx={styles.main}>
          <Box sx={styles.mainBox}>
            <Box>
              <Grid container spacing={1} sx={{ mt: "2rem" }}>
                {developers?.map((developers) => (
                  <Grid item key={developers._id} xs={12} sm={6} md={6} lg={6}>
                    <DeveloperAllCards developer={developers} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      )}
      <Box sx={styles.contactBox}>
        <Typography variant="h6" sx={{ mt: "1rem" }}>
          Contact us for developer inquiries
        </Typography>
        <Link href="/contactUs">
          <Button variant="contained" size="large" sx={styles.contactButton}>
            Learn More
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  previewData,
}) => {
  const developerQuery = '*[_type == "developer"]';
  const client = preview ? previewClient : sanityClient;
  const params = preview ? previewData : {};
  const developers = await client.fetch(developerQuery, params);

  return {
    props: {
      developers,
      preview,
    },
    revalidate: 60,
  };
};

export default AllDevelopers;
