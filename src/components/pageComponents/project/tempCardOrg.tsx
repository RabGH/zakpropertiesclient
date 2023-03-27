import { Box, Container, Divider, Link, Typography, Card } from '@mui/material';
import Image from 'next/image';
import { urlFor } from '../sanity';
import { formatArea, formatPrice } from '../utils';

const PropertyCardBodyData = ({ properties }) => {
  // Filter properties by propertyType
  const villasAndTownhouses = properties.filter(property => property.propertyType === 'Villa/Townhouse');
  const apartments = properties.filter(property => property.propertyType === 'Apartment');

  return (
    <>
      {properties && (
        <Container>
          <Box sx={{ mb: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Divider sx={{ flexGrow: 1 }} />
              <Typography variant='h4' sx={{ mx: 2 }}>
                Villas and Townhouses
              </Typography>
              <Divider sx={{ flexGrow: 1 }} />
            </Box>
            <Box sx={{ display: 'flex', overflowX: 'scroll' }}>
              {villasAndTownhouses?.map((property) => (
                <Link key={property._id} href={`property/${property.slug.current}`}>
                  <Card sx={{ mx: 2 }}>
                    {property.mainPropertyImage && (
                      <Image
                        src={urlFor(property.mainPropertyImage).auto('format').url()}
                        alt={property.title}
                        width={330}
                        height={270}
                        style={{ borderRadius: '10px' }}
                      />
                    )}
                    <Box sx={{ p: 2 }}>
                      <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                        {property.title}
                      </Typography>
                      <Typography variant='body2' sx={{ mb: 1 }}>
                        {formatArea(property.squareFootage)}
                      </Typography>
                      <Typography variant='h5'>
                        {formatPrice(property.totalPrice)}
                      </Typography>
                    </Box>
                  </Card>
                </Link>
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Divider sx={{ flexGrow: 1 }} />
              <Typography variant='h4' sx={{ mx: 2 }}>
                Apartments
              </Typography>
              <Divider sx={{ flexGrow: 1 }} />
            </Box>
            <Box sx={{ display: 'flex', overflowX: 'scroll' }}>
              {apartments?.map((property) => (
                <Link key={property._id} href={`property/${property.slug.current}`}>
                  <Card sx={{ mx: 2 }}>
                    {property.mainPropertyImage && (
                      <Image
                        src={urlFor(property.mainPropertyImage).auto('format').url()}
                        alt={property.title}
                        width={330}
                        height={270}
                        style={{ borderRadius: '10px' }}
                      />
                    )}
                    <Box sx={{ p: 2 }}>
                      <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                        {property.title}
                      </Typography>
                      <Typography variant='body2' sx={{ mb: 1 }}>
                        {formatArea(property.squareFootage)}
                      </Typography>
                      <Typography variant='h5'>
                        {formatPrice(property.totalPrice)}
                      </Typography>
                    </Box>
                  </Card>
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}

