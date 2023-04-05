import { sanityClient } from "../../../sanity";
import { formatPrice, formatArea } from "../../../utils";
import Link from "next/link";
import {
  Box,
  Divider,
  Typography,
  Card,
  Container,
  useTheme,
} from "@mui/material";
import GeneralButton from "../../components/general/GButton";
import ImageCarousel from "../../components/slugComponents/ImageGallerySlick";
import ProjectPropertyCards from "../../components/slugComponents/cardSlugs/ProjectPropertyCards";
import {
  propertyContainer,
} from "../../components/slugComponents/cardSlugs/ProjectPropertyCards";
import dynamic from "next/dynamic";
import AmenitiesCard from "../../components/slugComponents/AmenitiesSlug";
const MapSlug = dynamic(
  () => import("../../components/slugComponents/MapSlug"),
  {
    ssr: false,
  }
);

import { Project, Property, PageContext } from "../../../types";
import {
  mainContainer,
  mainImageContainer,
  viewPhotosBox,
} from "../../components/slugComponents/imageCarouselStyles";
import {featuredTitlePos} from "../../components/slugComponents/cardSlugs/cardStylesSlugs";
import ViewAllPhotos from "../../components/slugComponents/viewAllPhotos";

interface PropertyList {
  properties: Property[];
}

type ProjectsProps = Project & PropertyList;

const Projects = ({
  title,
  projectPropertyTypes,
  unitType,
  projectOffPlan,
  mainDeveloper,
  mainProjectImage,
  totalPrice,
  description,
  squareFootage,
  projectImages,
  amenities,
  location,
  properties,
}: ProjectsProps) => {
  const muiTheme = useTheme();

  const contentContainer = {
    pr: "12rem",
    pl: "12rem",
  };

  const titleContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: "3rem",
    textAlign: "center",
  };

  const titleStyle = {};

  const priceStyle = {
    ml: 2,
    fontSize: "1.3rem",
    p: "1rem",
    borderRadius: "0.5rem",
    backgroundColor: "#F1EDEE",
    color: "#3D3D3D",
  };

  const dividerStyles = {
    m: 3,
  };

  const mainSection = {};

  const unitTypeStyles = {};

  const mainDeveloperStyles = {};

  const projectTypeStyles = {};

  const offPlanStyles = {};

  const offPlanCompleteStyles = {};

  const bodyStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const squareFootageStyles = {};

  const descriptionStyles = {
    my: "1rem",
  };

  const amenityStyles = {
    maxWidth: 700,
    margin: "0 auto",
  };

  const priceBox = {};

  const priceButtonPos = {
    mt: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const buttonStyles = {
    "&:hover": {
      backgroundColor: muiTheme.palette.primary.light,
    },
    mb: "1rem",
  };

  const locationTitle = {};
  const mapCardPos = {
    mt: 3,
    mb: 3,
    pr: "12rem",
    pl: "12rem",
  };

  const mapCard = {
    width: "100%",
    height: "500px",
    borderRadius: "5px",
    overflow: "hidden",
    padding: "1rem",
  };

  return (
    <Box sx={mainContainer}>
      <Box sx={mainImageContainer}>
        <ImageCarousel
          mainImage={mainProjectImage}
          images={projectImages}
          alt={title}
        />
      </Box>
      <Box sx={viewPhotosBox}>
        <ViewAllPhotos
          mainImage={mainProjectImage}
          images={projectImages}
          alt={title}
        />
      </Box>
      <Box sx={contentContainer}>
        <Box sx={titleContainer}>
          <Typography variant="h2" sx={titleStyle}>
            {title}
          </Typography>
          <Typography variant="h5" sx={priceStyle}>
            {formatPrice(totalPrice)}
          </Typography>
        </Box>

        <Container>
          <Divider sx={dividerStyles} />

          <Box>
            <Typography variant="h6" sx={mainDeveloperStyles}>
              Developed by {mainDeveloper}
            </Typography>
          </Box>

          <Box>
            {projectOffPlan &&
            typeof projectOffPlan === "object" &&
            projectOffPlan.offplan ? (
              <Box>
                <Typography variant="body2" sx={offPlanStyles}>
                  Off-plan project
                </Typography>
                {projectOffPlan.completionDate && (
                  <Typography variant="body2" sx={offPlanCompleteStyles}>
                    Completion date: {projectOffPlan.completionDate}
                  </Typography>
                )}
              </Box>
            ) : (
              <Typography>Not an off-plan project</Typography>
            )}{" "}
          </Box>

          <Box sx={mainSection}>
            <Typography variant="body2" sx={projectTypeStyles}>
              Types of Housing Built: {projectPropertyTypes}
            </Typography>

            <Box>
              <Typography variant="body2" sx={unitTypeStyles}>
                Unit types {unitType}
              </Typography>
            </Box>

            <Box sx={bodyStyles}>
              <Typography variant="body2" sx={squareFootageStyles}>
                Built-up Area: {formatArea(squareFootage)}
              </Typography>
              <Typography variant="h6" sx={descriptionStyles}>
                {description}
              </Typography>
            </Box>
          </Box>

          <Divider sx={dividerStyles} />

          <Box sx={amenityStyles}>
            <AmenitiesCard amenities={amenities} />
          </Box>
        </Container>

        <Box sx={priceBox}>
          <Box sx={priceButtonPos}>
            <Link href="/contact">
              <GeneralButton variant="contained" sx={buttonStyles}>
                Contact
              </GeneralButton>
            </Link>
          </Box>
        </Box>

        <Divider>
          <Typography variant="h5" sx={featuredTitlePos}>
            Project Properties
          </Typography>
        </Divider>
      </Box>

        <Box sx={propertyContainer}>
          {properties?.slice(0, 3).map((property: Property) => (
            <Box key={property._id}>
              <ProjectPropertyCards properties={[property]} />
            </Box>
          ))}
        </Box>


      <Divider sx={dividerStyles} />
      <Box sx={mapCardPos}>
        <Card sx={mapCard}>
          <Typography variant="h3" sx={locationTitle}>
            Location
          </Typography>
          <MapSlug
            title={title}
            lat={location?.lat || 0}
            lng={location?.lng || 0}
          />
        </Card>
      </Box>
    </Box>
  );
};

