import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GeneralButton from './GButton';
import Image from 'next/image'

export interface GeneralHeaderImageProps {
  imageSrc: string;
  logoSrc: string;
  url: string;
  buttonText?: string;
  button?: React.CSSProperties;
  showButton?: boolean;
}

function GeneralHeaderImage({ imageSrc, logoSrc, url, buttonText, showButton }: GeneralHeaderImageProps) {
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
    backgroundColor: muiTheme.palette.secondary.dark,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: muiTheme.palette.secondary.main,
      color: 'white'
    },
    position: 'relative' as 'relative',
    zIndex: 1,
    marginTop: '1rem',
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 1)",
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
    backgroundColor: 'rgba(135, 235, 147, 0.1)',
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 1)",
  };

  return (
    <Box sx={mainContainer}>
      <Box sx={imgContainer}>
        <Image src={imageSrc} alt='' />
      </Box>
      <Box sx={boxContainer}>
        <Box sx={innerImage}>
          <Image src={logoSrc} alt='logo'/>
        </Box>
        {showButton && (
          <GeneralButton
            variant='contained'
            size='large'
            onClick={() => (window.location.href = url)}
            sx={buttonStyle}
          >
            {buttonText}
          </GeneralButton>
        )}
      </Box>
    </Box>
  );
}

export default GeneralHeaderImage;
