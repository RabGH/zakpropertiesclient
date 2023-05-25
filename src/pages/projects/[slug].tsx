import { sanityClient } from "@lib/sanity";
import { formatPrice, formatArea } from "@lib/utils";
import Link from "next/link";
import {
  Box,
  Divider,
  Typography,
  Card,
  Container,
  Button,
} from "@mui/material";
import ImageCarousel from "@/components/slugComponents/pageSlugComponents/ImageGallerySlick";
import ProjectPropertyCards from "@/components/slugComponents/cardSlugs/projectCards/ProjectPropertyCards";
import { propertyContainer } from "@/components/slugComponents/cardSlugs/projectCards/ProjectPropertyCards";
import dynamic from "next/dynamic";
import AmenitiesCard, {
  amenityStyles,
} from "@/components/slugComponents/amenitiesFeatures/AmenitiesSlug";
import { Project, Property, PageContext } from "@lib/types";
import {
  mainContainer,
  mainImageContainer,
  viewPhotosBox,
} from "@/components/slugComponents/pageSlugComponents/imageCarouselStyles";
import { featuredTitlePos } from "@/components/slugComponents/cardSlugs/cardComponents/cardStyles";
import ViewAllPhotos from "@/components/slugComponents/pageSlugComponents/viewAllPhotos";

import { getProjectPageStyles } from "@/components/pageComponents/pageSlugStyles/projectSlugStyles";
// import { getGeneralSlugStyles } from "../../components/pageComponents/pageSlugStyles/generalSlugStyles";

const MapSlug = dynamic(
  () => import("../../components/slugComponents/pageSlugComponents/MapSlug"),
  {
    ssr: false,
  }
);
interface PropertyList {
  properties: Property[];
}

type ProjectsProps = Project & PropertyList;

const Projects = ({
  id,
  _id,
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
  areaType,
  bedrooms,
  amenities,
  location,
  address,
  specificAddress,
  properties,
}: ProjectsProps) => {
  const styles = getProjectPageStyles();
  // const generalStyles = getGeneralSlugStyles();

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
      <Box sx={styles.contentContainer}>
        <Box sx={styles.titleContainer}>
          <Typography variant="h2" sx={styles.titleStyles}>
            {title}
          </Typography>
          <Typography variant="h5" sx={styles.priceStyles}>
            {formatPrice(totalPrice)}
          </Typography>
        </Box>

        <Container>
          <Divider sx={styles.dividerStyles} />

          <Box>
            <Typography variant="h6" sx={styles.mainDeveloperStyles}>
              Developed by {mainDeveloper}
            </Typography>
            <Typography variant="body1">
              Street and City: {address.street}, {address.city}
            </Typography>
            <Typography variant="body1">Address: {specificAddress}</Typography>
          </Box>

          <Box sx={styles.offPlanStyles}>
            {projectOffPlan &&
            typeof projectOffPlan === "object" &&
            projectOffPlan.offplan ? (
              <Box>
                <Typography variant="body1" sx={styles.offPlanTextStyles}>
                  Off-plan project
                </Typography>
                {projectOffPlan.completionDate && (
                  <Typography variant="body1" sx={styles.offPlanCompleteStyles}>
                    Completion date: {projectOffPlan.completionDate}
                  </Typography>
                )}
              </Box>
            ) : (
              <Typography>Ready to buy Properties</Typography>
            )}{" "}
          </Box>

          <Box sx={styles.mainSection}>
            <Box>
              <Typography variant="body1" sx={styles.projectTypeStyles}>
                Types of Housing Built: {projectPropertyTypes}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" sx={styles.unitTypeStyles}>
                Unit types {unitType}
              </Typography>
              <Typography variant="body1" sx={styles.areaTypeStyles}>
                Type of Area: {areaType}
              </Typography>
              <Typography variant="body1" sx={styles.projectBedroomStyles}>
                Number of Bedrooms: {bedrooms}
              </Typography>
            </Box>

            <Box sx={styles.bodyStyles}>
              <Typography variant="body1" sx={styles.squareFootageStyles}>
                Built-up Area: {formatArea(squareFootage)}
              </Typography>
              <Typography variant="body1" sx={styles.projectBuiltUpAreaStyles}>
                Total Project Area: {formatArea(projectBuiltUpArea)}
              </Typography>
              <Typography variant="h6" sx={styles.descriptionStyles}>
                {description}
              </Typography>
            </Box>
          </Box>

          <Divider sx={styles.dividerStyles} />

          <Box sx={amenityStyles}>
            <AmenitiesCard amenities={amenities} />
          </Box>
        </Container>

        <Box sx={styles.priceBox}>
          <Box sx={styles.priceButtonPos}>
            <Link href="/contact">
              <Button variant="contained" sx={styles.buttonStyles}>
                Learn More
              </Button>
            </Link>
            <Link href="/developments">
              <Button
                variant="contained"
                sx={styles.viewMoreDevelopmentsStyles}
              >
                View More Developments
              </Button>
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
      <Box sx={styles.viewMoreProperties}>
        <Link href="/buyProperties">
          <Button variant="contained" sx={styles.buttonStyles}>
            View More Properties
          </Button>
        </Link>
      </Box>
      <Divider sx={styles.dividerStyles} />
      <Box sx={styles.mapCardPos}>
        <Card sx={styles.mapCard}>
          <Typography variant="h3" sx={styles.locationTitle}>
            Location
          </Typography>
          {/* <MapSlug
            title={title}
            lat={location?.lat || 0}
            lng={location?.lng || 0}
          /> */}
        </Card>
      </Box>
    </Box>
  );
};

export const getServerSideProps = async (pageContext: PageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "projects" && slug.current == $pageSlug][0]{
      id,
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
      location,
      address->{
        street,
        city,
      },
      areaType,
      specificAddress,
      projectBuiltUpArea,
      projectType,
      numFloors,
      numUnits,
      numVillas,
      bedrooms,
      amenities->{
        name,
        amenities[],
        },
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

  console.log(projects);
  console.log("Properties: ", projects.properties);

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
        id: projects.id,
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
        amenities: projects.amenities || [],
        areaType: projects.areaType || [],
        specificAddress: projects.specificAddress,
        address: projects.address,
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
