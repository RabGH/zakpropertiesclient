import { sanityClient, urlFor } from '../../../../sanity';
import { isMultiple, formatPrice, formatArea } from '../../../../utils';
import Image from 'next/image';
import Link from 'next/link';

import { Box, Typography, Container, Card, Divider } from '@mui/material';

interface Property {
  _id: string;
  title: string;
  mainPropertyImage?: string;
  slug: {
    current: string;
  }
  propertyType: string;
  totalPrice: number;
  squareFootage: number;
}

interface PropertyCardBodyProps {
  properties?: Property[];
}

const PropertyCardBodyData = ({ properties }: PropertyCardBodyProps) => {

  const main = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const featuredTitlePos = {
    mt: '1rem',
    ml: '1rem',
    mb: '1rem',
    fontSize: '1.5rem',
  };

  const feedContainer = {
    display: 'flex',
    flexDirection: 'column',
  };

  const feed = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1rem',
    marginBottom: '2rem',
  };
  
  const cardStyles = {
    boxShadow: 'none',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
    },
    padding: '1rem',
  };

  const propertyTypeStyles = {
    paddingBottom: '0.7rem',
  };

  const propertyTitleCard = {
    fontSize: '1rem',
    paddingBottom: '0.7rem',
  };

  const properyAreaCard = {
    paddingBottom: '0.3rem',
  };

  const propertyPriceCard = {
    paddingBottom: '0.7rem',
    fontSize: '0.9rem',
  };

  const cardInfoStyles = {
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <>
      {properties && (
        <Container>
          <Box sx={main}>
            <Box sx={feedContainer}>
              <Divider />
              <Typography variant='h4' sx={featuredTitlePos}>
                Featured Properties
              </Typography>
              <Box sx={feed}>
                {properties?.map((property) => (
                  <Link key={property._id} href={`property/${property.slug.current}`}>
                    <Card sx={cardStyles}>
                      {property.mainPropertyImage && (
                        <Image
                          src={urlFor(property.mainPropertyImage).auto('format').url()}
                          alt={property.title}
                          width={330}
                          height={270}
                          style={{ borderRadius: '10px' }}
                        />
                      )}
                      <Box sx={cardInfoStyles}>
                        <Typography variant='body2' sx={propertyTypeStyles}>
                          {property.propertyType}
                        </Typography>
                        <Typography variant='h3' sx={propertyTitleCard}>
                          {property.title}
                        </Typography>
                        <Typography variant='body2' sx={properyAreaCard}>
                         Area {formatArea(property.squareFootage)}
                        </Typography>
                        <Typography variant='h5' sx={propertyPriceCard}>
                          {formatPrice(property.totalPrice)}
                        </Typography>
                      </Box>
                    </Card>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}

export default PropertyCardBodyData;
