import * as React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import Link from "next/link";
import HelpIcon from "@mui/icons-material/Help";
import Image from "next/image";
import logoContact from "../../public/images/logo/logoNoBg.png";

// Sources
const source1 =
  "https://dubailand.gov.ae/en/frequently-asked-questions/#:~:text=How%20do%20I%20lease%20a%20property%20in%20UAE%3F";
const source2 =
  "https://www.propertyfinder.ae/blog/what-are-the-benefits-of-buying-a-property-in-dubai/";
const source3 =
  "https://vatregistrationuae.com/impact-of-vat-on-dubai-real-estate-market/";
const source4 =
  "https://www.tamimi.com/law-update-articles/can-real-estate-dubai-part-2-know-rights-real-estate-investors-dubai-guide/";
const source5 = "https://www.bayut.com/mybayut/mortgage-calculator-guide/";
const source6 =
  "https://www.propertyfinder.ae/blog/buying-off-plan-property-uae-need-know/";

const FAQ: React.FC = () => {
  const faqMainContainer = {
    display: "grid",
    justifyItems: "center",
  };

  const faqMainContainerBox = {
    mt: 10,
    p: 1,
  };

  const faqLogoStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "200px",
    filter: "invert(100%)",
    m: "0 auto",
    mt: "5rem",
  };

  const faqLogoImageStyles = {
    width: "auto",
  };

  const faqCardGridStyles = {
    justifyContent: "center",
  };

  const faqContainerGridStyles = {
    width: "100%",
  };
  //! FIX MARGIN
  return (
    <Container sx={faqMainContainer}>
      <Box sx={faqMainContainerBox}>
        <Typography variant="h2" align="center" sx={{ mb: "4rem", mt: "3rem" }}>
          Frequently Asked Questions
        </Typography>

        <Grid container spacing={2} sx={faqContainerGridStyles}>
          <Grid item xs={12} sm={6} md={6} lg={4} sx={faqCardGridStyles}>
            <Card sx={{ p: "1rem", "&:hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h1" sx={{ mb: "1rem" }}>
                    <HelpIcon color="primary" /> How do I lease a property in
                    UAE?
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  To lease a property in UAE, you need to contact a licensed
                  real estate agent or broker who can help you find a suitable
                  property and negotiate the terms of the lease agreement with
                  the landlord. You also need to provide some documents, such as
                  your passport, visa, Emirates ID, and proof of income, and pay
                  a security deposit and the rent in advance.
                </Typography>
                <Typography variant="body1">
                  You can also use online platforms, such as Dubai REST, to
                  access real estate services and perform transactions
                  electronically.
                  <Link
                    href={source1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [source]
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} sx={faqCardGridStyles}>
            <Card sx={{ p: "1rem", "&:hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h1" sx={{ mb: "1rem" }}>
                    <HelpIcon color="primary" /> What are the benefits of buying
                    a property in Dubai?
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Buying a property in Dubai has many benefits, such as:
                </Typography>
                <Typography variant="body1">
                  - You can enjoy a tax-free income from renting or selling your
                  property.
                </Typography>
                <Typography variant="body1">
                  - You can get a residency visa if you invest in a property
                  worth at least AED 1 million.
                </Typography>
                <Typography variant="body1">
                  - You can access a diverse and dynamic real estate market with
                  high returns on investment and capital appreciation.
                </Typography>
                <Typography variant="body1">
                  - You can choose from a wide range of properties and projects
                  that suit your budget and lifestyle.
                  <Link
                    href={source2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [source]
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={6} lg={4} sx={faqCardGridStyles}>
            <Card sx={{ p: "1rem", "&:hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h1" sx={{ mb: "1rem" }}>
                    <HelpIcon color="primary" /> How can I get a mortgage or
                    financing for buying a property in UAE?
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  To get a mortgage or financing for buying a property in UAE,
                  you need to apply to a bank or a financial institution that
                  offers such services. You also need to provide some documents,
                  such as your passport, visa, Emirates ID, proof of income,
                  bank statements, credit report, and property valuation report.
                </Typography>
                <Typography variant="body1">
                  The amount and terms of the mortgage or financing will depend
                  on various factors, such as your income, credit history,
                  property value, and loan-to-value ratio. Generally, the
                  maximum loan-to-value ratio for expatriates is 75% for the
                  first property and 60% for the second property. The repayment
                  period can range from 5 to 25 years, depending on your age and
                  eligibility.
                  <Link
                    href={source5}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [source]
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} sx={faqCardGridStyles}>
            <Card sx={{ p: "1rem", "&:hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h1" sx={{ mb: "1rem" }}>
                    <HelpIcon color="primary" /> What is VAT and how does it
                    affect real estate transactions in UAE?
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  VAT is a value-added tax that is applied to the supply of
                  goods and services in UAE. It is levied at a standard rate of
                  5%, except for some exempt or zero-rated supplies.
                </Typography>
                <Typography variant="body1">
                  VAT affects real estate transactions in UAE in different ways,
                  depending on the type and purpose of the property. For
                  example, the first supply of a new residential property within
                  the first three years of its construction is zero-rated, which
                  means no VAT is charged. However, the subsequent supply of the
                  same property is subject to VAT at 5%. Commercial properties,
                  on the other hand, are always subject to VAT at 5%, regardless
                  of whether they are new or not.
                  <Link
                    href={source3}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [source]
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} sx={faqCardGridStyles}>
            <Card sx={{ p: "1rem", "&:hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h1" sx={{ mb: "1rem" }}>
                    <HelpIcon color="primary" /> What are the legal requirements
                    for owning a property in UAE?
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  To own a property in UAE, you need to meet the following legal
                  requirements:
                </Typography>
                <Typography variant="body1">
                  - You must be at least 21 years old and have a valid passport
                  and visa.
                </Typography>
                <Typography variant="body1">
                  - You must register your property with the relevant authority,
                  such as the Dubai Land Department or the Abu Dhabi Department
                  of Municipalities and Transport, and pay the registration fees
                  and taxes.
                </Typography>
                <Typography variant="body1">
                  - You must obtain a title deed or an ownership certificate
                  that proves your ownership of the property.
                </Typography>
                <Typography variant="body1">
                  - You must comply with the laws and regulations governing real
                  estate transactions in UAE, such as obtaining the necessary
                  approvals and permits, paying the service charges and
                  maintenance fees, and respecting the rights and obligations of
                  other parties involved in the transaction.
                  <Link
                    href={source4}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [source]
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} sx={faqCardGridStyles}>
            <Card sx={{ p: "1rem", "&:hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h1" sx={{ mb: "1rem" }}>
                    <HelpIcon color="primary" /> What are off-plan projects and
                    properties in UAE?
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Off-plan projects and properties are properties that are not
                  yet constructed or are under construction, and are purchased
                  directly from the developer.
                </Typography>
                <Typography variant="body1">
                  Buying an off-plan property has some benefits, such as lower
                  prices, flexible payment plans, high capital gains, and
                  property regulations in Dubai that protect buyers from delays,
                  cancellations, and fraud. However, it also has some risks,
                  such as delayed completion time, quality issues, market
                  fluctuations, and legal disputes with developers or
                  contractors
                  <Link
                    href={source6}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [source]
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
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
          <Box sx={faqLogoStyles}>
            {Image != null && (
              <Image
                src={logoContact}
                alt="logo"
                style={faqLogoImageStyles}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..."
              />
            )}
          </Box>
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

export default FAQ;
