import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { useScrollTrigger } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FadeNavSocials from "./fadeNavSocials";
import FadeBurgerNav from "../homeNavBar/fadeBurgerNav";
import NoBgLogo from "../../../../public/images/logo/logoNoBg.png";
import { getNavBarStyles } from "../navContentStyles";

interface Props {
  children?: React.ReactNode;
}

interface ElevationScrollProps {
  children: React.ReactElement;
}

const ElevationScroll = ({ children }: ElevationScrollProps): JSX.Element => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
    target: typeof window !== "undefined" ? window : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: trigger ? theme.palette.primary.light : "transparent",
      transition: "all 0.9s ease-out",
    },
  });
};

const StyledAppBar = styled(AppBar)({
  height: "6rem",
  backgroundColor: "transparent",
  boxShadow: "none",
  position: "fixed",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width: 600px)": {},
  "@media (max-width: 400px)": {},
});

const StyledImage = styled(Image)({
  height: "8rem",
  width: "auto",
  transition: "all 0.9s ease-out",
  "@media (max-width: 600px)": {
    width: "10rem",
    height: "7rem",
  },
  "@media (max-width: 400px)": {
    width: "10rem",
    height: "7rem",
  },
});

export default function ElevateAppBar(props: Props): JSX.Element {
  const styles = getNavBarStyles();
  const [inverted, setInverted] = React.useState(true);

  const handleScroll = React.useCallback(() => {
    const { scrollTop } = document.documentElement;
    setInverted(scrollTop === 0);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <React.Fragment>
      <Box sx={{ marginTop: "-4rem" }}>
        <ElevationScroll {...props}>
          <StyledAppBar position="sticky">
            <StyledToolbar>
              <Link href="/">
                <StyledImage
                  src={NoBgLogo}
                  alt="Logo"
                  style={{ filter: inverted ? "invert(100%)" : "none" }}
                />
              </Link>
              <Box sx={styles.navContents}>
                <FadeNavSocials />
                <FadeBurgerNav />
              </Box>
            </StyledToolbar>
          </StyledAppBar>
        </ElevationScroll>
        <Toolbar />
      </Box>
    </React.Fragment>
  );
}
