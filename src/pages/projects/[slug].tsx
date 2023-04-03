import { sanityClient, urlFor } from "../../../sanity";
import { isMultiple, formatPrice, formatArea } from "../../../utils";
import Link from "next/link";
import Image from "next/image";
import { Box, Divider, Typography, Card, Container } from "@mui/material";
import GeneralButton from "../../components/general/GButton";
import ImageCarousel from "../../components/slugComponents/ImageGallerySlick";
import ProjectPropertyCards from '../../components/slugComponents/cardSlugs/ProjectPropertyCards'
import dynamic from "next/dynamic";
import AmenitiesCard from '../../components/slugComponents/AmenitiesSlug';
const MapSlug = dynamic(
  () => import("../../components/slugComponents/MapSlug"),
  {
    ssr: false,
  }
);

import { Project, Property, PageContext } from "../../../types";

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

  const mainContainer = {
    p: 2,
    maxWidth: 1200,
    margin: "0 auto",
    width: '100vw', // set width to 100vw
    mt: '5rem',
  };

  const titleContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const titleStyle = {};

  const priceStyle = {
    ml: 2,
    fontSize: "1.3rem",
  };

  const imageWrapper = {
    // display: "flex",
    // flexDirection: 'column',
    // justifyContent: "center",
  };

  const dividerStyles = {
    m: 10,
  };

  const mainSection = {
    mt: 2,
  };

  const mainBodyStyles = {};

  const bodyStyles = {
    mt: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const squareFootageStyles = {
    mt: 3,
    lineHeight: "1.5",
  };

  const descriptionStyles = {
    fontSize: "1.3rem",
  };

  const amenityStyles = {    
    maxWidth: 700,
    margin: "0 auto",
  };

  const priceBox = {};

  const priceButtonPos = {
    mt: '3rem',
  };

  const mapCardPos = {
    mt: 3,
  };

  const mapCard = {
    width: "100%",
    height: "500px",
    borderRadius: "5px",
    overflow: "hidden",
    padding: "1rem",
  };

  const locationTitle = {};

  const propertyContainer = {};

  return (
    <Box sx={mainContainer}>
      
      <Box sx={titleContainer}>
        <Typography variant="h2" sx={titleStyle}>
          {title}
        </Typography>
        <Typography variant="h5" sx={priceStyle}>
          {formatPrice(totalPrice)}
        </Typography>
      </Box>
      <Box sx={imageWrapper}>
        <ImageCarousel mainImage={mainProjectImage} images={projectImages} alt={title} />
      </Box>
      <Container>
      <Divider sx={dividerStyles} />

      <Box sx={mainSection}>
        <Typography variant="body2" sx={mainBodyStyles}>
          {projectPropertyTypes}
        </Typography>

        <Box>
          <Typography>{unitType}</Typography>
        </Box>

        <Box>
          <Typography>{mainDeveloper}</Typography>
        </Box>

        <Box>
          {projectOffPlan &&
          typeof projectOffPlan === "object" &&
          projectOffPlan.offplan ? (
            <Box>
              <Typography>Off-plan project</Typography>
              {projectOffPlan.completionDate && (
                <Typography>
                  Completion date: {projectOffPlan.completionDate}
                </Typography>
              )}
            </Box>
          ) : (
            <Typography>Not an off-plan project</Typography>
          )}{" "}
        </Box>

        <Box sx={bodyStyles}>
          <Typography variant="body2" sx={squareFootageStyles}>
            {formatArea(squareFootage)}
          </Typography>
          <Typography variant="body2" sx={descriptionStyles}>
            {description}
          </Typography>
        </Box>
      </Box>

      <Divider sx={dividerStyles} />

      <Box sx={amenityStyles}>
        <AmenitiesCard amenities={amenities}/>
      </Box>
      </Container>
      <Box sx={priceBox}>
        <Typography variant="h5">Price: {formatPrice(totalPrice)}</Typography>
        <Box sx={priceButtonPos}>
          <Link href="/contact">
            <GeneralButton variant="contained">Contact</GeneralButton>
          </Link>
        </Box>
      </Box>

      <Divider sx={dividerStyles} />

      <Box sx={propertyContainer}>
        <ProjectPropertyCards properties={properties}/> 
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
