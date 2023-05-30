import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";

function Error() {
  return (
    <Container>
      <Box>
        <Typography variant="h4">Error</Typography>
        <Typography variant="body1">Error, return to home page.</Typography>
        <Container>
          <Box>
            <Box>
              <Button
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Home
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                Contact
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

export default Error;
