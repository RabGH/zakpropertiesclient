import { sanityClient, urlFor } from "@lib/sanity";
import { getAllDeveloperSlugs } from "@lib/getStaticPaths";
import {
  formatPrice,
  formatArea,
  formatNumberWithCommas,
  isMultiple,
} from "@lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Box, Divider, Typography, Button, Grid } from "@mui/material";
import { Project, Development, Developer, PageContext } from "@lib/types";
import ImageCarousel from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/ImageGallerySlick";
import ViewAllPhotos from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/viewAllPhotos";
import { getImageCarouselStyles } from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/imageCarouselStyles";
import { getDeveloperPageStyles } from "@/components/slugComponents/pageSlugComponents/pageSlugStyles/developerSlugStyles";
import dynamic from "next/dynamic";
import ProjectAllCards from "@/components/slugComponents/cardSlugs/projectCards/ProjectAllCards";

type DeveloperProps = Developer;

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

      <Box sx={styles.firstSection}>
        <Typography variant="h1" sx={styles.nameStyle}>
          {name}
        </Typography>
        <Box sx={styles.rowWrap}>
          <Box sx={styles.logoBox}>
            {logo && (
              <Image
                src={urlFor(logo).auto("format").url().toString()}
                alt={name}
                width={600}
                height={450}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..."
              />
            )}
          </Box>

          <Typography variant="body1" style={styles.descriptionStyle}>
            {description}, {website}
          </Typography>
        </Box>
        <Divider sx={styles.dividerStyles} />
      </Box>

      <Box sx={styles.secondSection}>
        {developerProjects && (
          <Box sx={styles.mainProjectBox}>
            <Box sx={styles.innerProjectBox}>
              <Box>
                <Grid container spacing={2} sx={{ mt: "2rem" }}>
                  {developerProjects?.map((projects) => (
                    <Grid item key={projects._id} xs={12} sm={6} md={4} lg={3}>
                      <ProjectAllCards project={projects} />
                      <Divider sx={styles.dividerStyles} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        )}

        <Typography variant="h6" sx={{ m: "1rem" }}>
          Contact us for project inquiries and off-plan projects
        </Typography>
        <Link href="/contactUs">
          <Button variant="contained" size="large" sx={styles.contactButton}>
            Learn More
          </Button>
        </Link>
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
    developerProjects[]->{
      _id,
      title,
      mainProjectImage,
      slug,
      bedrooms,
      totalPrice,
      projectPropertyTypes,
    },
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
