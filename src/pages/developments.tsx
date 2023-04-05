import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import ProjectCardSlug from "../components/slugComponents/cardSlugs/ProjectCardSlugs";
import { Project } from "../../types";
import { sanityClient } from "../../sanity";
import Link from "next/link";

interface DevelopmentsProps {
  projects?: Project[];
}

function Developments({ projects }: DevelopmentsProps) {
  const muiTheme = useTheme();

  const mainContainer = {
    height: "275vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1200px", // added maxWidth
    margin: "0 auto", // added margin to center the container
  };

  const titleStyles = {
    fontWeight: "bold",
    mb: "1rem",
    mt: "5rem",
  };

  const projectTitle = {
    fontWeight: "bold",
    mb: "0.5rem",
  };

  const projectDesc = {
    mb: "1rem",
  };

  const divider = {};

  const contactButton = {
    mt: "2rem",
  };

  return (
    <Box sx={mainContainer}>
      <Typography variant="h3" component="h1" sx={titleStyles}>
        Featured Developments
      </Typography>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {projects &&
          projects.map((project) => (
            <React.Fragment key={project._id}>
              <Grid item xs={12} md={8}>
                <ProjectCardSlug projects={[project]} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h4" component="h2" sx={projectTitle}>
                  {project.title}
                </Typography>
                <Typography variant="body1" sx={projectDesc}>
                  {project.description}
                </Typography>
              </Grid>
              <Divider sx={divider} />
            </React.Fragment>
          ))}
      </Grid>
      <Divider />
      <Typography variant="h6" sx={{ mt: "1rem" }}>
        Contact us for development inquiries and off-plan development projects
      </Typography>
      <Link href="/contact">
        <Button variant="contained" size="large" sx={contactButton}>
          Learn More
        </Button>
      </Link>
    </Box>
  );
}

export async function getServerSideProps() {
  const projectQuery = '*[_type == "projects"]{..., location}';
  const [projects] = await Promise.all([
    sanityClient.fetch<Project[]>(projectQuery),
  ]);

  return {
    props: {
      projects,
    },
  };
}

export default Developments;
