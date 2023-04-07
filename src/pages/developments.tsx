import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import ProjectCardSlug from "../components/pageComponents/developments/ProjectCardSlugs";
import { Project } from "../../lib/types";
import { sanityClient } from "../../lib/sanity";
import Link from "next/link";
import { getDevelopmentStyles } from "../components/pageComponents/developments/developmentStyles";

interface DevelopmentsProps {
  projects?: Project[];
}

function Developments({ projects }: DevelopmentsProps) {
  const muiTheme = useTheme();
  const styles = getDevelopmentStyles(muiTheme);

  return (
    <Box sx={styles.mainContainer}>
      <Typography variant="h3" component="h1" sx={styles.titleStyles}>
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
                <Typography
                  variant="h4"
                  component="h2"
                  sx={styles.projectTitle}
                >
                  {project.title}
                </Typography>
                <Typography variant="body1" sx={styles.projectDesc}>
                  {project.description}
                </Typography>
              </Grid>
              <Divider sx={styles.divider} />
            </React.Fragment>
          ))}
      </Grid>
      <Divider />
      <Typography variant="h6" sx={{ mt: "1rem" }}>
        Contact us for development inquiries and off-plan development projects
      </Typography>
      <Link href="/contact">
        <Button variant="contained" size="large" sx={styles.contactButton}>
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
