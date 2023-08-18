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
      <Divider sx={styles.dividerStyles} />
      {developers && (
        <Box sx={styles.mainBox}>
          {developers?.map((developers) => (
            <Box key={developers._id} sx={{ m: "1rem" }}>
              <DeveloperAllCards developer={developers} />
            </Box>
          ))}
        </Box>
      )}
      <Divider sx={styles.dividerStyles} />
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
