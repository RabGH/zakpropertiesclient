import { sanityClient } from "../../../lib/sanity";
import { formatPrice, formatArea } from "../../../lib/utils";
import Link from "next/link";
import { Box, Divider, Typography, Card, Container } from "@mui/material";
import GeneralButton from "../../components/general/GButton";
import ImageCarousel from "../../components/slugComponents/ImageGallerySlick";
import ProjectPropertyCards from "../../components/slugComponents/cardSlugs/ProjectPropertyCards";
import { propertyContainer } from "../../components/slugComponents/cardSlugs/ProjectPropertyCards";
import dynamic from "next/dynamic";
import AmenitiesCard, {
  amenityStyles,
} from "../../components/slugComponents/amenitiesFeatures/AmenitiesSlug";
import { Project, Property, PageContext } from "../../../lib/types";
import {
  mainContainer,
  mainImageContainer,
  viewPhotosBox,
} from "../../components/slugComponents/imageCarouselStyles";
import { featuredTitlePos } from "../../components/slugComponents/cardSlugs/cardComponents/cardStylesSlugs";
import ViewAllPhotos from "../../components/slugComponents/viewAllPhotos";

import { getProjectPageStyles } from "../../components/slugComponents/pageSlugStyles/projectSlugStyles";
import { getGeneralSlugStyles } from "../../components/slugComponents/pageSlugStyles/generalSlugStyles";

const MapSlug = dynamic(
  () => import("../../components/slugComponents/MapSlug"),
  {
    ssr: false,
  }
);
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
  projectBuiltUpArea,
  numFloors,
  numUnits,
  numVillas,
  bedrooms,
  amenities,
  location,
  properties,
}: ProjectsProps) => {
  const styles = getProjectPageStyles();
  const generalStyles = getGeneralSlugStyles();

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
      <Box sx={generalStyles.contentContainer}>
        <Box sx={generalStyles.titleContainer}>
          <Typography variant="h2" sx={generalStyles.titleStyle}>
            {title}
          </Typography>
          <Typography variant="h5" sx={generalStyles.priceStyle}>
            {formatPrice(totalPrice)}
          </Typography>
        </Box>

        <Container>
          <Divider sx={generalStyles.dividerStyles} />

          <Box>
            <Typography variant="h6" sx={styles.mainDeveloperStyles}>
              Developed by {mainDeveloper}
            </Typography>
          </Box>

          <Box sx={generalStyles.offPlanStyles}>
            {projectOffPlan &&
            typeof projectOffPlan === "object" &&
            projectOffPlan.offplan ? (
              <Box>
                <Typography
                  variant="body2"
                  sx={generalStyles.offPlanTextStyles}
                >
                  Off-plan project
                </Typography>
                {projectOffPlan.completionDate && (
                  <Typography
                    variant="body2"
                    sx={generalStyles.offPlanCompleteStyles}
                  >
                    Completion date: {projectOffPlan.completionDate}
                  </Typography>
                )}
              </Box>
            ) : (
              <Typography>Ready to buy Properties</Typography>
            )}{" "}
          </Box>

          <Box sx={generalStyles.mainSection}>
            <Typography variant="body2" sx={styles.projectTypeStyles}>
              Types of Housing Built: {projectPropertyTypes}
            </Typography>

            <Box>
              <Typography variant="body2" sx={styles.unitTypeStyles}>
                Unit types {unitType}
              </Typography>
            </Box>

            <Box sx={generalStyles.bodyStyles}>
              <Typography variant="body2" sx={styles.squareFootageStyles}>
                Built-up Area: {formatArea(squareFootage)}
              </Typography>
              <Typography variant="h6" sx={generalStyles.descriptionStyles}>
                {description}
              </Typography>
            </Box>
          </Box>

          <Divider sx={generalStyles.dividerStyles} />

          <Box sx={amenityStyles}>
            <AmenitiesCard amenities={amenities} />
          </Box>
        </Container>

        <Box sx={generalStyles.priceBox}>
          <Box sx={generalStyles.priceButtonPos}>
            <Link href="/contact">
              <GeneralButton
                variant="contained"
                sx={generalStyles.buttonStyles}
              >
                Learn More
              </GeneralButton>
            </Link>
            <Link href="/developments">
              <GeneralButton
                variant="contained"
                sx={generalStyles.buttonStyles}
              >
                View More Developments
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
      <Link href="/buyProperties">
        <GeneralButton variant="contained" sx={generalStyles.buttonStyles}>
          View More Properties
        </GeneralButton>
      </Link>
      <Divider sx={generalStyles.dividerStyles} />
      <Box sx={styles.mapCardPos}>
        <Card sx={generalStyles.mapCard}>
          <Typography variant="h3" sx={generalStyles.locationTitle}>
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
        projectBuiltUpArea,
        projectType,
        numFloors,
        numUnits,
        numVillas,
        bedrooms,
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
          features,
          propertyOffPlan,
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
        projectImages: projects.projectImages,
        totalPrice: projects.totalPrice,
        description: projects.description,
        squareFootage: projects.squareFootage,
        amenities: projects.amenities,
        projectBuiltUpArea: projects.projectBuiltUpArea,
        projectType: projects.projectType,
        mainProjectImage: projects.mainProjectImage || null,
        properties: projects.properties || null,
        numFloors: projects.numFloors || null,
        numUnits: projects.numUnits || null,
        numVillas: projects.numVillas || null,
        bedrooms: projects.bedrooms || null,
      },
    };
  }
};
export default Projects;
