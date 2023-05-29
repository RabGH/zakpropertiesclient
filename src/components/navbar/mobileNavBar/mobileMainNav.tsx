import * as React from "react";
import { styled } from "@mui/material/styles";
import BurgerNav from "../allNavBar/burgerNav";
import SocialIcons from "../allNavBar/mainNavSocials";
import { getNavBarStyles } from "../navContentStyles";
import { useTheme, Box, Toolbar, AppBar, IconButton } from "@mui/material";
import { Search, Home } from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Link from "next/link";

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
export default function MobileMainNavBar(props: Props): JSX.Element {
  const theme = useTheme();
  const styles = getNavBarStyles();
  return (
    <React.Fragment>
      <Box sx={{ marginTop: "-4rem" }}>
        <StyledAppBar position="sticky">
          <StyledToolbar>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Link href="/profile">
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <AccountBoxIcon />
                </IconButton>
              </Link>
              <Link href="/buyProperties">
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <Search />
                </IconButton>
              </Link>
              <Link href="/">
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <Home />
                </IconButton>
              </Link>
            </Box>
            <Box sx={styles.navContents}>
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
