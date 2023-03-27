import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { useScrollTrigger } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import NoBgLogo from "../../../public/images/logo/logoNoBg.png";

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
      transition: "all 0.3s ease-out", // add a transition to the Box component
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
});

const StyledImage = styled(Image)({
  height: "8rem",
  width: "auto",
  filter: "invert(1)",
});

export default function ElevateAppBar(props: Props): JSX.Element {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll {...props}>
          <StyledAppBar position="sticky">
            <StyledToolbar>
              <StyledImage src={NoBgLogo} alt="" />
            </StyledToolbar>
          </StyledAppBar>
        </ElevationScroll>
        <Toolbar />
      </Box>
    </React.Fragment>
  );
}
