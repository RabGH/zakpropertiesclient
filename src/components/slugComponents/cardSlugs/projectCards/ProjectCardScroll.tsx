import { Project } from "@lib/types";
import Link from "next/link";
import { Box } from "@mui/material";
import { getProjectCardStyles } from "../cardComponents/projectCardStyles";
import { CardStyles } from "../cardComponents/propertyCardStyles";
import ProjectAllCards from "./ProjectAllCards";

//! Only used in index.tsx currently

interface ProjectsCardBodyProps {
  projects?: Project[];
}
const ProjectsCardBodyData = ({ projects }: ProjectsCardBodyProps) => {
  const styles = getProjectCardStyles();
  const cardStyles = CardStyles();

  return (
    <>
      {projects && (
        <Box sx={styles.main}>
          <Box sx={styles.mainBox}>
            <Box>
              <Box sx={styles.projectContainerBoxStyles}>
                {projects?.map((projects) => (
                  <Box key={projects._id} sx={styles.projectItemCardBoxStyles}>
                    <ProjectAllCards project={projects} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
export default ProjectsCardBodyData;
