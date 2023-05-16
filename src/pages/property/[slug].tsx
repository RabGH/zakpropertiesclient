import { sanityClient } from "../../../lib/sanity";
import { isMultiple, formatPrice, formatArea } from "../../../lib/utils";
import { Box, Typography, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import FeaturesSlug from "../../components/slugComponents/amenitiesFeatures/FeaturesSlug";
import { featuresStyles } from "../../components/slugComponents/amenitiesFeatures/FeaturesSlug";
import dynamic from "next/dynamic";
import { Property as PropertyProps } from "../../../lib/types";
import { getPropertyPageStyles } from "../../components/pageComponents/pageSlugStyles/propertySlugStyles";
import ViewAllPhotos from "../../components/slugComponents/viewAllPhotos";
import ImageCarousel from "../../components/slugComponents/ImageGallerySlick";
import {
  mainContainer,
  mainImageContainer,
  viewPhotosBox,
} from "../../components/slugComponents/imageCarouselStyles";
import PropertyReference from "../../components/slugComponents/referenceCardComponents/PropertyReferenceSlug";

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
  id,
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
  areaType,
  propertyImages,
  features,
  location,
  propertyOffPlan,
  address,
  specificAddress,
}: PropertyProps) => {
  const styles = getPropertyPageStyles();

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

        <Divider sx={styles.dividerStyles} />

        <Box sx={styles.mainSection}>
          <Box sx={styles.contentContainer}>
            <Typography variant="h2" sx={styles.titleStyle}>
              {title}
            </Typography>
            <Divider sx={styles.dividerStyles} />
            <Typography variant="h6" sx={styles.propertyTypeStyles}>
              {propertyType}
            </Typography>
            <Divider sx={styles.dividerStyles} />
            <Typography variant="body2" sx={styles.propertyBedStyles}>
              {bedrooms} bedroom{isMultiple(bedrooms)} <BiBed />
            </Typography>
            <Typography variant="body2" sx={styles.propertyBathroomStyles}>
              {bathrooms} bathroom{isMultiple(bathrooms)} <BiBath />
            </Typography>
            <Divider sx={styles.dividerStyles} />
            <Box sx={styles.squareFootageStyles}>
              <Typography variant="body2" sx={styles.propertyMainAreaStyles}>
                Main Area {formatArea(squareFootage)}
              </Typography>
              {plottedArea && (
                <Typography
                  variant="body2"
                  sx={styles.propertyPlottedAreaStyles}
                >
                  Plotted Area {formatArea(plottedArea)}
                </Typography>
              )}
              {builtUpArea && (
                <Typography variant="body2" sx={styles.propertyBuiltAreaStyles}>
                  Built Up Area {formatArea(builtUpArea)}
                </Typography>
              )}
            </Box>
            <Divider sx={styles.dividerStyles} />
            <Typography variant="body2" sx={styles.descriptionStyles}>
              {description}
            </Typography>

            <Divider sx={styles.dividerStyles} />

            <FeaturesSlug features={features} />

            <Divider sx={styles.dividerStyles} />

            <MapSlug
              title={title}
              lat={location?.lat || 0}
              lng={location?.lng || 0}
              address={address}
              specificAddress={specificAddress}
            />
          </Box>
          <PropertyReference
            totalPrice={totalPrice}
            id={id}
            propertyOffPlan={propertyOffPlan}
          />
        </Box>
      </Box>
    </>
  );
};

export const getServerSideProps = async (pageContext: PageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
            id,
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
            areaType[],
            propertyOffPlan,
            projectId{
              _id,
            },
            features->{
              name,
              features[],
            },
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
        id: property.id,
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
        areaType: property.areaType || [],
        features: property.features || [],
        propertyOffPlan: property.propertyOffPlan || null,
        address: property.address || null,
        specificAddress: property.specificAddress || null,
      },
    };
  }
};
export default Property;
