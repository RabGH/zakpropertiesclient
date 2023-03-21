import { sanityClient } from "../../../sanity";
import { isMultiple } from "../../../utils";
import Link from 'next/link';

import { Box, Divider, Typography, Card, CardMedia, Grid } from '@mui/material';
import GeneralButton from '../../components/general/GButton'

import ImageSlug from '../../components/slugComponents/ImageSlug'

import dynamic from 'next/dynamic';
const MapSlug = dynamic(() => import('../../components/slugComponents/MapSlug'), {
    ssr: false,
});


interface PropertyProps {
    title: string;
    propertyType: string;
    mainImage: string;
    totalPrice: number;
    bathrooms: number;
    bedrooms: number;
    description: string;
    squareFootage: number;
    plottedArea: number;
    builtUpArea: number;
    images: string[];
    amenities: string[];
  
    location: {
      lat?: number;
      lng?: number;
    };
}
interface PageContext {
    query: {
        slug: string;
    }
}


const Property = ({
    title,
    propertyType,
    mainImage,
    totalPrice,
    bathrooms,
    bedrooms,
    description,
    squareFootage,
    plottedArea,
    builtUpArea,
    images,
    amenities,
    location,
}: PropertyProps) => {

    const mainContainer = {

    }

    const titleContainer = {

    }

    const titleStyle = {

    }

    const priceStyle = {

    }

    const imageSection = {

    }

    const mainImageStyles = {

    }
    
    const subImagesStyles = {

    }

    const mainSection = {

    }

    const amenityStyles = {

    }

    const bodyStyles = {

    }

    const staticStyles = {

    }

    const priceBox = {

    }

    const priceButtonPos = {

    }

    const dividerStyles = {

    }

    const mapCard = {

    }

    const mapCardPos = {

    }

    const squareFootageStyles = {

    }

    const imageCardStyles = {

    }

    return (
        <Box sx={mainContainer}>

            <Box sx={titleContainer}>
                <Typography variant='h1' sx={titleStyle}>
                    {title}
                </Typography>
                <Typography variant='h6' sx={priceStyle}>
                    {totalPrice}
                </Typography>
            </Box>

            <Card sx={imageCardStyles}>
                <Box sx={imageSection}>
                    <Box sx={mainImageStyles}>
                        <ImageSlug identifier='main-image' image={mainImage} />
                    </Box>
                    <Box sx={subImagesStyles}>
                        {images.map((image, index) => <ImageSlug key={index} identifier="sub-image" image={image} />)}
                    </Box>
                </Box>
            </Card>

            <Divider sx={dividerStyles} />
            
            <Box sx={mainSection}>
                <Typography variant='body1'>
                    {propertyType}
                </Typography>
                <Typography variant='body1'>
                    {bedrooms} bedroom{isMultiple(bedrooms)} * {bathrooms} bathroom{isMultiple(bathrooms)}
                </Typography>
            </Box>

            <Box sx={bodyStyles}>
                <Box sx={amenityStyles}>
                    {amenities}
                </Box>
                <Box sx={staticStyles}>
                    <Typography variant='body1'>
                        {description}
                    </Typography>
                    <Box sx={squareFootageStyles}>
                        <Typography variant='body1'>
                            Main Area: {squareFootage}
                        </Typography>
                        <Typography variant='body1'>
                            Plotted Area: {plottedArea}
                        </Typography>
                        <Typography variant='body1'>
                            Built Up Area: {builtUpArea}
                        </Typography>
                    </Box>
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Aut beatae quisquam eum. Libero, veritatis iste. 
                        Adipisci dicta, nihil sit vel praesentium quod 
                        provident libero, molestias soluta officiis debitis 
                        tempora cum?
                    </Typography>
                </Box>
            </Box>

            <Divider sx={dividerStyles} />

            <Box sx={priceBox}>
                <Typography variant='h5'>
                    {totalPrice}
                </Typography>
                <Box sx={priceButtonPos}>
                <Link href='/contact'>
                    <GeneralButton variant='contained'>
                        Contact
                    </GeneralButton>
                </Link>
                </Box>
            </Box>

            <Divider sx={dividerStyles} />

            <Box sx={mapCardPos}>
                <Card sx={mapCard}>
                    <Typography variant='h3'>
                        Location
                    </Typography>
                    <MapSlug title={title} lat={location?.lat || 0} lng={location?.lng || 0} />
                </Card>
            </Box>

        </Box>
    );

}

export const getServerSideProps = async (pageContext: PageContext) => {
    const pageSlug = pageContext.query.slug
    
    const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
      title,
      location,
      propertyType,
      mainImage,
      images,
      totalPrice,
      bathrooms,
      bedrooms,
      description,
      squareFootage,
      plottedArea,
      builtUpArea,
      amenities
    }`
  
    const property = await sanityClient.fetch(query, {pageSlug})
    if (!property) {
      return {
        props: null,
        notFound: true,
      }
    } else {
      return {
        props: {
          title: property.title,
          location: property.location,
          propertyType: property.propertyType,
          mainImage: property.mainImage || null,
          images: property.images,
          totalPrice: property.totalPrice,
          bathrooms: property.bathrooms,
          bedrooms: property.bedrooms,
          description: property.description,
          squareFootage: property.squareFootage,
          plottedArea: property.plottedArea,
          builtUpArea: property.builtUpArea,
          amenities: property.amenities,
        }
      }
    }
}
export default Property