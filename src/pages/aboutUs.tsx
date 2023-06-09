import * as React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Link,
} from "@mui/material";
import Image from "next/image";
import logoContact from "../../public/images/logo/logoNoBg.png";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PublicIcon from "@mui/icons-material/Public";
import Head from "next/head";

const AboutPage: React.FC = () => {
  const aboutMainContainer = {
    display: "grid",
    justifyItems: "center",
    mt: 10,
    p: 1,
    "@media (max-width: 600px)": {},
    "@media (max-width: 400px)": {},
  };

  const aboutLogoStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "200px",
    filter: "invert(100%)",
    m: "0 auto",
  };

  const aboutLogoImageStyles = {
    width: "auto",
  };

  return (
    <Container>
      <Head>
        <title>ZakProperties About Page</title>
        <meta name="description" content="ZakProperties About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={aboutMainContainer}>
        <Typography variant="h2" align="center" sx={{ mb: "4rem", mt: "3rem" }}>
          About Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: "1rem", "&:hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                <Typography variant="h1">
                  <DesignServicesIcon /> Our Services
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  We offer a wide range of services, including property sales,
                  management, valuation, consultancy, and marketing.
                </Typography>
                <Typography variant="body1">
                  We have access to the best properties and projects in the UAE,
                  as well as a network of local and international partners. We
                  use the latest technology and market research to provide our
                  clients with the best solutions for their real estate needs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: "1rem", "&:hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                <Typography variant="h1">
                  <WavingHandIcon />
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
            <Card sx={{ p: "1rem", "&:hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                <Typography variant="h1">
                  <RemoveRedEyeIcon /> Our Vision
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Our vision is to be the most trusted and respected real estate
                  company in the region, delivering exceptional value and
                  service to our customers.
                </Typography>
                <Typography variant="body1">
                  We aim to create long-term relationships with our clients and
                  partners, based on mutual respect and trust. We also aspire to
                  contribute to the social and economic development of the
                  communities we serve.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: "1rem", "&:hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                <Typography variant="h1">
                  <PublicIcon />
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

          <Grid
            item
            xs={12}
            sx={{
              justify: "center",
              direction: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={aboutLogoStyles}>
              {Image != null && (
                <Image
                  src={logoContact}
                  alt="logo"
                  style={aboutLogoImageStyles}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,..."
                />
              )}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography variant="h4" sx={{ mb: "0.7rem" }}>
            Contact Us
          </Typography>

          <Typography variant="body1" sx={{ mb: "0.9rem" }}>
            Have a question or need help with buying or selling a property?
            We&apos;re here to help!
          </Typography>

          <Link href="/contactUs">
            <Button variant="contained" sx={{ mb: "5rem" }}>
              Contact Us
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;
