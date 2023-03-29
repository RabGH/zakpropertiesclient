import { sanityClient } from "../../../sanity";
import { isMultiple, formatPrice, formatArea } from "../../../utils";
import Link from "next/link";

import { Box, Divider, Typography, Card } from "@mui/material";
import GeneralButton from "../../components/general/GButton";

import { BiBed } from 'react-icons/bi';
import { BiBath } from 'react-icons/bi';

import AmenitiesCard from '../../components/slugComponents/AmenitiesSlug';

import dynamic from "next/dynamic";
const MapSlug = dynamic(
  () => import("../../components/slugComponents/MapSlug"),
  {
    ssr: false,
  }
);

import { Property as PropertyProps } from "../../../types";
import ImageCarousel from "../../components/slugComponents/ImageGallery";

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
  amenities,
  location,
}: PropertyProps) => {

  const dividerStyles = {
    m: 10,
  };

  const mainContainer = {
    p: 2,
    maxWidth: 1200,
    margin: "0 auto",
    width: '100vw', // set width to 100vw
  };

  const titleContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const titleStyle = {
    fontWeight: "",
  };

  const priceStyle = {
    ml: 2,
    fontSize: "1.3rem",
  };

  const mainImageContainer = {
    border: '1px solid #00000000',
    backgroundColor: '#1B1B1B10',
    borderRadius: '10px',
  };

  const mainBodyCard = {
    padding: '2rem',
  };

  const mainSection = {
    mt: 2,
  };

  const propertyTypeStyles = {
    fontSize: "1.3rem",
    mb: '1rem',
    mt: '1rem',
  };

  const propertyBedStyles = {
    fontSize: "1rem",
  };

  const propertyBathroomStyles = {
    fontSize: "1rem",
  };

  const bodyStyles = {
    mt: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const staticStyles = {
    lineHeight: "1.5",
  };

  const propertyDescStyles = {
    fontSize: "1.3rem",
  };

  const squareFootageStyles = {
    mt: 3,
    lineHeight: "1.5",
  };

  const propertyMainAreaStyles = {
    fontSize: "1rem",
  };

  const propertyPlottedAreaStyles = {
    fontSize: "1rem",
  };

  const propertyBuiltAreaStyles = {
    fontSize: "1rem",
  };

  const amenityStyles = {
    maxWidth: 700,
    margin: "0 auto",
    // mt: '3rem',
  };

  const priceButtonPos = {
    mt: '3rem',
  };

  const mapCardPos = {
    mt: 3,
  };

  const mapCard = {
    width: "100%",
    height: "500px",
    borderRadius: "5px",
    overflow: "hidden",
    padding: "1rem",
  };

  return (
    <Box sx={mainContainer}>

      <Card sx={mainImageContainer}>
        <ImageCarousel mainImage={mainPropertyImage} subImages={propertyImages} />
      </Card>   

      <Divider sx={dividerStyles} />

      <Card sx={mainBodyCard}>
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
            <Typography variant="body2" sx={propertyDescStyles}>
              Aliqua pariatur labore velit aute sunt et laboris non 
              pariatur ut sit officia sunt mollit. Mollit amet dolor ex 
              Lorem mollit cillum mollit veniam qui dolor cupidatat cupidatat 
              consectetur aute. Veniam commodo nisi ipsum do enim id in mollit
               velit proident exercitation veniam. {description}
            </Typography>
          </Box>
          <Box sx={priceButtonPos}>
            <Link href="/contact">
              <GeneralButton variant="contained">Contact</GeneralButton>
            </Link>
          </Box>
        </Box>
      </Card>

      <Divider sx={dividerStyles} />

      <Box sx={amenityStyles}>
        <AmenitiesCard amenities={amenities}/>
      </Box>

      <Divider sx={dividerStyles} />

      <Box sx={mapCardPos}>
        <Card sx={mapCard}>
          <Typography variant="h3">Location</Typography>
          <MapSlug
            title={title}
            lat={location?.lat || 0}
            lng={location?.lng || 0}
          />
        </Card>
      </Box>
    </Box>
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
      amenities
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
        squareFootage: property.squareFootage,
        plottedArea: property.plottedArea,
        builtUpArea: property.builtUpArea,
        amenities: property.amenities,
      },
    };
  }
};
export default Property;
