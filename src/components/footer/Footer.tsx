import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GeneralButton from '../general/GButton';
import Button from '@mui/material'
import  Link from 'next/link';
import Socials from './Socials'

function Footer() {
  const muiTheme = useTheme();

  const mainContainer = {
    bgcolor: muiTheme.palette.primary.light,
    borderTop: `1px solid ${muiTheme.palette.secondary.dark}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px 0',
  };

  const linkBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '8px',
  };

  const linkStyles = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: muiTheme.palette.secondary.dark,
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: '18px',
    margin: '0 0px',
    '&:hover': {
      color: muiTheme.palette.secondary.light,
      backgroundColor: 'transparent',
      boxShadow: 'none',
      textDecoration: 'none',
    },
  };

  const buttonStyles = { 
    fontWeight: 'bold', 
    color: muiTheme.palette.primary.main 
  };

  const copyRightStyles = { 
    color: muiTheme.palette.secondary.dark, fontWeight:  'bold' 
  };

  return (
    <Box sx={mainContainer}>
      <Box sx={linkBox}>

          <Link href='/'>
            <GeneralButton variant='contained' sx={linkStyles}>
              Home
            </GeneralButton>
          </Link>

        <Link href='/about'>
          <GeneralButton variant='contained' sx={linkStyles}>
            About
          </GeneralButton>
        </Link>
        
        <Link href='/contact'>
          <GeneralButton variant='contained' sx={linkStyles}>
              Contact
          </GeneralButton>
        </Link>

        <Link href='/project1'>
          <GeneralButton variant='contained' sx={linkStyles}>
              Project1
          </GeneralButton>
        </Link>

        <Link href='/project2'>
          <GeneralButton variant='contained' sx={linkStyles}>
              Project2
          </GeneralButton>
        </Link>

        <Link href='/project3'>
          <GeneralButton variant='contained' sx={linkStyles}>
              Project3
          </GeneralButton>
        </Link>

      </Box>
      <Box sx={linkBox}>
        <Typography variant='h6' gutterBottom>
          
        </Typography>
        <Socials />
      </Box>
      {/* <Link href='/contact'>
        <GeneralButton variant='outlined' sx={buttonStyles}>
          Contact Us
        </GeneralButton>
      </Link> */}
      <Typography variant='body2' align='center' sx={copyRightStyles}>
        © 2023 ZakProperties. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
