import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useScrollTrigger } from "@mui/material";
import { getNavBarStyles } from "../navContentStyles";

export default function OpenFadeNav() {
  const theme = useTheme();
  const styles = getNavBarStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
    target: typeof window !== "undefined" ? window : undefined,
  });

  const fadeButtonStyles = {
    fontWeight: "bold",
    transition: "all 0.9s ease-out",
    "&:hover": {
      color: trigger ? theme.palette.error.light : theme.palette.grey[300],
    },
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={styles.fadeOpenStackStyles}
    >
      <Button
        variant="text"
        color={trigger ? "inherit" : "primary"}
        sx={fadeButtonStyles}
        href="/"
      >
        Home
      </Button>
      <Button
        variant="text"
        color={trigger ? "inherit" : "primary"}
        sx={fadeButtonStyles}
        href="aboutUs"
      >
        About
      </Button>
      <Button
        variant="text"
        color={trigger ? "inherit" : "primary"}
        sx={fadeButtonStyles}
        href="/contactUs"
      >
        Contact
      </Button>
      <Button
        variant="text"
        color={trigger ? "inherit" : "primary"}
        sx={fadeButtonStyles}
        href="/developments"
      >
        Developments
      </Button>
      <Button
        variant="text"
        color={trigger ? "inherit" : "primary"}
        sx={fadeButtonStyles}
        href="/buyProperties"
      >
        Buy Properties
      </Button>
      <Button
        variant="text"
        color={trigger ? "inherit" : "primary"}
        sx={fadeButtonStyles}
        href="/faq"
      >
        FAQ
      </Button>
      <Button
        variant="outlined"
        color={trigger ? "inherit" : "primary"}
        sx={{
          fontWeight: "bold",
          borderColor: trigger
            ? theme.palette.primary.main
            : theme.palette.grey[300],
          transition: "all 0.9s ease-out",
          "&:hover": {
            borderColor: trigger
              ? theme.palette.error.light
              : theme.palette.grey[400],
            color: trigger
              ? theme.palette.error.light
              : theme.palette.grey[400],
          },
        }}
        href="/signIn"
      >
        Sign In
      </Button>
    </Stack>
  );
}
