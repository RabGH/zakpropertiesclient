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
import ProjectAmenities from "@/components/slugComponents/pageSlugComponents/amenities/ProjectAmenities";
import LifeStyle from "@/components/slugComponents/pageSlugComponents/miscellaneousSlugComponents/LifeStyle";
import { Project, Property, Developer, PageContext } from "@lib/types";
import { getImageCarouselStyles } from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/imageCarouselStyles";
import { getProjectPageStyles } from "@/components/slugComponents/pageSlugComponents/pageSlugStyles/projectSlugStyles";
import dynamic from "next/dynamic";
import PropertyAllCard from "@/components/slugComponents/cardSlugs/propertyCards/PropertyAllCards";

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
  _id,
  title,
  description,
  createdAt,
  projectType,
  projectPropertyTypes,
  mainProjectImage,
  totalPrice,
  averagePrice,
  presentation,
  projectImages,
  projectBuiltUpArea,
  numFloors,
  numUnits,
  numOfHouses,
  projectAreaTypes,
  bedrooms,
  projectAmenities,
  address,
  specificAddress,
  properties,
  projectDevelopment,
  projectDeveloper,
  paymentPlans,
  projectStatus,
}: ProjectsProps) => {
  const styles = getProjectPageStyles();
  const imageStyles = getImageCarouselStyles();

  return (
    <>
      <Box sx={imageStyles.mainContainer}>
        <Box sx={imageStyles.mainImageContainer}>
          <ImageCarousel
            mainImage={mainProjectImage}
            images={projectImages}
            alt={title}
          />
        </Box>

        <Box sx={imageStyles.viewPhotosBox}>
          <ViewAllPhotos
            mainImage={mainProjectImage}
            images={projectImages}
            alt={title}
          />
        </Box>
      </Box>
      <Box sx={styles.mainSection}>
        <Typography variant="h1" sx={styles.titleStyle}>
          {title} by {projectDeveloper?.name}
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
          {averagePrice
            ? `${formatPrice(averagePrice[0])} - ${formatNumberWithCommas(
                averagePrice[1]
              )}`
            : `${formatPrice(totalPrice)}`}
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
          <LifeStyle areaType={projectAreaTypes} />
        </Box>
        <Divider sx={styles.dividerStyles} />
        <Box sx={styles.amenitiesSlugPos}>
          <ProjectAmenities projectAmenities={projectAmenities} />
        </Box>
        <Divider sx={styles.dividerStyles} />
        {address && (
          <Box sx={styles.projectLocationPos}>
            <MapSlug
              title={title}
              address={{
                street: address.street,
                city: address.city,
                location: {
                  lat: address.location?.lat ?? 0,
                  lng: address.location?.lng ?? 0,
                },
              }}
              specificAddress={specificAddress ?? ""}
            />
          </Box>
        )}
        <Divider sx={styles.dividerStyles} />
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
          <Box key={property._id}>
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

  const query = `*[ _type == "project" && slug.current == $slug][0]{
    _id,
    title,
    description,
    createdAt,
    projectPropertyTypes[],
    mainProjectImage,
    projectImages,
    projectDeveloper->{
      _id,
      name,
      logo,
      website,
    },
    projectAreaTypes[],
    totalPrice,
    averagePrice[],
    address->{
      street,
      city,
      location,
    },
    specificAddress,
    projectBuiltUpArea,
    projectType,
    numFloors,
    numUnits,
    numOfHouses,
    bedrooms,
    projectAmenities->{
      name,
      projectsAmenities[],
    },
    presentation,
    projectDevelopment->{

    },
    projectStatus,
    properties[]->{
      _id,
      slug,
      mainPropertyImage,
      propertyImages[],
      propertyType,
      title,
      address->{
        street,
        city,
        location,
      },
      specificAddress,
      propertyOffPlan->{
        offplan,
        propertyCompletionDate,
      },
      totalPrice,
      paymentPlan,
      bedrooms,
      bathrooms,
      builtUpArea,
    },
    paymentPlans[],
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
        _id: project._id,
        title: project.title,
        description: project.description ?? null,
        createdAt: project.createdAt ?? null,
        location: project.location ?? null,
        projectPropertyTypes: project.projectPropertyTypes ?? null,
        mainProjectImage: project.mainProjectImage ?? null,
        projectImages: project.projectImages ?? null,
        projectDeveloper: project.projectDeveloper ?? null,
        projectAreaTypes: project.projectAreaTypes ?? [],
        totalPrice: project.totalPrice ?? null,
        averagePrice: project.averagePrice ?? null,
        address: project.address ?? null,
        specificAddress: project.specificAddress ?? null,
        projectBuiltUpArea: project.projectBuiltUpArea ?? null,
        projectType: project.projectType ?? null,
        numFloors: project.numFloors ?? null,
        numUnits: project.numUnits ?? null,
        numOfHouses: project.numOfHouses ?? null,
        bedrooms: project.bedrooms ?? null,
        projectAmenities: project.projectAmenities ?? [],
        presentation: project.presentation ?? null,
        projectDevelopment: project.projectDevelopment ?? null,
        projectStatus: project.projectStatus ?? null,
        properties: project.properties ?? [],
        paymentPlans: project.paymentPlan ?? [],
      },
      revalidate: 60,
    };
  }
}

export default Projects;
