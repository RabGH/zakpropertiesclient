import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const theme = useTheme();
  const mainContainer = {
    backgroundColor: theme.palette.background.default,
    py: 8,
    height: "80vh",
    mt: "6rem",
  };

  return (
    <Box sx={mainContainer}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" align="center" sx={{ mb: 6 }}>
          About Us
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                  Who We Are
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  We are a leading real estate company based in the UAE,
                  specializing in the promotion and sale of properties, off-plan
                  properties, project properties, property investments, and
                  more.
                </Typography>
                <Typography variant="body1">
                  Our team of experienced professionals is dedicated to helping
                  clients find the perfect property and making the buying or
                  selling process as smooth and stress-free as possible.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Our mission is to provide the best real estate services to our
                  clients, with a focus on integrity, honesty, and
                  professionalism.
                </Typography>
                <Typography variant="body1">
                  We strive to exceed our clients&apos; expectations by
                  providing expert guidance and support throughout the entire
                  buying or selling process.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Contact Us
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Have a question or need help with buying or selling a property?
            We&apos;re here to help!
          </Typography>
          
          <Link href="/contact">
          <Button variant="contained">
            Contact Us
          </Button>
        </Link>

        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
