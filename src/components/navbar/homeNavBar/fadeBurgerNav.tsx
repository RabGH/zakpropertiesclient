import * as React from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useScrollTrigger } from "@mui/material";
import Link from "next/link";
import { getNavBarStyles } from "../navContentStyles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

export default function FadeBurgerNav() {
  const styles = getNavBarStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = React.useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
    target: typeof window !== "undefined" ? window : undefined,
  });

  React.useEffect(() => {
    if (trigger) {
      setVisible(true);
    } else {
      setVisible(true);
    }
  }, [trigger]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.KeyboardEvent<HTMLElement>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        ...styles.mainBurgerBox,
        opacity: visible ? 1 : 0,
        transition: "all 0.3s ease-out",
      }}
    >
      <Box
        sx={{
          ...styles.burgerNavBox,
          borderColor: trigger ? "black" : "white",
        }}
      >
        <IconButton
          ref={anchorRef}
          onClick={handleToggle}
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{
            m: "0 auto",
            color: trigger ? "black" : "white",
          }}
        >
          <MenuIcon
            sx={{
              ...styles.menuIconStyles,
              color: trigger ? "black" : "white",
            }}
          />
        </IconButton>
        <Popover
          sx={styles.popperStyles}
          open={open}
          anchorEl={anchorRef.current}
          onClose={handleClose}
          disableScrollLock
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          transformOrigin={{ horizontal: 0, vertical: -5 }}
        >
          <Stack direction="row" spacing={0.5}>
            <Grid item xs={6}>
              <MenuList
                autoFocusItem={open}
                id="menu-list-grow"
                onKeyDown={handleClose}
              >
                <Link href="/">
                  <MenuItem
                    onClick={() => setOpen(false)}
                    onKeyDown={handleClose}
                  >
                    Home
                  </MenuItem>
                </Link>
                <Link href="/aboutUs">
                  <MenuItem
                    onClick={() => setOpen(false)}
                    onKeyDown={handleClose}
                  >
                    About
                  </MenuItem>
                </Link>
                <Link href="/contactUs">
                  <MenuItem
                    onClick={() => setOpen(false)}
                    onKeyDown={handleClose}
                  >
                    Contact
                  </MenuItem>
                </Link>
                <Link href="/viewDevelopers">
                  <MenuItem
                    onClick={() => setOpen(false)}
                    onKeyDown={handleClose}
                  >
                    Developers
                  </MenuItem>
                </Link>
                <Link href="/viewProjects">
                  <MenuItem
                    onClick={() => setOpen(false)}
                    onKeyDown={handleClose}
                  >
                    Projects
                  </MenuItem>
                </Link>
                <Link href="/buyProperties">
                  <MenuItem
                    onClick={() => setOpen(false)}
                    onKeyDown={handleClose}
                  >
                    Buy Properties
                  </MenuItem>
                </Link>
                <Link href="/faq">
                  <MenuItem
                    onClick={() => setOpen(false)}
                    onKeyDown={handleClose}
                  >
                    FAQ
                  </MenuItem>
                </Link>
              </MenuList>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={6}>
              <Stack direction="column" spacing={1} alignItems="center">
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    ...styles.signInButtonStyles,
                    borderColor: trigger ? "black" : "white",
                  }}
                >
                  Sign In
                </Button>
                <Divider orientation="horizontal" flexItem />
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleClose}
                >
                  <MenuItem>Follows</MenuItem>
                  <MenuItem>Saved Searches</MenuItem>
                </MenuList>
              </Stack>
            </Grid>
          </Stack>
        </Popover>
      </Box>
    </Box>
  );
}
