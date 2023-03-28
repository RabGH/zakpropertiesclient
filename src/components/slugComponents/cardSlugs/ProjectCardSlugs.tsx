import { sanityClient, urlFor } from '../../../../sanity';
import { isMultiple, formatPrice, formatArea } from '../../../../utils';
import { Project } from '../../../../types';
import Image from 'next/image';
import Link from 'next/link';

import { Box, Typography, Container, Card, Divider } from '@mui/material';

interface ProjectsCardBodyProps {
    projects?: Project[];
}

const ProjectsCardBodyData = ({ projects }: ProjectsCardBodyProps) => {
    
    const main = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
      };
    
      const featuredTitlePos = {
        mt: '1rem',
        ml: '1rem',
        mb: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    
      const projectTypeStyles = {
        paddingBottom: '0.7rem',
      };
    
      const projectTitleCard = {
        fontSize: '1rem',
        paddingBottom: '0.7rem',
      };
    
      const projectAreaCard = {
        paddingBottom: '0.3rem',
      };
    
      const projectPriceCard = {
        paddingBottom: '0.7rem',
        fontSize: '0.9rem',
      };
    
      const cardInfoStyles = {
        display: 'flex',
        flexDirection: 'column',
      };
    
      const mainBox = {
        display: 'flex',
        flexDirection: 'row',
        mb: '2rem'
      };

    return (
        <>
        {projects && (
            <Container>
                <Box sx={main}>
                    <Box>
                        <Divider>
                            <Typography variant='h5' sx={featuredTitlePos}>
                                Featured Projects
                            </Typography>
                        </Divider>
                        <Box sx={mainBox}>
                            {projects?.slice(0,6).map((projects) => (
                                <Link key={projects._id} href={`projects/${projects.slug.current}`}>
                                    <Card sx={cardStyles}>
                                        {projects.mainProjectImage && (
                                          <Image
                                              src={urlFor(projects.mainProjectImage).auto('format').url()}
                                              alt={projects.title}
                                              width={360}
                                              height={250}
                                              style={{ borderRadius: '10px' }}                                          
                                          />
                                        )}
                                        <Box sx={cardInfoStyles}>
                                            <Typography variant='body2' sx={projectTypeStyles}>
                                                {projects.projectPropertyTypes}
                                            </Typography>
                                            <Typography variant='h6' sx={projectTitleCard}>
                                                {projects.title}
                                            </Typography>
                                            <Typography variant='body2' sx={projectAreaCard}>
                                                Area {formatArea(projects.squareFootage)}
                                            </Typography>
                                            <Typography variant='h5' sx={projectPriceCard}>
                                                {formatPrice(projects.totalPrice)}
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

export default ProjectsCardBodyData;