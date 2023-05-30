import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material";

const Styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  title: {
    marginBottom: "1rem",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
  },
};

function Error() {
  return (
    <Container sx={Styles.root}>
      <Typography variant="h4" sx={Styles.title}>
        Error
      </Typography>
      <Typography variant="body1">Error, return to home page.</Typography>
      <Box sx={Styles.buttons}>
        <Button onClick={() => (window.location.href = "/")}>Home</Button>
        <Button onClick={() => (window.location.href = "/contactUs")}>
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}

export default Error;
