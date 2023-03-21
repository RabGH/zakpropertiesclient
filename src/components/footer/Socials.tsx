import { SlSocialInstagram } from 'react-icons/sl';
import { FaFacebookMessenger } from 'react-icons/fa';
import { SlSocialTwitter } from 'react-icons/sl';
import { SiTiktok } from 'react-icons/si';
import { TfiYoutube } from 'react-icons/tfi';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';


function Socials () {
    const muiTheme = useTheme();
    const socials = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
      };
    
      const socialIcons = {
        fontSize: '25px',
        marginBottom: '0.5rem',
        color: muiTheme.palette.secondary.dark,
        '&:hover': {
        color: muiTheme.palette.secondary.light,
        },
      };

    return (
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
    );
}

export default Socials