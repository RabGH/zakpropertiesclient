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
import ImageCarousel from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/ImageGallerySlick";
import ProjectPropertyCards from "@/components/slugComponents/cardSlugs/projectCards/ProjectPropertyCards";
import { propertyContainer } from "@/components/slugComponents/cardSlugs/projectCards/ProjectPropertyCards";
import dynamic from "next/dynamic";
import AmenitiesCard, {
  amenityStyles,
} from "@/components/slugComponents/pageSlugComponents/amenitiesFeatures/AmenitiesSlug";
import { Project, Property, PageContext } from "@lib/types";
import {
  mainContainer,
  mainImageContainer,
  viewPhotosBox,
} from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/imageCarouselStyles";
import { CardStyles } from "@/components/slugComponents/cardSlugs/cardComponents/cardStyles";
import ViewAllPhotos from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/viewAllPhotos";

import { getProjectPageStyles } from "@/components/slugComponents/pageSlugComponents/pageSlugStyles/projectSlugStyles";
// import { getGeneralSlugStyles } from "../../components/pageComponents/pageSlugStyles/generalSlugStyles";

const MapSlug = dynamic(
  () =>
    import(
      "@/components/slugComponents/pageSlugComponents/miscellaneousSlugComponents/MapSlug"
    ),
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
    <>
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
        <Box sx={styles.mainSection}>
          <Typography variant="h3" sx={styles.titleStyle}>
            {title}
          </Typography>
          <Typography variant="h6" sx={styles.descriptionStyles}>
            {description}
          </Typography>
        </Box>

        <Divider>
          <Typography variant="h5">Project Properties</Typography>
        </Divider>

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
    </>
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
    return {
      props: {
        id: project.id,
        _id: project._id,
        title: project.title,
        location: project.location,
        projectPropertyTypes: project.projectPropertyTypes,
        mainDeveloper: project.mainDeveloper,
        projectOffPlan: project.projectOffPlan ?? null,
        unitType: project.unitType,
        projectImages: project.projectImages ?? null,
        totalPrice: project.totalPrice,
        description: project.description,
        squareFootage: project.squareFootage,
        amenities: project.amenities ?? [],
        areaType: project.areaType ?? [],
        specificAddress: project.specificAddress ?? null,
        address: project.address ?? null,
        projectBuiltUpArea: project.projectBuiltUpArea,
        projectType: project.projectType,
        mainProjectImage: project.mainProjectImage ?? null,
        properties: project.properties ?? null,
        numFloors: project.numFloors ?? null,
        numUnits: project.numUnits ?? null,
        numVillas: project.numVillas ?? null,
        bedrooms: project.bedrooms ?? null,
      },
      revalidate: 60,
    };
  }
}

export default Projects;
