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
  const query = `*[_type == "paymentPlan"]{
            _id,
            name,
            type,
            customType,
            paymentPlanPoints[]
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
