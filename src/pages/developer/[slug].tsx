import { sanityClient } from "@lib/sanity";
import { getAllDeveloperSlugs } from "@lib/getStaticPaths";
import {
  formatPrice,
  formatArea,
  formatNumberWithCommas,
  isMultiple,
} from "@lib/utils";
import Link from "next/link";
import { Box, Divider, Typography, Button, Container } from "@mui/material";
import { Development, Developer, PageContext } from "@lib/types";
import ImageCarousel from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/ImageGallerySlick";
import ViewAllPhotos from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/viewAllPhotos";
import { getImageCarouselStyles } from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/imageCarouselStyles";
import { getDeveloperPageStyles } from "@/components/slugComponents/pageSlugComponents/pageSlugStyles/developerSlugStyles";
import dynamic from "next/dynamic";

interface DevelopmentList {
  developments: Development[];
}

type DeveloperProps = Developer & DevelopmentList;

const Developers = ({
  _id,
  name,
  createdAt,
  logo,
  mainDeveloperImage,
  developerImages,
  description,
  website,
  developerDevelopments,
  developerProjects,
}: DeveloperProps) => {
  const styles = getDeveloperPageStyles();
  const imageStyles = getImageCarouselStyles();

  return (
    <>
      <Box sx={imageStyles.mainContainer}>
        <Box sx={imageStyles.mainImageContainer}>
          <ImageCarousel
            mainImage={mainDeveloperImage}
            images={developerImages}
            alt={name}
          />
        </Box>

        <Box sx={imageStyles.viewPhotosBox}>
          <ViewAllPhotos
            mainImage={mainDeveloperImage}
            images={developerImages}
            alt={name}
          />
        </Box>
      </Box>
      <Container></Container>
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
    _id,
    name,
    createdAt,
    logo,
    mainDeveloperImage,
    developerImages[],
    description,
    website,
    developerDevelopments[],
    developerProjects[],
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
        _id: developer._id,
        name: developer.name,
        createdAt: developer.createdAt ?? null,
        logo: developer.logo ?? null,
        mainDeveloperImage: developer.mainDeveloperImage ?? null,
        developerImages: developer.developerImages ?? [],
        description: developer.description ?? null,
        website: developer.website ?? null,
        developerDevelopments: developer.developerDevelopments ?? [],
        developerProjects: developer.developerProjects ?? [],
      },
      revalidate: 60,
    };
  }
}

export default Developers;
