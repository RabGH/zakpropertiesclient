import { Box, Typography } from "@mui/material";
import { getPaymentPlanStyles } from "./paymentPlanStyles";
import { PaymentPlan } from "@lib/types";

interface PaymentPlanSlugProps {
  paymentPlan: PaymentPlan;
}

const PaymentPlanSlug = ({ paymentPlan }: PaymentPlanSlugProps) => {
  const plan = paymentPlan;
  const styles = getPaymentPlanStyles();

  return (
    <Box sx={{ ...styles.cardStyles, alignItems: "left" }}>
      <Typography variant="h3" sx={styles.mainTitle}>
        Payment Plan
      </Typography>
      <Box
        sx={{
          ...styles.boxStyles,
          gridTemplateColumns: "repeat(2, 6fr)",
          justifyContent: "space-between",
          gridColumnGap: "3rem",
        }}
      >
        <Box sx={styles.mainStyles}>
          {plan.paymentPlanPoints ? (
            plan.paymentPlanPoints?.map((paymentPlanPoint) => (
              <Typography key={paymentPlanPoint} variant="body1">
                {paymentPlanPoint}
              </Typography>
            ))
          ) : (
            <Typography variant="body1" sx={styles.mainStyles}>
              No Payment Plan Available
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPlanSlug;
