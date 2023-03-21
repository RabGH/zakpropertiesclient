import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

import NoBgLogo from '../../assets/images/logo/logoNoBg.png';

interface Props {
  children: React.ReactNode;
}

interface HideOnScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll = ({ children }: HideOnScrollProps): JSX.Element => {
  const [lastScrollTop, setLastScrollTop] = React.useState<number>(0);
  const [hidden, setHidden] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setHidden(scrollTop > lastScrollTop && scrollTop > 60);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); 
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [lastScrollTop]);

  return (
    <Slide appear={false} direction="down" in={!hidden}>
      <div>{children}</div>
    </Slide>
  );
};

const StyledAppBar = styled(AppBar)({
  transition: 'height 0.5s',
  height: '15rem'
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const StyledImage = styled(Image)({
  height: '8rem',
  width: 'auto'
});

export default function ElevateAppBar(props: Props): JSX.Element {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <StyledAppBar>
          <StyledToolbar>
            <StyledImage src={NoBgLogo} alt='' />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Awesome App
            </Typography>
          </StyledToolbar>
        </StyledAppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
