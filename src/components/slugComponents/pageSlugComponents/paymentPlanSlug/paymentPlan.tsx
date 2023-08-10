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
          <Typography variant="body1">
            {plan.description ?? "No description provided"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPlanSlug;
