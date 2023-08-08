import * as React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import Head from "next/head";
import { sanityClient } from "@lib/sanity";
import { PaymentPlan } from "@lib/types";
import { getPaymentPlanStyles } from "@/components/pageComponents/paymentPlan/paymentPlanStyles";

type PaymentPlanList = {
  paymentPlans: PaymentPlan[];
};

const PaymentPlanFAQ: React.FC<PaymentPlanList> = ({ paymentPlans }) => {
  const styles = getPaymentPlanStyles();

  return (
    <Container>
      <Head>
        <title>ZakProperties Payment Plan FAQ Page</title>
        <meta
          name="description"
          content="ZakProperties Payment Plan FAQ Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={styles.mainContainer}>
        <Typography variant="h2" align="center" sx={{ mt: "5rem" }}>
          Payment Plan FAQ
        </Typography>

        <Grid container spacing={4}>
          {paymentPlans.map((paymentPlan) => (
            <Grid item xs={12} md={6} key={paymentPlan._id}>
              <Card sx={{ p: "1rem", "&:hover": { transform: "scale(1.05)" } }}>
                <CardContent>
                  <Typography variant="h4" sx={styles.paymentPlanNameStyles}>
                    {paymentPlan.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={styles.paymentPlanDescriptionStyles}
                  >
                    {paymentPlan.description}
                  </Typography>
                  <Typography variant="body2" sx={styles.paymentPlanInfoStyles}>
                    Type: {paymentPlan.type}
                  </Typography>
                  <Typography variant="body2" sx={styles.paymentPlanInfoStyles}>
                    Reference: {paymentPlan.reference}
                  </Typography>
                  <Typography variant="body2" sx={styles.paymentPlanInfoStyles}>
                    Validity: {paymentPlan.validity}
                  </Typography>
                  <Typography variant="body2" sx={styles.paymentPlanInfoStyles}>
                    Timeline: {paymentPlan.timeline}
                  </Typography>
                  <Typography variant="body2" sx={styles.paymentPlanInfoStyles}>
                    Amount Type: {paymentPlan.amountType}
                  </Typography>
                  <Typography variant="body2" sx={styles.paymentPlanInfoStyles}>
                    Amount Absolute: {paymentPlan.amountAbsolute}
                  </Typography>
                  <Typography variant="body2" sx={styles.paymentPlanInfoStyles}>
                    Amount Percentage: {paymentPlan.amountPercentage}
                  </Typography>
                  <Typography variant="body2" sx={styles.paymentPlanInfoStyles}>
                    Interest Rate: {paymentPlan.interestRate}
                  </Typography>
                  <Typography variant="body2" sx={styles.paymentPlanInfoStyles}>
                    Penalty: {paymentPlan.penalty}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export async function getStaticProps() {
  const query = `*[_type == "paymentPlans"]{
            _id,
            name,
            type,
            reference,
            description,
            validity,
            timeline,
            amountType,
            amountAbsolute,
            amountPercentage,
            interestRate,
            penalty
        }`;

  const paymentPlans = await sanityClient.fetch<PaymentPlan[]>(query);

  return {
    props: {
      paymentPlans,
    },
    revalidate: 60,
  };
}

export default PaymentPlanFAQ;
