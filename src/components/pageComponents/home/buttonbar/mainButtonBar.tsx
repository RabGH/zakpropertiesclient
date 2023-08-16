import { Property, Project, Development, Developer } from "@lib/types";
import { Box, useTheme, Button, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import { getButtonbarStyles } from "./buttonbarStyles";

interface mainButtonBarProps {
  properties: Property[];
  projects: Project[];
  developments: Development[];
  developers: Developer[];
}

function MainButtonBar(props: mainButtonBarProps) {
  const styles = getButtonbarStyles();

  return (
    <Box sx={styles.buttonBarWrapper}>
      <Grid container spacing={2} sx={styles.mainGridBox}>
        <Link href="/viewDevelopers" passHref>
          <Grid item xs={6} sm={4} md={3} sx={styles.developerButtonStyles}>
            <Button variant="outlined">
              {/* {getButtonLabel(["Developers"])} */}Developers
            </Button>
          </Grid>
        </Link>
        <Link href="/viewDevelopments" passHref>
          <Grid item xs={6} sm={4} md={3} sx={styles.developmentButtonStyles}>
            <Button variant="outlined">
              {/* {getButtonLabel(["Developments"])} */}Developments
            </Button>
          </Grid>
        </Link>
        <Link href="/viewProjects" passHref>
          <Grid item xs={6} sm={4} md={3} sx={styles.projectButtonStyles}>
            <Button variant="outlined">
              {/* {getButtonLabel(["Projects"])} */}Projects
            </Button>
          </Grid>
        </Link>
        <Link href="/buyProperties" passHref>
          <Grid item xs={6} sm={4} md={3} sx={styles.propertiesButtonStyles}>
            <Button variant="outlined">
              {/* {getButtonLabel(["Properties"])} */}Properties
            </Button>
          </Grid>
        </Link>
      </Grid>
    </Box>
  );
}

export default MainButtonBar;
