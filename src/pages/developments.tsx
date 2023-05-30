import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import ProjectCardSlug from "@/components/pageComponents/developments/ProjectCardSlugs";
import { Project } from "@lib/types";
import { sanityClient } from "@lib/sanity";
import Link from "next/link";
import { getDevelopmentStyles } from "@/components/pageComponents/developments/developmentStyles";

interface DevelopmentsProps {
  projects?: Project[];
}

function Developments({ projects }: DevelopmentsProps) {
  const styles = getDevelopmentStyles();

  return (
    <Box sx={styles.mainContainer}>
      <Typography variant="h3" component="h1" sx={styles.titleStyles}>
        Featured Developments
      </Typography>

      {projects &&
        projects.map((project) => (
          <React.Fragment key={project._id}>
            <ProjectCardSlug projects={[project]} />
            <Typography variant="h4" component="h2" sx={styles.projectTitle}>
              {project.title}
            </Typography>
            <Typography variant="body1" sx={styles.projectDesc}>
              {project.description}
            </Typography>
            <Divider sx={styles.divider} />
          </React.Fragment>
        ))}
      <Divider />
      <Typography variant="h6" sx={{ mt: "1rem" }}>
        Contact us for development inquiries and off-plan development projects
      </Typography>
      <Link href="/contactUs">
        <Button variant="contained" size="large" sx={styles.contactButton}>
          Learn More
        </Button>
      </Link>
    </Box>
  );
}

export async function getStaticProps() {
  const projectQuery = '*[_type == "projects"]{..., location}';
  const projects = await sanityClient.fetch(projectQuery);

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}

export default Developments;
