import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SlSocialInstagram } from 'react-icons/sl';
import { FaFacebookMessenger } from 'react-icons/fa';
import { SlSocialTwitter } from 'react-icons/sl';
import { SiTiktok } from 'react-icons/si';
import { TfiYoutube } from 'react-icons/tfi';
import Link from '@mui/material/Link';
import GeneralButton from '../general/GButton';

function Footer() {
  const muiTheme = useTheme();

  const mainContainer = {
    bgcolor: muiTheme.palette.success.main,
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
    marginBottom: '16px',
  };

  const linkStyle = {
    color: muiTheme.palette.primary.main,
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: '18px',
    margin: '0 16px',
    '&:hover': {
      color: muiTheme.palette.primary.light,
      textDecoration: 'none',
    },
  };

  const socials = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
  };

  const socialIcons = {
    fontSize: '25px',
    marginBottom: '0.5rem',
    color: muiTheme.palette.secondary.main,
    '&:hover': {
      color: muiTheme.palette.secondary.light,
    },
  };

  const buttonStyles = { 
    fontWeight: 'bold', 
    color: muiTheme.palette.primary.main 
  };

  return (
    <Box sx={mainContainer}>
      <Box sx={linkBox}>
        <Link href="/" sx={linkStyle}>
          Home
        </Link>
        <Link href="/about" sx={linkStyle}>
          About
        </Link>
        <Link href="/contact" sx={linkStyle}>
          Contact
        </Link>
        <Link href="/project1" sx={linkStyle}>
          Project 1
        </Link>
        <Link href="/project2" sx={linkStyle}>
          Project 2
        </Link>
        <Link href="/project3" sx={linkStyle}>
          Project 3
        </Link>
      </Box>
      <Box sx={linkBox}>
        <Typography variant="h6" gutterBottom>
          
        </Typography>
        <Box sx={socials}>
          <Link sx={socialIcons} target="__blank" href="https://www.facebook.com/">
            <FaFacebookMessenger />
          </Link>
          <Link sx={socialIcons} target="__blank" href="https://twitter.com/">
            <SlSocialTwitter />
          </Link>
          <Link sx={socialIcons} target="__blank" href="https://www.instagram.com/">
            <SlSocialInstagram />
          </Link>
          <Link sx={socialIcons} target="__blank" href="https://www.youtube.com/">
            <TfiYoutube />
          </Link>
          <Link sx={socialIcons} target="__blank" href="https://www.tiktok.com/en/">
            <SiTiktok />
          </Link>
        </Box>
      </Box>
      <GeneralButton variant="outlined" sx={buttonStyles}>
        Contact Us
      </GeneralButton>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        © 2023 ZakProperties. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
