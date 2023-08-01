import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import SocialIcons from "./mainNavSocials";
// import NoBgLogo from "../../../../public/images/logo/logoNoBg.png";
import NoBgLogo from "../../../../public/images/logo/New_Logo-nobg.png";
import BurgerNav from "./mainBurgerNav";
import { getNavBarStyles } from "../navContentStyles";
import OpenNav from "./mainOpenNav";

interface Props {
  children?: React.ReactNode;
}

const StyledAppBar = styled(AppBar)({
  height: "4rem",
  backgroundColor: "#fff",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
  position: "fixed",
  m: "0 auto",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledImage = styled(Image)({
  height: "2.5rem",
  width: "auto",
  verticalAlign: "bottom",
  "@media (max-width: 600px)": {
    height: "7.5rem",
  },
  "@media (max-width: 400px)": {},
});

//! Shouldn't be -4 and check container
export default function MainNavBar(props: Props): JSX.Element {
  const styles = getNavBarStyles();
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ marginTop: "-4rem" }}>
          <StyledAppBar position="sticky">
            <StyledToolbar>
              <Link href="/">
                <StyledImage src={NoBgLogo} alt="Logo" />
              </Link>
              <Box sx={styles.navContents}>
                <OpenNav />
                <SocialIcons />
                <BurgerNav />
              </Box>
            </StyledToolbar>
          </StyledAppBar>
          <Toolbar />
        </Box>
      </Container>
    </React.Fragment>
  );
}
