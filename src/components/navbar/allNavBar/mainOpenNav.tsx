import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { getNavBarStyles } from "../navContentStyles";

export default function OpenNav() {
  const theme = useTheme();
  const styles = getNavBarStyles();
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
        sx={styles.openButtonStyles}
        href="/"
      >
        Home
      </Button>
      <Button
        variant="text"
        color="secondary"
        sx={styles.openButtonStyles}
        href="aboutUs"
      >
        About
      </Button>
      <Button
        variant="text"
        color="secondary"
        sx={styles.openButtonStyles}
        href="contactUs"
      >
        Contact
      </Button>
      <Button
        variant="text"
        color="secondary"
        sx={styles.openButtonStyles}
        href="developments"
      >
        Developments
      </Button>
      <Button
        variant="text"
        color="secondary"
        sx={styles.openButtonStyles}
        href="buyProperties"
      >
        Buy Properties
      </Button>
      <Button
        variant="text"
        color="secondary"
        sx={styles.openButtonStyles}
        href="faq"
      >
        FAQ
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          fontWeight: "bold",
          borderColor: theme.palette.primary.main,
          "&:hover": {
            borderColor: theme.palette.error.light,
            color: theme.palette.error.light,
          },
          color: "#000000",
        }}
        href="/signIn"
      >
        Sign In
      </Button>
    </Stack>
  );
}
