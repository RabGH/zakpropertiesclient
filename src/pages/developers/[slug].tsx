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
import { Development, Developer, PageContext } from "@lib/types";
import ImageCarousel from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/ImageGallerySlick";
import ViewAllPhotos from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/viewAllPhotos";
import {
  mainContainer,
  mainImageContainer,
  viewPhotosBox,
} from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/imageCarouselStyles";
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
    _id,
    name,
    createdAt,
    logo,
    mainDeveloperImage,
    developerImages[],
    description,
    website,
    developerDevelopments[],
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
      },
      revalidate: 60,
    };
  }
}

export default Developers;
