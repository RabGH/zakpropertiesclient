import { sanityClient } from "../../../lib/sanity";
import { isMultiple, formatPrice, formatArea } from "../../../lib/utils";
import Link from "next/link";
import { Box, Divider, Typography, Card } from "@mui/material";
import GeneralButton from "../../components/general/GButton";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import FeaturesSlug from "../../components/slugComponents/amenitiesFeatures/FeaturesSlug";
import { featuresStyles } from "../../components/slugComponents/amenitiesFeatures/FeaturesSlug";
import dynamic from "next/dynamic";
const MapSlug = dynamic(
  () => import("../../components/slugComponents/MapSlug"),
  {
    ssr: false,
  }
);
import { Property as PropertyProps } from "../../../lib/types";
import ImageCarousel from "../../components/slugComponents/ImageGallerySlick";
import {
  mainContainer,
  mainImageContainer,
  viewPhotosBox,
} from "../../components/slugComponents/imageCarouselStyles";
import ViewAllPhotos from "../../components/slugComponents/viewAllPhotos";

import {
  dividerStyles,
  titleContainer,
  titleStyle,
  priceStyle,
  contentContainer,
  mainSection,
  propertyTypeStyles,
  propertyBedStyles,
  propertyBathroomStyles,
  bodyStyles,
  staticStyles,
  squareFootageStyles,
  propertyMainAreaStyles,
  propertyBuiltAreaStyles,
  buttonStyles,
  priceBox,
  priceButtonPos,
  locationTitle,
  mapCardPos,
  mapCard,
  offPlanStyles,
  offPlanTextStyles,
  offPlanCompleteStyles,
  descriptionStyles,
  propertyPlottedAreaStyles,
} from "../../components/slugComponents/pageSlugStyles/propertySlugStyles";

interface PageContext {
  query: {
    slug: string;
  };
}

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

        <Divider sx={dividerStyles} />

        <Box sx={contentContainer}>
          <Box sx={titleContainer}>
            <Typography variant="h2" sx={titleStyle}>
              {title}
            </Typography>
            <Typography variant="h3" sx={priceStyle}>
              {formatPrice(totalPrice)}
            </Typography>
          </Box>

          <Box sx={mainSection}>
            <Typography variant="h5" sx={propertyTypeStyles}>
              {propertyType}
            </Typography>

            <Box sx={offPlanStyles}>
              {propertyOffPlan &&
              typeof propertyOffPlan === "object" &&
              propertyOffPlan.offplan ? (
                <Box>
                  <Typography variant="body2" sx={offPlanTextStyles}>
                    Off-plan project
                  </Typography>
                  {propertyOffPlan.propertyCompletionDate && (
                    <Typography variant="body2" sx={offPlanCompleteStyles}>
                      Completion date: {propertyOffPlan.propertyCompletionDate}
                    </Typography>
                  )}
                </Box>
              ) : (
                <Typography>Ready to buy</Typography>
              )}{" "}
            </Box>

            <Typography variant="body2" sx={propertyBedStyles}>
              {bedrooms} bedroom{isMultiple(bedrooms)} <BiBed />
            </Typography>
            <Typography variant="body2" sx={propertyBathroomStyles}>
              {bathrooms} bathroom{isMultiple(bathrooms)} <BiBath />
            </Typography>
          </Box>

          <Box sx={squareFootageStyles}>
            <Typography variant="body2" sx={propertyMainAreaStyles}>
              Main Area {formatArea(squareFootage)}
            </Typography>
            <Typography variant="body2" sx={propertyPlottedAreaStyles}>
              Plotted Area {formatArea(plottedArea)}
            </Typography>
            <Typography variant="body2" sx={propertyBuiltAreaStyles}>
              Built Up Area {formatArea(builtUpArea)}
            </Typography>
          </Box>

          <Box sx={bodyStyles}>
            <Box sx={staticStyles}>
              <Typography variant="body2" sx={descriptionStyles}>
                {description}
              </Typography>
            </Box>
            <Box sx={priceBox}>
              <Box sx={priceButtonPos}>
                <Link href="/contact">
                  <GeneralButton variant="contained" sx={buttonStyles}>
                    Learn More
                  </GeneralButton>
                </Link>
              </Box>
            </Box>
          </Box>

          <Divider sx={dividerStyles} />

          <Box sx={featuresStyles}>
            <FeaturesSlug features={features} />
          </Box>

          <Divider sx={dividerStyles} />

          <Box sx={mapCardPos}>
            <Card sx={mapCard}>
              <Typography variant="h3" sx={locationTitle}>
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
        features: property.features,
        propertyOffPlan: property.propertyOffPlan || null,
      },
    };
  }
};
export default Property;