export const getServerSideProps = async (pageContext: PageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "projects" && slug.current == $pageSlug][0]{
        title,
        projectPropertyTypes,
        unitType,
        projectOffPlan,
        mainDeveloper,
        mainProjectImage,
        totalPrice,
        description,
        squareFootage,
        projectImages,
        amenities,
        location,
        properties[]->{
          title,
          location,
          propertyType,
          mainPropertyImage,
          propertyImages,
          totalPrice,
          bathrooms,
          bedrooms,
          description,
          squareFootage,
          plottedArea,
          builtUpArea,
          amenities,
          slug,
        }
    }`;

  const projects = await sanityClient.fetch(query, { pageSlug });

  // console.log(projects);
  // console.log("Properties: ", projects.properties);

  if (!projects) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    const projectOffPlan =
      projects.projectOffPlan !== undefined ? projects.projectOffPlan : null;
    return {
      props: {
        title: projects.title,
        location: projects.location,
        projectPropertyTypes: projects.projectPropertyTypes,
        mainDeveloper: projects.mainDeveloper,
        projectOffPlan: projectOffPlan,
        unitType: projects.unitType,
        mainProjectImage: projects.mainProjectImage || null,
        projectImages: projects.projectImages,
        totalPrice: projects.totalPrice,
        description: projects.description,
        squareFootage: projects.squareFootage,
        amenities: projects.amenities,
        properties: projects.properties || null,
      },
    };
  }
};
export default Projects;
