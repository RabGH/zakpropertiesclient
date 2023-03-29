import { sanityClient, urlFor } from "../../../sanity";
import { isMultiple, formatPrice, formatArea } from "../../../utils";
import Link from "next/link";
import Image from "next/image";
import { Box, Divider, Typography, Card } from "@mui/material";
import GeneralButton from "../../components/general/GButton";
import ImageCarousel from "../../components/slugComponents/ImageGallery";
import dynamic from "next/dynamic";
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
  const mainContainer = {};

  const titleContainer = {};

  const titleStyle = {};

  const priceStyle = {};

  const dividerStyles = {};

  const mainSection = {};

  const mainBodyStyles = {};

  const bodyStyles = {};

  const squareFootageStyles = {};

  const descriptionStyles = {};

  const amenityStyles = {};

  const amenitiesCardStyles = {};

  const priceBox = {};

  const priceButtonPos = {};

  const mapCardPos = {};

  const mapCard = {};

  const locationTitle = {};

  const mainPropertiesContainer = {};

  const PropertiesCardPos = {};

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
      <ImageCarousel mainImage={mainProjectImage} subImages={projectImages} />

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
        <Card sx={{ p: 2 }}>
          <Typography variant="h3">Amenities</Typography>
          <Box sx={amenitiesCardStyles}>{amenities}</Box>
        </Card>
      </Box>

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
        {properties.map((property: Property) => (
          <Box key={property._id} sx={mainPropertiesContainer}>
            <Box sx={PropertiesCardPos}>
              <Card>
                {property.mainPropertyImage && (
                  <Image
                    width={800}
                    height={600}
                    src={urlFor(property.mainPropertyImage)
                      .auto("format")
                      .url()}
                    alt={property.title}
                  />
                )}
                <Typography variant="h1">{property.title}</Typography>
                <Typography variant="h6">
                  {formatPrice(property.totalPrice)}
                </Typography>
              </Card>
            </Box>
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
          _id,
          title,
          mainPropertyImage,
          totalPrice,
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
