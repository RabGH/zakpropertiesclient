import { Box, Typography } from "@mui/material";
import {
  mainStyles,
  cardStyles,
  boxStyles,
  mainTitle,
} from "./paymentPlanStyles";
import { PaymentPlan } from "@lib/types";

interface PaymentPlanSlugProps {
  paymentPlan: PaymentPlan;
}

const PaymentPlanSlug = ({ paymentPlan }: PaymentPlanSlugProps) => {
  const plan = paymentPlan;

  return (
    <Box sx={{ ...cardStyles, alignItems: "left" }}>
      <Typography variant="h3" sx={mainTitle}>
        Payment Plan
      </Typography>
      <Box
        sx={{
          ...boxStyles,
          gridTemplateColumns: "repeat(2, 6fr)",
          justifyContent: "space-between",
          gridColumnGap: "3rem",
        }}
      >
        <Box sx={mainStyles}>
          {plan.paymentPlanPoints ? (
            plan.paymentPlanPoints?.map((paymentPlanPoint) => (
              <Typography key={paymentPlanPoint} variant="body1">
                {paymentPlanPoint}
              </Typography>
            ))
          ) : (
            <Typography variant="body1" sx={mainStyles}>
              No Payment Plan Available
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPlanSlug;
