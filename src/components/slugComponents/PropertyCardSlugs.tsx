import { sanityClient, urlFor } from '../../../sanity';
import { isMultiple } from '../../../utils';
import Image from 'next/image';
import Link from 'next/link';

import { Box, Typography, Container, Card, Divider } from '@mui/material';

interface Property {
  _id: string;
  title: string;
  mainImage?: string;
  slug: {
    current: string;
  }
  propertyType: string;
  totalPrice: number;
  squareFootage: number;
}

interface CardBodyProps {
  properties?: Property[];
}

const CardBodyData = ({ properties }: CardBodyProps) => {

  const main = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const feedContainer = {
    textAlign: 'center',
  };

  const feed = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    marginTop: '2rem',
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
    padding: '3rem',
  };

  const propertyTitleCard = {
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1.5rem',
  };

  const propertyPriceCard = {
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1.2rem',
  };

  return (
    <>
      {properties && (
        <Container>
          <Box sx={main}>
            <Box sx={feedContainer}>
              <Typography variant='h3'>
                Featured Properties
              </Typography>
              <Box sx={feed}>
                {properties?.map((property) => (
                  <Link key={property._id} href={`property/${property.slug.current}`}>
                    <Card sx={cardStyles}>
                      {property.mainImage && (
                        <Image
                          src={urlFor(property.mainImage).auto('format').url()}
                          alt={property.title}
                          width={600}
                          height={335}
                          style={{ borderRadius: '10px' }}
                        />
                      )}
                      <Typography variant='h3' sx={propertyTitleCard}>
                        {property.title}
                      </Typography>
                      <Typography variant='h5' sx={propertyPriceCard}>
                        AED{property.totalPrice}
                      </Typography>
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

export default CardBodyData;
