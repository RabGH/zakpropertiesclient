import React from 'react';
import { Box, Typography } from '@mui/material';
import MainJouri from '../../../../assets/images/project_images/project2/jouri-hills-1.jpg'
import { useTheme } from '@mui/material/styles'
import GeneralButton from '../../../general/GButton';
import LogoImage from '../../../../assets/images/logo/logoNoBg.png'
import Image from 'next/image'



function HomeImage() {
  const muiTheme = useTheme();

  const mainContainer = {
    position: 'relative',
    textAlign: 'left',
    color: 'white',
    height: '100vh',
  };

  const imgContainer = {
    mt: '5rem',
    opacity: '100%',
  };

  const buttonStyle = {
    position: 'relative' as 'relative',
    zIndex: 1,
    marginTop: '1rem',
    width: '22rem',
    // boxShadow: "0px 2px 5px rgba(0, 0, 0, 1)",
    // backgroundColor: muiTheme.palette.secondary.dark,
    borderRadius: 15,
    color: 'white',
    fontWeight: 'bold',
    // '&:hover': {
    //   backgroundColor: muiTheme.palette.secondary.main,
    //   color: 'white'
    // },
    // ml: '8.5rem',
  };

  const boxContainer = {
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
  };

  const innerImage = {
    // backgroundColor: 'rgba(135, 235, 147, 0.1)',
    // boxShadow: "0px 2px 5px rgba(0, 0, 0, 1)",
    borderRadius: '20rem',
  };

  const topTitle = {
    color: 'white',
    // fontWeight: 'bold',
  };

  const bottomTitle = {
    color: 'white',

  };
  // rgba(135, 235, 147, 0.1) green
  // rgba(55, 96, 184, 0.1) blue
  return (
    <Box sx={mainContainer}>
      <Box sx={imgContainer}>
        <Image src={MainJouri} alt='' />
      </Box>
        <Box sx={boxContainer}>
          <Box sx={innerImage}>
            {/* <img src={LogoImage} alt='logo'/> */}
            <Typography variant='h5' component='div' sx={topTitle}>
              New Development
            </Typography>
            <Typography variant='h1' component='div' sx={bottomTitle}>
              JouriHills
            </Typography>
          </Box>
          <GeneralButton
            variant='outlined'
            size='large'
            onClick={() => (window.location.href = '/contact')}
            sx={buttonStyle}
          >
            Learn More
          </GeneralButton>
        </Box>
    </Box>
  );
}

export default HomeImage;