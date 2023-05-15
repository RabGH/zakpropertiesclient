import { sanityClient } from "../../../lib/sanity";
import { isMultiple, formatPrice, formatArea } from "../../../lib/utils";
import Link from "next/link";
import { Box, Divider, Typography, Card, Button } from "@mui/material";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import FeaturesSlug from "../../components/slugComponents/amenitiesFeatures/FeaturesSlug";
import { featuresStyles } from "../../components/slugComponents/amenitiesFeatures/FeaturesSlug";
import dynamic from "next/dynamic";
import { Property as PropertyProps } from "../../../lib/types";
import { getPropertyPageStyles } from "../../components/pageComponents/pageSlugStyles/propertySlugStyles";
import { getGeneralSlugStyles } from "../../components/pageComponents/pageSlugStyles/generalSlugStyles";
import ViewAllPhotos from "../../components/slugComponents/viewAllPhotos";
import ImageCarousel from "../../components/slugComponents/ImageGallerySlick";
import {
  mainContainer,
  mainImageContainer,
  viewPhotosBox,
} from "../../components/slugComponents/imageCarouselStyles";

interface PageContext {
  query: {
    slug: string;
  };
}

const MapSlug = dynamic(
  () => import("../../components/slugComponents/MapSlug"),
  {
    ssr: false,
  }
);

const Property = ({
  title,
  propertyType,
  mainPropertyImage,
  totalPrice,
  bathrooms,
  bedrooms,
  description,
  squareFootage,
  plottedArea,
  builtUpArea,
  propertyImages,
  features,
  location,
  propertyOffPlan,
}: PropertyProps) => {
  const styles = getPropertyPageStyles();
  const generalStyles = getGeneralSlugStyles();
  return (
    <>
      <Box sx={mainContainer}>
        <Box sx={mainImageContainer}>
          <ImageCarousel
            mainImage={mainPropertyImage}
            images={propertyImages}
            alt={title}
          />
        </Box>

        <Box sx={viewPhotosBox}>
          <ViewAllPhotos
            mainImage={mainPropertyImage}
            images={propertyImages}
            alt={title}
          />
        </Box>

        <Divider sx={generalStyles.dividerStyles} />

        <Box sx={generalStyles.contentContainer}>
          <Box sx={generalStyles.titleContainer}>
            <Typography variant="h2" sx={generalStyles.titleStyle}>
              {title}
            </Typography>
            <Card>
              <Box sx={generalStyles.priceBox}>
                <Typography variant="h3" sx={generalStyles.priceStyle}>
                  {formatPrice(totalPrice)}
                </Typography>

                <Box sx={generalStyles.priceButtonPos}>
                  <Link href="/contact">
                    <Button variant="contained" sx={generalStyles.buttonStyles}>
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/buyProperties">
                    <Button variant="contained" sx={generalStyles.buttonStyles}>
                      View More Properties
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Box>

          <Box sx={generalStyles.mainSection}>
            <Typography variant="h5" sx={styles.propertyTypeStyles}>
              {propertyType}
            </Typography>

            <Box sx={generalStyles.offPlanStyles}>
              {propertyOffPlan &&
              typeof propertyOffPlan === "object" &&
              propertyOffPlan.offplan ? (
                <Box>
                  <Typography
                    variant="body2"
                    sx={generalStyles.offPlanTextStyles}
                  >
                    Off-plan project
                  </Typography>
                  {propertyOffPlan.propertyCompletionDate && (
                    <Typography
                      variant="body2"
                      sx={generalStyles.offPlanCompleteStyles}
                    >
                      Completion date: {propertyOffPlan.propertyCompletionDate}
                    </Typography>
                  )}
                </Box>
              ) : (
                <Typography>Ready to buy</Typography>
              )}{" "}
            </Box>

            <Typography variant="body2" sx={styles.propertyBedStyles}>
              {bedrooms} bedroom{isMultiple(bedrooms)} <BiBed />
            </Typography>
            <Typography variant="body2" sx={styles.propertyBathroomStyles}>
              {bathrooms} bathroom{isMultiple(bathrooms)} <BiBath />
            </Typography>
          </Box>

          <Box sx={styles.squareFootageStyles}>
            <Typography variant="body2" sx={styles.propertyMainAreaStyles}>
              Main Area {formatArea(squareFootage)}
            </Typography>
            {plottedArea && (
              <Typography variant="body2" sx={styles.propertyPlottedAreaStyles}>
                Plotted Area {formatArea(plottedArea)}
              </Typography>
            )}
            {builtUpArea && (
              <Typography variant="body2" sx={styles.propertyBuiltAreaStyles}>
                Built Up Area {formatArea(builtUpArea)}
              </Typography>
            )}
          </Box>

          <Box sx={generalStyles.bodyStyles}>
            <Box sx={styles.staticStyles}>
              <Typography variant="body2" sx={generalStyles.descriptionStyles}>
                {description}
              </Typography>
            </Box>
          </Box>

          <Divider sx={generalStyles.dividerStyles} />

          <Box sx={featuresStyles}>
            <FeaturesSlug features={features} />
          </Box>

          <Divider sx={generalStyles.dividerStyles} />

          <Box sx={styles.mapCardPos}>
            <Card sx={generalStyles.mapCard}>
              <Typography variant="h3" sx={generalStyles.locationTitle}>
                Location
              </Typography>
              <MapSlug
                title={title}
                lat={location?.lat || 0}
                lng={location?.lng || 0}
              />
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const getServerSideProps = async (pageContext: PageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
      title,
      location,
      address,
      specificAddress,
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
      features->{
        name,
        features[],
      },
      propertyOffPlan,
      }`;

  const property = await sanityClient.fetch(query, { pageSlug });
  if (!property) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: property.title,
        location: property.location,
        propertyType: property.propertyType,
        mainPropertyImage: property.mainPropertyImage || null,
        propertyImages: property.propertyImages || null,
        totalPrice: property.totalPrice,
        bathrooms: property.bathrooms,
        bedrooms: property.bedrooms,
        description: property.description,
        squareFootage: property.squareFootage || null,
        plottedArea: property.plottedArea || null,
        builtUpArea: property.builtUpArea || null,
        features: property.features || [],
        propertyOffPlan: property.propertyOffPlan || null,
      },
    };
  }
};
export default Property;
