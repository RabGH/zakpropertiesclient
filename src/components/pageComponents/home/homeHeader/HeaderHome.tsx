import React from 'react'
import HomeImage from './ImageHome';
import { Box } from '@mui/material';

const Header = () => {

const imgPosition = {
    height: '100%',
    width: 'auto',
    objectFit: 'cover',
};

  return (
    <Box sx={{imgPosition}}>
        <HomeImage/>
    </Box>
  )
}

export default Header