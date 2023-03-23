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
        fontSize: '1.5rem',
    };

    const feedContainer = {
        display: 'flex',
        flexDirection: 'column'
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

    const cardInfoStyles = {
        display: 'flex',
        flexDirection: 'column',
    };

    const projectTypeStyles = {
        paddingBottom: '0.7rem',
    };

    const projectTitleCard = {
        paddingBottom: '0.7rem',
    };

    const projectAreaCard = {
        paddingBottom: '0.7rem',
    };

    const projectPriceCard = {
        paddingBottom: '0.7rem',
    };

    return (
        <>
        {projects && (
            <Container>
                <Box sx={main}>
                    <Box sx={feedContainer}>
                        <Divider />
                        <Typography variant='h4' sx={featuredTitlePos}>
                            Featured Projects
                        </Typography>
                        <Box sx={feed}>
                            {projects?.map((projects) => (
                                <Link key={projects._id} href={`projects/${projects.slug.current}`}>
                                    <Card sx={cardStyles}>
                                        {projects.mainProjectImage && (
                                          <Image
                                              src={urlFor(projects.mainProjectImage).auto('format').url()}
                                              alt={projects.title}
                                              width={330}
                                              height={270}
                                              style={{ borderRadius: '10px' }}
                                          />
                                        )}
                                        <Box sx={cardInfoStyles}>
                                            <Typography variant='body2' sx={projectTypeStyles}>
                                                {projects.development}
                                            </Typography>
                                            <Typography variant='body2' sx={projectTitleCard}>
                                                {projects.title}
                                            </Typography>
                                            <Typography variant='body2' sx={projectAreaCard}>
                                                Area {formatArea(projects.squareFootage)}
                                            </Typography>
                                            <Typography variant='body2' sx={projectPriceCard}>
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