import { sanityClient } from "@lib/sanity";
import { getAllProjectSlugs } from "@lib/getStaticPaths";
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
import { CardStyles } from "@/components/slugComponents/cardSlugs/cardComponents/cardStyles";
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
  const cardStyles = CardStyles();
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
            {/* <Typography variant="body1">
              Street and City: {address.street}, {address.city}
            </Typography> */}
            {/* <Typography variant="body1">Address: {specificAddress}</Typography> */}
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
          <Typography variant="h5">Project Properties</Typography>
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
    </Box>
  );
};

export async function getStaticPaths() {
  const paths = await getAllProjectSlugs();

  return { paths, fallback: true };
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;

  const query = `*[ _type == "projects" && slug.current == $slug][0]{
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

  const project = await sanityClient.fetch(query, { slug });

  if (!project) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    const projectOffPlan =
      project.projectOffPlan !== undefined ? project.projectOffPlan : null;
    return {
      props: {
        id: project.id,
        title: project.title,
        location: project.location,
        projectPropertyTypes: project.projectPropertyTypes,
        mainDeveloper: project.mainDeveloper,
        projectOffPlan: projectOffPlan,
        unitType: project.unitType,
        projectImages: project.projectImages,
        totalPrice: project.totalPrice,
        description: project.description,
        squareFootage: project.squareFootage,
        amenities: project.amenities || [],
        areaType: project.areaType || [],
        specificAddress: project.specificAddress || null,
        address: project.address || null,
        projectBuiltUpArea: project.projectBuiltUpArea,
        projectType: project.projectType,
        mainProjectImage: project.mainProjectImage || null,
        properties: project.properties || null,
        numFloors: project.numFloors || null,
        numUnits: project.numUnits || null,
        numVillas: project.numVillas || null,
        bedrooms: project.bedrooms || null,
      },
      revalidate: 60, 
    };
  }
}

export default Projects;
