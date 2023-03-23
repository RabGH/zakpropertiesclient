import { sanityClient, urlFor } from "../../../sanity";

import { isMultiple, formatPrice, formatArea } from '../../../utils';

import Link from 'next/link';

import Image from 'next/image';

import { Box, Divider, Typography, Card } from '@mui/material';
import GeneralButton from '../../components/general/GButton'

import ImageSlug from '../../components/slugComponents/ImageSlug'

import dynamic from 'next/dynamic';
const MapSlug = dynamic(() => import('../../components/slugComponents/MapSlug'), {
    ssr: false,
});


import { Project, Property, PageContext } from '../../../types'

interface PropertyList {
    properties: Property[];
}

type ProjectsProps = Project & PropertyList;
  

const Projects = ({
    title,
    development,
    mainProjectImage,
    totalPrice,
    description,
    squareFootage,
    projectImages,
    amenities,
    location,
    properties,
}: ProjectsProps) => {

    const mainContainer = {

    };

    const titleContainer = {

    };

    const titleStyle = {

    };

    const priceStyle = {

    };

    const imageCardStyles = {

    };

    const imageSection = {

    };

    const mainImageStyles = {

    };

    const subImagesStyles = {

    };

    const dividerStyles = {

    };

    const mainSection = {

    };

    const mainBodyStyles = {

    };

    const bodyStyles = {

    };

    const squareFootageStyles = {

    };

    const descriptionStyles = {

    };

    const amenityStyles = {

    };

    const amenitiesCardStyles = {

    };

    const priceBox = {

    };

    const priceButtonPos = {

    };

    const mapCardPos = {

    };

    const mapCard = {

    };

    const locationTitle = {

    };

    const mainPropertiesContainer = {

    };

    const PropertiesCardPos = {

    };

    const propertyContainer = {

    };

    return (
        <Box sx={mainContainer}>
            <Box sx={titleContainer}>
                <Typography variant='h1' sx={titleStyle}>
                    {title}
                </Typography>
                <Typography variant='h6' sx={priceStyle}>
                    {formatPrice(totalPrice)}
                </Typography>
            </Box>
            <Card sx={imageCardStyles}>
                <Box sx={imageSection}>
                    <Box sx={mainImageStyles}>
                        <ImageSlug identifier='main-image' image={mainProjectImage} />
                    </Box>
                    <Box sx={subImagesStyles}>
                        {projectImages.map((image, index) => 
                        <ImageSlug key={index} identifier='sub-image' image={image} />)}
                    </Box>
                </Box>
            </Card>
            <Divider sx={dividerStyles} />

            <Box sx={mainSection}>
                <Typography variant='body2' sx={mainBodyStyles}>
                    {development}
                </Typography>

                <Box sx={bodyStyles}>
                    <Typography variant='body2' sx={squareFootageStyles}>
                        {formatArea(squareFootage)}
                    </Typography>
                    <Typography variant='body2' sx={descriptionStyles}>
                        {description}
                    </Typography>
                </Box>
            </Box>

            <Divider sx={dividerStyles} />

            <Box sx={amenityStyles}>
                <Card sx={{ p: 2 }}>
                    <Typography variant='h3'>
                        Amenities
                    </Typography>
                    <Box sx={amenitiesCardStyles}>
                        {amenities}
                    </Box>
                </Card>
            </Box>

            <Box sx={priceBox}>
                <Typography variant='h5'>
                    Price: {formatPrice(totalPrice)}
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
            
            <Box sx={propertyContainer}>
                    {properties.map((property: Property) => (
                        <Box key={property._id} sx={mainPropertiesContainer}>
                            <Box sx={PropertiesCardPos}>
                                <Card>
                                    {property.mainPropertyImage && (
                                        <Image width={800} height={600} src={urlFor(property.mainPropertyImage).auto('format').url()} alt={property.title} />
                                    )}
                                    <Typography variant='h1'>
                                        {property.title}
                                    </Typography>
                                    <Typography variant='h6'>
                                        AED {formatPrice(property.totalPrice)}
                                    </Typography>
                                </Card>
                            </Box>
                        </Box>
                    ))}
                </Box>


            <Divider sx={dividerStyles} />

            <Box sx={mapCardPos}>
                <Card sx={mapCard}>
                    <Typography variant='h3' sx={locationTitle}>
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

    const query = `*[ _type == "projects" && slug.current == $pageSlug][0]{
        title,
        development,
        mainProjectImage,
        totalPrice,
        description,
        squareFootage,
        projectImages,
        amenities,
        location,
        properties[]->{
          _id,
          title,
          mainPropertyImage,
          totalPrice,
        }
    }`

    const projects = await sanityClient.fetch(query, {pageSlug})

    // console.log(projects);
    // console.log("Properties: ", projects.properties);


    if (!projects) {
        return {
            props: null,
            notFound: true,
        }
    } else {
        return {
            props: {
                title: projects.title,
                location: projects.location,
                development: projects.development,
                mainProjectImage: projects.mainProjectImage || null,
                projectImages: projects.projectImages,
                totalPrice: projects.totalPrice,
                description: projects.description,
                squareFootage: projects.squareFootage,
                amenities: projects.amenities,
                properties: projects.properties || null,
            }
        }
    }

}
export default Projects