import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import SocialIcons from "./mainNavSocials";
import NoBgLogo from "../../../../public/images/logo/logoNoBg.png";
import BurgerNav from "./burgerNav";
import { getNavBarStyles } from "../navContentStyles";

interface Props {
  children?: React.ReactNode;
}

const StyledAppBar = styled(AppBar)({
  height: "6rem",
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
  height: "8rem",
  width: "auto",
  "@media (max-width: 600px)": {
    width: "10rem",
    height: "7rem",
  },
  "@media (max-width: 400px)": {
    width: "10rem",
    height: "7rem",
  },
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
