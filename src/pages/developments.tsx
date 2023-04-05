import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

function Developments() {
  const muiTheme = useTheme();

  const aboutProject = {
    mt: "1rem",
    mb: "1rem",
  };

  const titleProject = {
    mb: "-6rem",
  };

  const contentProject = {
    height: "50vh",
    mt: "7rem",
  };

  const mainContainer = {};

  return (
    <Box sx={mainContainer}>
      <Container sx={contentProject}>
        <Divider component="div" role="presentation" sx={aboutProject}>
          <Typography variant="h5" component="div">
            New Page
          </Typography>
        </Divider>
        <Typography variant="h4" component="div" sx={titleProject}>
          New Page
        </Typography>
        <Typography variant="h6" component="div" sx={contentProject}>
          Project Page
        </Typography>
      </Container>
    </Box>
  );
}

export default Developments;
