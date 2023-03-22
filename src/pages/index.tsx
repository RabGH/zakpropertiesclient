import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import Divider from '@mui/material/Divider';
import HomeImage from '../components/pageComponents/home/homeHeader/ImageHome';

import { PropertyProps, ProjectProps } from '../../types'

import PropertyCardSlug from '../components/slugComponents/cardSlugs/propertyCardSlugs/PropertyCardSlugs';
import ProjectsCardSlug from '../components/slugComponents/cardSlugs/projectCardSlugs/ProjectCardSlugs';

import { getServerSideProps } from '../components/slugComponents/cardSlugs/propertyCardSlugs/PropertyDataSlug';


interface HomeProps {
properties: PropertyProps[];
projects: ProjectProps[];
}

function Home({ properties, projects }: HomeProps) {
    const muiTheme = useTheme();

    const aboutProject = {
        mt: '1rem',
        mb: '1rem',
    };

    const titleProject = {
        mb: '-6rem',
    };

    const contentProject = {
      height: '50vh',
      mt: '7rem',
    };

    const mainContainer = {
    };

    const propertyCards = {

    };

    const projectCards = {

    };


  return (
    <Box sx={mainContainer}>
      <HomeImage />
      <Container sx={contentProject}>
       <Divider component='div' role='presentation' sx={aboutProject}>
         <Typography variant='h5' component='div'>
           About The Project
         </Typography>
       </Divider>
        <Typography variant='h4' component='div' sx={titleProject}>
          Luxury Living in A Golfing Haven A Stylish Enclave Of 294 Luxury Homes
        </Typography>
        <Typography variant='h6' component='div' sx={contentProject}>
          Jouri Hills is a new residential project, which will be located in Jumeirah Golf Estates, a world-class residential golf destination with luxury homes and leisure facilities.
          The developer of the project is Arada, known for its luxury projects in the emirate of Sharjah which include Aljada, Masaar and Nasma Residences.
          Future owners can choose a unit from 3-4 bedroom townhouses, 5-bedroom villas and 5-bedroom signature villas with private swimming pools. 
          Each of the 300 homes will be thoughtfully designed, and floor-to-ceiling windows and double-height spaces will provide you with maximum light throughout the day.
          As well as the townhouses and villas, there is also a limited collection of five 6-bedroom mansions with living areas of 15,089 sqft spread over four floors and consisting of breathtaking living spaces. 
          A landscaped courtyard and a private swimming pool will become one of your favourite places to relax, whilst the basement floor can become your private sports or entertainment hub.
        </Typography>
      </Container>
      <Grid container spacing={3} direction='column'>
        <Box sx={propertyCards}>
          <PropertyCardSlug properties={properties} />
        </Box>
      </Grid>
      <Box sx={projectCards}>
        <Grid container spacing={3} direction='column'>
          <ProjectsCardSlug projects={projects} />
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;

export { getServerSideProps };
