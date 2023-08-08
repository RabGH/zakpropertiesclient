import { sanityClient } from "@lib/sanity";
import { getAllPropertySlugs } from "@lib/getStaticPaths";
import { isMultiple, formatPrice, formatArea } from "@lib/utils";
import { Box, Typography, Divider } from "@mui/material";
import AmenitiesSlug from "../../components/slugComponents/pageSlugComponents/amenities/AmenitiesSlug";
import dynamic from "next/dynamic";
import { PropertyProps, PageContext } from "@lib/types";
import { getPropertyPageStyles } from "@/components/slugComponents/pageSlugComponents/pageSlugStyles/propertySlugStyles";
import ViewAllPhotos from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/viewAllPhotos";
import ImageCarousel from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/ImageGallerySlick";
import {
  mainContainer,
  mainImageContainer,
  viewPhotosBox,
} from "@/components/slugComponents/pageSlugComponents/imageSlugComponents/imageCarouselStyles";
import PropertyReference from "@/components/slugComponents/pageSlugComponents/miscellaneousSlugComponents/PropertyReferenceSlug";
import PropertyMobileReference from "@/components/slugComponents/pageSlugComponents/miscellaneousSlugComponents/PropertyMobileReferenceSlug";
import PropertySimilarCards from "@/components/slugComponents/cardSlugs/propertyCards/PropertySimilarCardsScroll";
import LifeStyle from "@/components/slugComponents/pageSlugComponents/miscellaneousSlugComponents/LifeStyle";
import PaymentPlanSlug from "@/components/slugComponents/pageSlugComponents/paymentPlanSlug/paymentPlan";

const MapSlug = dynamic(
  () =>
    import(
      "@/components/slugComponents/pageSlugComponents/miscellaneousSlugComponents/MapSlug"
    ),
  {
    ssr: false,
  }
);

const Property = ({
  id,
  _id,
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
  amenities,
  location,
  propertyOffPlan,
  address,
  specificAddress,
  property,
  properties,
  paymentPlan,
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

        <Box sx={styles.mainSection}>
          <Box sx={styles.contentContainer}>
            <Typography variant="h1" sx={styles.titleStyle}>
              {title}
            </Typography>
            <Typography variant="body1" sx={styles.propertyTypeStyles}>
              {propertyType} ⋅ {bedrooms} bedroom{isMultiple(bedrooms)} ⋅{" "}
              {bathrooms} bathroom{isMultiple(bathrooms)} ⋅{" "}
              {squareFootage && formatArea(squareFootage)} ⋅{" "}
              {builtUpArea && formatArea(builtUpArea)} ⋅{" "}
              {plottedArea && formatArea(plottedArea)}
            </Typography>
            <Typography variant="body1" sx={styles.descriptionStyles}>
              {description}
            </Typography>

            <Divider sx={styles.dividerStyles} />

            <Box sx={styles.mapSlug}>
              <MapSlug
                title={title}
                lat={location?.lat ?? 0}
                lng={location?.lng ?? 0}
                address={address}
                specificAddress={specificAddress ?? ""}
              />
            </Box>

            <Divider sx={styles.dividerStyles} />

            <Box sx={styles.lifeBoxStyles}>
              <LifeStyle areaType={areaType} />
            </Box>

            <Divider sx={styles.dividerStyles} />

            <Box sx={styles.featuresSlugPos}>
              <AmenitiesSlug amenities={amenities} />
            </Box>

            <Divider sx={styles.dividerStyles} />

            {paymentPlan && (
              <Box>
                <PaymentPlanSlug paymentPlan={paymentPlan} />
              </Box>
            )}
          </Box>
          <PropertyReference
            totalPrice={totalPrice}
            id={id}
            _id={_id}
            propertyOffPlan={propertyOffPlan ?? {}}
            squareFootage={squareFootage}
            bedrooms={bedrooms}
          />
        </Box>
      </Box>
      <Box>
        <Divider sx={styles.outterDividerStyles} />
        <Box sx={styles.propertySimilarCardsPos}>
          <PropertySimilarCards property={property} properties={properties} />
        </Box>
      </Box>
      <PropertyMobileReference
        totalPrice={totalPrice}
        id={id}
        _id={_id}
        propertyOffPlan={propertyOffPlan ?? {}}
        squareFootage={squareFootage}
        bedrooms={bedrooms}
      />
    </>
  );
};

export async function getStaticPaths() {
  const paths = await getAllPropertySlugs();

  return { paths, fallback: false };
}

export async function getStaticProps(context: PageContext) {
  const slug = context.params.slug;

  const query = `*[ _type == "property" && slug.current == $slug][0]{
    id,
    _id,
    title,
    location,
    createdAt,
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
    paymentPlan->{
      name,
      type,
      reference,
      description,
      validity,
      timeline,
      amountType,
      amountAbsolute,
      amountPercentage,
      interestRate,
      penalty,
    },
    projectId->{
      _id,
      title,
    },
    developer->{
      _id,
      name,
    },
    amenities->{
      name,
      amenities[],
    },
    address->{
      street,
      city,
    },
  }`;

  const property = await sanityClient.fetch(query, { slug });
  if (!property) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    const properties = await sanityClient.fetch(`*[ _type == "property"]{
      ...,
      createdAt,
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
      paymentPlan,
      amenities->{
        name,
        amenities[],
      },
      propertyOffPlan,
      address->{
        street,
        city,
      },    
    }`);
    return {
      props: {
        id: property.id,
        _id: property._id,
        createdAt: property.createdAt ?? null,
        title: property.title,
        location: property.location,
        propertyType: property.propertyType,
        mainPropertyImage: property.mainPropertyImage ?? null,
        propertyImages: property.propertyImages ?? null,
        totalPrice: property.totalPrice,
        bathrooms: property.bathrooms,
        bedrooms: property.bedrooms,
        description: property.description,
        squareFootage: property.squareFootage ?? null,
        plottedArea: property.plottedArea ?? null,
        builtUpArea: property.builtUpArea ?? null,
        areaType: property.areaType ?? [],
        amenities: property.amenities ?? [],
        propertyOffPlan: property.propertyOffPlan ?? null,
        address: property.address ?? null,
        specificAddress: property.specificAddress ?? null,
        paymentPlan: property.paymentPlan ?? null,
        projectId: property.projectId ?? null,
        developer: property.developer ?? null,
        property,
        properties,
      },
      revalidate: 60,
    };
  }
}
export default Property;
