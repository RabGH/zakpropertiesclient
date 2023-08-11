import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { getNavBarStyles } from "../navContentStyles";
import { useRouter } from "next/router";

export default function OpenNav() {
  const theme = useTheme();
  const styles = getNavBarStyles();
  const router = useRouter();

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={styles.mainOpenStackStyles}
    >
      <Button
        variant="text"
        color="secondary"
        sx={{
          ...styles.openButtonStyles,
          backgroundColor:
            router.pathname === "/" ? "#1e657220" : "transparent",
        }}
        href="/"
      >
        Home
      </Button>
      <Button
        variant="text"
        color="secondary"
        sx={{
          ...styles.openButtonStyles,
          backgroundColor:
            router.pathname === "/aboutUs" ? "#1e657220" : "transparent",
        }}
        href="/aboutUs"
      >
        About
      </Button>
      <Button
        variant="text"
        color="secondary"
        sx={{
          ...styles.openButtonStyles,
          backgroundColor:
            router.pathname === "/contactUs" ? "#1e657220" : "transparent",
        }}
        href="/contactUs"
      >
        Contact
      </Button>
      <Button
        variant="text"
        color="secondary"
        sx={{
          ...styles.openButtonStyles,
          backgroundColor:
            router.pathname === "/projects" ? "#1e657220" : "transparent",
        }}
        href="/projects"
      >
        Projects
      </Button>
      <Button
        variant="text"
        color="secondary"
        sx={{
          ...styles.openButtonStyles,
          backgroundColor:
            router.pathname === "/faq" ? "#1e657220" : "transparent",
        }}
        href="/faq"
      >
        FAQ
      </Button>
      <Button
        variant="text"
        color="secondary"
        sx={{
          ...styles.openButtonStyles,
          backgroundColor:
            router.pathname === "/buyProperties" ? "#1e657220" : "transparent",
        }}
        href="/buyProperties"
      >
        Properties
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          fontWeight: "bold",
          borderColor: theme.palette.primary.main,
          maxHeight: "50px",
          "&:hover": {
            borderColor: theme.palette.error.light,
            color: theme.palette.error.light,
          },
          color: "#000000",
        }}
        href="/signIn"
      >
        Login
      </Button>
    </Stack>
  );
}
