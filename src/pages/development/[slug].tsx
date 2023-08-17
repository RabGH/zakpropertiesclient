import { sanityClient } from "@lib/sanity";
import { getAllDeveloperSlugs } from "@lib/getStaticPaths";
import {
  formatPrice,
  formatArea,
  formatNumberWithCommas,
  isMultiple,
} from "@lib/utils";
import Link from "next/link";
import { Box, Divider, Typography, Button } from "@mui/material";
import { Project, Developer, Development, PageContext } from "@lib/types";
import DevelopmentAmenities from "@/components/slugComponents/pageSlugComponents/amenities/DevelopmentAmenities";
import ImageCarousel from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/ImageGallerySlick";
import ViewAllPhotos from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/viewAllPhotos";
import { getImageCarouselStyles } from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/imageCarouselStyles";
import { getDevelopmentPageStyles } from "@/components/slugComponents/pageSlugComponents/pageSlugStyles/developmentSlugStyles";
import dynamic from "next/dynamic";

interface ProjectList {
  projects: Project[];
}

type DevelopmentProps = Development & ProjectList;

const Developments = ({
  _id,
  title,
  description,
  createdAt,
  developmentPropertyTypes,
  mainDevelopmentImage,
  developmentImages,
  developmentsDeveloper,
  developmentProjects,
  developmentAveragePrice,
  addresses,
  developmentBuiltUpArea,
  bulletPoints,
  developmentAmenities,
  presentation,
}: DevelopmentProps) => {
  const styles = getDevelopmentPageStyles();
  const imageStyles = getImageCarouselStyles();

  return (
    <>
      <Box sx={imageStyles.mainContainer}>
        <Box sx={imageStyles.mainImageContainer}>
          <ImageCarousel
            mainImage={mainDevelopmentImage}
            images={developmentImages}
            alt={title}
          />
        </Box>

        <Box sx={imageStyles.viewPhotosBox}>
          <ViewAllPhotos
            mainImage={mainDevelopmentImage}
            images={developmentImages}
            alt={title}
          />
        </Box>
      </Box>
    </>
  );
};

export async function getStaticPaths() {
  const paths = await getAllDeveloperSlugs();

  return { paths, fallback: false };
}

export async function getStaticProps(context: PageContext) {
  const slug = context.params.slug;
  const query = `*[ _type == "development" && slug.current == $slug][0]{
    _id,
    title,
    description,
    createdAt,
    developmentPropertyTypes[],
    mainDevelopmentImage,
    developmentImages[],
    developmentDeveloper,
    developmentProjects[],
    developmentAveragePrice[],
    addresses[]->{
    street,
      city,
      location->{
        lat,
        lng,
      },
    },
    developmentBuildUpArea[],
    bulletPoints[],
    developmentAmenities->{
        name,
        developmentsAmenities[],
    },
    presentation,
  }`;

  const development = await sanityClient.fetch(query, { slug });

  if (!development) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        _id: development._id,
        title: development.title,
        description: development.description,
        createdAt: development.createdAt ?? null,
        location: development.location,
        developmentPropertyTypes: development.developmentPropertyTypes ?? [],
        mainDevelopmentImage: development.mainDevelopmentImage ?? null,
        developmentImages: development.developmentImages ?? [],
        developmentDeveloper: development.developmentDeveloper ?? null,
        developmentProjects: development.developmentProjects ?? [],
        developmentAveragePrice: development.developmentAveragePrice ?? [],
        addresses: development.addresses ?? [],
        developmentBuildUpArea: development.developmentBuildUpArea ?? [],
        bulletPoints: development.bulletPoints ?? [],
        developmentAmenities: development.developmentAmenities ?? [],
        presentation: development.presentation ?? null,
      },
      revalidate: 60,
    };
  }
}

export default Developments;
