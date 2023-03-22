import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import Image from 'next/image';
import GeneralButton from '../../../general/GButton';
import LogoImage from '../../../../assets/images/logo/logoNoBg.png';
import MainJouri from '../../../../assets/images/project_images/project2/jouri-hills-1.jpg';
import GeneralImageCard from './../../../general/GImageCard';


function HomeImage() {
  const muiTheme = useTheme();

  const mainContainer = {
    height: '100vh',
  };

  const imgContainer = {
    mt: '-4rem',
    opacity: '100%',
  };

  const buttonStyle = {
    position: 'relative' as 'relative',
    zIndex: 1,
    marginTop: '1rem',
    width: '22rem',
    borderRadius: 15,
    color: 'white',
    fontWeight: 'bold',
  };

  const boxContainer = {
    display: 'flex',
    position: 'absolute',
    zIndex: '10',
    top: '25%',
    left: '20%',
  };

  const innerImage = {
    padding: '2rem',
  };

  const topTitle = {
    color: 'white',
    fontSize: '1.5rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  };

  const bottomTitle = {
    color: 'white',
    fontSize: '4.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const titleContainer = {
    mt: '5rem',
  };

  const cardContainer = {

  };

  const cardMediaStyles = {

  };

  return (
    <Box sx={mainContainer}>
      <Box sx={boxContainer}>
        <Box sx={titleContainer}>
          <Typography variant='h5' component='div' sx={topTitle}>
            New Development
          </Typography>
          <Typography variant='h1' component='div' sx={bottomTitle}>
            Jouri Hills
          </Typography>
  
          <GeneralButton
            variant='contained'
            size='large'
            onClick={() => (window.location.href = '/contact')}
            sx={buttonStyle}
          >
            Learn More
          </GeneralButton>
        </Box>
  
        <Box sx={innerImage}>
          <Box sx={cardContainer}>
            <GeneralImageCard title='Zak Properties' description='Properties to search' image={LogoImage} sx={cardMediaStyles} />
          </Box>
        </Box>
      </Box>
  
      <Box sx={imgContainer}>
        <Image src={MainJouri} alt='' />
      </Box>
    </Box>
  );
  
}

export default HomeImage;
