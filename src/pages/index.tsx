import React from "react";
import { useState } from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import HomeHeader from "../components/pageComponents/home/HomeHeader";

import { sanityClient } from "../../sanity";
import { Property, Project } from "../../types";

import PropertyVillaCardSlug from "../components/slugComponents/cardSlugs/PropertyVillaSlugs";
import PropertyAptCardSlug from "../components/slugComponents/cardSlugs/PropertyAptSlugs";
import PropertyTownCardSlug from "../components/slugComponents/cardSlugs/PropertyTownSlugs";
import ProjectCardSlug from "../components/slugComponents/cardSlugs/ProjectCardSlugs";

import { urlFor } from '../../sanity';
import DashBoardMap from "../components/pageComponents/home/DashBoardMap";

interface HomeProps {
  properties: Property[];
  projects: Project[];
  mainProjectImage: string[];
}

function Home({ properties, projects, mainProjectImage }: HomeProps) {
  const muiTheme = useTheme();

  const contentHeader = {
    fontSize: "1.5rem",
    lineHeight: "1.5",
    textAlign: "center",
    maxWidth: "70ch",
    margin: "0 auto",
    mb: '-20rem',
  };

  const boxContentProject = {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const mainContainer = {
  };

  const propertyVillaCards = {};
  const propertyTownCards = {};
  const propertyAptCards = {};
  const projectCards = {};

  return (
    <Box sx={mainContainer}>
            <HomeHeader properties={properties} projects={projects} />
          <Container>
          <Box sx={boxContentProject}>
            <Typography variant="body2" component="div" sx={contentHeader}>
            Zak Properties is a top-tier real estate brokerage in Dubai that
            specializes in selling luxurious apartments, villas, and 
            townhouses, as well as showcasing off-plan projects. 
            Whether you are a first-time buyer or an experienced investor, 
            we offer a range of real estate options to meet 
            your needs.
            </Typography>
          </Box>
        
      <Grid container spacing={3} direction="column">
        <Box sx={propertyVillaCards}>
          <PropertyVillaCardSlug properties={properties} />
        </Box>
      </Grid>
      <Grid container spacing={3} direction="column">
        <Box sx={propertyAptCards}>
          <PropertyAptCardSlug properties={properties} />
        </Box>
      </Grid>
      <Grid container spacing={3} direction="column">
        <Box sx={propertyTownCards}>
          <PropertyTownCardSlug properties={properties} />
        </Box>
      </Grid>
      <Grid container spacing={3} direction="column">
        <Box sx={projectCards}>
          <ProjectCardSlug projects={projects} />
        </Box>
      </Grid>
      <Divider />
        <Box sx={{ mt: 4 }}>
          <DashBoardMap properties={properties} projects={projects} />
        </Box>
      </Container>
    </Box>
  );
}

export async function getServerSideProps() {
  const propertyQuery = '*[_type == "property"]{..., location}';
  const projectQuery = '*[_type == "projects"]{..., location}';
  const [properties, projects] = await Promise.all([
    sanityClient.fetch<Property[]>(propertyQuery),
    sanityClient.fetch<Project[]>(projectQuery),
  ]);

  console.log("Properties:", properties);
  console.log("Projects:", projects);

  return {
    props: {
      properties,
      projects,
    },
  };
}

export default Home;
