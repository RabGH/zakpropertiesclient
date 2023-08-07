// developer page
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
import { Project, Property, Developer, PageContext } from "@lib/types";
import ImageCarousel from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/ImageGallerySlick";
import ViewAllPhotos from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/viewAllPhotos";
import {
  mainContainer,
  mainImageContainer,
  viewPhotosBox,
} from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/imageCarouselStyles";
import { getDeveloperPageStyles } from "@/components/slugComponents/pageSlugComponents/pageSlugStyles/developerSlugStyles";
import dynamic from "next/dynamic";

interface ProjectList {
  projects: Project[];
}

type DeveloperProps = Developer & ProjectList;

const Developers = ({
  id,
  _id,
  name,
  logo,
  description,
  website,
  averagePricing,
  developerBuiltUpArea,
  addresses,
  propertyTypes,
  projects,
  areaType,
  slug,
  mainDeveloperImage,
  developerImages,
}: DeveloperProps) => {
  const styles = getDeveloperPageStyles();

  return (
    <>
      <Box sx={mainContainer}>
        <Box sx={mainImageContainer}>
          <ImageCarousel
            mainImage={mainDeveloperImage}
            images={developerImages}
            alt={name}
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
  const query = `*[ _type == "developer" && slug.current == $slug][0]{
    id,
    _id,
    createdAt,
    name,
    logo,
    description,
    website,
    averagePricing,
    developerBuiltUpArea[],
    addresses[],
    propertyTypes[],
    projects[],
    developerImages[],
    mainDeveloperImage,
  }`;

  const developer = await sanityClient.fetch(query, { slug });

  if (!developer) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        id: developer.id,
        _id: developer._id,
        createdAt: developer.createdAt ?? null,
        name: developer.name,
        logo: developer.logo ?? null,
        description: developer.description ?? null,
        website: developer.website ?? null,
        averagePricing: developer.averagePricing ?? null,
        developerBuiltUpArea: developer.developerBuiltUpArea ?? [],
        addresses: developer.addresses ?? [],
        propertyTypes: developer.propertyTypes ?? [],
        projects: developer.projects ?? [],
        areaType: developer.areaType ?? [],
        mainDeveloperImage: developer.mainDeveloperImage ?? null,
        developerImages: developer.developerImages ?? null,
      },
      revalidate: 60,
    };
  }
}

export default Developers;
