import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import SocialIcons from "./mainNavSocials";
import NoBgLogo from "../../../public/images/logo/logoNoBg.png";
import BurgerNav from "./burgerNav";
import { navContents } from "./navContentStyles"

interface Props {
  children?: React.ReactNode;
}

const StyledAppBar = styled(AppBar)({
  height: "6rem",
  backgroundColor: "#fff",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
  position: "fixed",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledImage = styled(Image)({
  height: "8rem",
  width: "auto",
});

export default function MainNavBar(props: Props): JSX.Element {
  return (
    <React.Fragment>
      <Box sx={{ marginTop: "-4rem" }}>
        <StyledAppBar position="sticky">
          <StyledToolbar>
            <Link href="/">
              <StyledImage src={NoBgLogo} alt="" />
            </Link>
            <Box sx={navContents}>
              <SocialIcons />
              <BurgerNav />
            </Box>
          </StyledToolbar>
        </StyledAppBar>
        <Toolbar />
      </Box>
    </React.Fragment>
  );
}
