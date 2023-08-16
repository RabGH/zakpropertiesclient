import { Property, Project } from "@lib/types";
import { Box, useTheme, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { getButtonbarStyles } from "./buttonbarStyles";

interface mainButtonBarProps {
  properties: Property[];
  projects: Project[];
}

function MainButtonBar(props: mainButtonBarProps) {
  const styles = getButtonbarStyles();

  return (
    <Box sx={styles.buttonBarWrapper}>

        <Box sx={styles.btnGrpA}>
          <Link href="/viewDevelopers" passHref>
            <Button sx={styles.buttonStyles} variant="outlined">
              {/* {getButtonLabel(["Developers"])} */}Developers
            </Button>
          </Link>
          <Link href="/viewDevelopments" passHref>
            <Button sx={styles.buttonStyles} variant="outlined">
              {/* {getButtonLabel(["Developments"])} */}Developments
            </Button>
          </Link>
        </Box>
        <Box sx={styles.btnGrpB}>
          <Link href="/viewProjects" passHref>
            <Button sx={styles.buttonStyles} variant="outlined">
              {/* {getButtonLabel(["Projects"])} */}Projects
            </Button>
          </Link>
          <Link href="/buyProperties" passHref>
            <Button sx={styles.buttonStyles} variant="outlined">
              {/* {getButtonLabel(["Properties"])} */}Properties
            </Button>
          </Link>
        </Box>

    </Box>
  );
}

export default MainButtonBar;
