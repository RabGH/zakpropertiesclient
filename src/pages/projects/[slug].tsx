import { sanityClient } from "@lib/sanity";
import { getAllProjectSlugs } from "@lib/getStaticPaths";
import {
  formatPrice,
  formatArea,
  formatNumberWithCommas,
  isMultiple,
} from "@lib/utils";
import Link from "next/link";
import { Box, Divider, Typography, Button } from "@mui/material";
import ImageCarousel from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/ImageGallerySlick";
import ViewAllPhotos from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/viewAllPhotos";
import AmenitiesCard from "@/components/slugComponents/pageSlugComponents/amenitiesFeatures/AmenitiesSlug";
import LifeStyle from "@/components/slugComponents/pageSlugComponents/miscellaneousSlugComponents/LifeStyle";
import { Project, Property } from "@lib/types";
import {
  mainContainer,
  mainImageContainer,
  viewPhotosBox,
} from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/imageCarouselStyles";
import { getProjectPageStyles } from "@/components/slugComponents/pageSlugComponents/pageSlugStyles/projectSlugStyles";
import dynamic from "next/dynamic";
import PropertyAllCard from "@/components/slugComponents/cardSlugs/propertyCards/PropertyAllCards";

interface PageContext {
  query: {
    slug: string;
  };
  params: {
    slug: string;
  };
}

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
  projectType,
  projectPropertyTypes,
  projectOffPlan,
  mainDeveloper,
  mainProjectImage,
  totalPrice,
  averagePrice,
  description,
  presentation,
  projectImages,
  projectBuiltUpArea,
  numFloors,
  numUnits,
  numOfHouses,
  areaType,
  bedrooms,
  amenities,
  location,
  address,
  specificAddress,
  properties,
}: ProjectsProps) => {
  const styles = getProjectPageStyles();

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
      </Box>
      <Box sx={styles.mainSection}>
        <Typography variant="h1" sx={styles.titleStyle}>
          {title} by {mainDeveloper} ID: ({id})
        </Typography>
        <Typography variant="body1" sx={styles.descriptionStyles}>
          {description}
        </Typography>
        <Button href="/contactUs" variant="contained" sx={styles.buttonStyles}>
          Request Information
        </Button>
      </Box>
      <Box sx={styles.projectInfoStyles}>
        <Typography variant="h3" sx={styles.projectInfoTitleStyles}>
          Project's Information
        </Typography>
        <Divider sx={styles.dividerStyles} />
        <Typography variant="h3" sx={styles.projectPriceStyles}>
          Price
        </Typography>
        <Typography variant="h4" sx={styles.projectPriceStyles}>
          {formatPrice(totalPrice)}
        </Typography>
        <Divider sx={styles.dividerStyles} />
        <Typography variant="h3" sx={styles.projectBedroomStyles}>
          Bedrooms
        </Typography>
        <Typography variant="h4" sx={styles.projectBedroomStyles}>
          {bedrooms}
        </Typography>
        <Divider sx={styles.dividerStyles} />
        <Typography variant="h3" sx={styles.projectBuiltUpStyles}>
          Built up area
        </Typography>
        <Typography variant="h4" sx={styles.projectBuiltUpStyles}>
          {projectBuiltUpArea
            ? `${formatNumberWithCommas(projectBuiltUpArea[0])} - ${formatArea(
                projectBuiltUpArea[1]
              )}`
            : "N/A"}
        </Typography>
        <Divider sx={styles.dividerStyles} />

        {projectType === "building" ? (
          <>
            <Typography variant="h3" sx={styles.projectNumFloorsStyles}>
              Number of floors
            </Typography>
            <Typography variant="h4" sx={styles.projectNumFloorsStyles}>
              {numFloors}
            </Typography>
            <Divider sx={styles.dividerStyles} />
            <Typography variant="h3" sx={styles.projectNumUnitsStyles}>
              Number of units
            </Typography>
            <Typography variant="h4" sx={styles.projectNumUnitsStyles}>
              {numUnits}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h3" sx={styles.projectNumOfHousesStyles}>
              Number of houses
            </Typography>
            <Typography variant="h4" sx={styles.projectNumOfHousesStyles}>
              {numOfHouses}
            </Typography>
          </>
        )}
        <Divider sx={styles.dividerStyles} />
        <Typography variant="h3" sx={styles.projectPropertyTypesStyles}>
          Unit types
        </Typography>
        <Typography variant="h4" sx={styles.projectPropertyTypesStyles}>
          {`${projectPropertyTypes.join(" ")}`}
        </Typography>
        <Divider sx={styles.dividerStyles} />
        <Box sx={styles.lifeBoxStyles}>
          <LifeStyle areaType={areaType} />
        </Box>
        <Divider sx={styles.dividerStyles} />
        <Box sx={styles.amenitiesSlugPos}>
          <AmenitiesCard amenities={amenities} />
        </Box>
        <Divider sx={styles.dividerStyles} />
        <Box sx={styles.projectLocationPos}>
          <MapSlug
            title={title}
            lat={location?.lat || 0}
            lng={location?.lng || 0}
            address={address}
            specificAddress={specificAddress}
          />
        </Box>
      </Box>

      <Box sx={styles.projectPresentationBoxStyles}>
        <Typography variant="h3" sx={styles.projectPresentationTitleStyles}>
          Presentation
        </Typography>
        <Typography variant="body1" sx={styles.presentationStyles}>
          {presentation}
        </Typography>
        <Button variant="contained" sx={styles.buttonStyles} href="/contactUs">
          Contact for more
        </Button>
      </Box>
      <Box sx={styles.projectPropertiesTitleStyles}>
        <Divider>
          <Typography variant="h3">Project Properties</Typography>
        </Divider>
      </Box>
      <Box sx={styles.projectPropertyContainer}>
        {properties?.slice(0, 3).map((property: Property) => (
          <Box sx={styles.projectPropertyItem}>
            <PropertyAllCard property={property} />
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
    </>
  );
};

export async function getStaticPaths() {
  const paths = await getAllProjectSlugs();

  return { paths, fallback: false };
}

export async function getStaticProps(context: PageContext) {
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
    averagePrice,
    description,
    presentation,
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
    numOfHouses,
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
      address->{
        street,
        city,
      },
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
        location: project.location ?? null,
        projectPropertyTypes: project.projectPropertyTypes ?? null,
        mainDeveloper: project.mainDeveloper ?? null,
        projectOffPlan: project.projectOffPlan ?? null,
        unitType: project.unitType ?? null,
        projectImages: project.projectImages ?? null,
        totalPrice: project.totalPrice ?? null,
        averagePrice: project.averagePrice ?? null,
        description: project.description,
        presentation: project.presentation,
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
        numOfHouses: project.numOfHouses ?? null,
        bedrooms: project.bedrooms ?? null,
      },
      revalidate: 60,
    };
  }
}

export default Projects;
