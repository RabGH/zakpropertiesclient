import { urlFor } from "../../../../lib/sanity";
import { formatPrice, formatArea } from "../../../../lib/utils";
import { Project } from "../../../../lib/types";
import Image from "next/image";
import Link from "next/link";

import { Box, Typography, Container, Card, Divider } from "@mui/material";

interface ProjectsCardBodyProps {
  projects?: Project[];
}

const ProjectsCardBodyData = ({ projects }: ProjectsCardBodyProps) => {
  const main = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "45vh",
    minWidth: "45vh",
  };

  const cardStyles = {
    position: "relative",
    width: 500,
    height: 340,
    boxShadow: "none",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    objectFit: "cover",
    zIndex: 1,
    padding: "2rem",
    mr: 2,
    ml: 2,
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
    },
  };

  const imageBoxStyles = {
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      "&:hover": {
        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
      },
    },
  };

  const projectTypeStyles = {
    color: "rgba(255, 255, 255, 1)",
    paddingBottom: "0.7rem",
    fontWeight: "700",
  };

  const projectTitleCard = {
    color: "white",
    paddingBottom: "0.7rem",
  };

  const projectAreaCard = {
    color: "rgba(255, 255, 255, 1)",
    paddingBottom: "0.3rem",
    fontWeight: "700",
  };

  const projectPriceCard = {
    color: "rgba(255, 255, 255, 1)",
    fontSize: "0.9rem",
    fontWeight: "700",
  };

  const cardInfoStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "1rem",
    color: "rgba(255, 255, 255, 1)",
    fontSize: "1.2rem",
    fontWeight: "700",
    zIndex: 2,
  };

  const mainBox = {
    display: "flex",
    flexDirection: "row",
    mb: "2rem",
  };

  return (
    <>
      {projects && (
        <Container>
          <Box sx={main}>
            <Box>
              <Box sx={mainBox}>
                {projects?.map((projects) => (
                  <Link
                    key={projects._id}
                    href={`projects/${projects.slug.current}`}
                  >
                    <Box sx={cardStyles}>
                      {projects.mainProjectImage && (
                        <Box sx={imageBoxStyles}>
                          <Image
                            src={urlFor(projects.mainProjectImage)
                              .auto("format")
                              .url()}
                            alt={projects.title}
                            width={1920}
                            height={1080}
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              zIndex: -10,
                            }}
                          />
                        </Box>
                      )}
                      <Box sx={cardInfoStyles}>
                        <Typography variant="body1" sx={projectTypeStyles}>
                          {projects.projectPropertyTypes}
                        </Typography>
                        <Typography variant="h6" sx={projectTitleCard}>
                          {projects.title}
                        </Typography>
                        <Typography variant="body1" sx={projectAreaCard}>
                          Area {formatArea(projects.squareFootage)}
                        </Typography>
                        <Typography variant="h5" sx={projectPriceCard}>
                          {formatPrice(projects.totalPrice)}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default ProjectsCardBodyData;