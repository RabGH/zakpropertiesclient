import { Box, Typography } from "@mui/material";
import {
  mainStyles,
  cardStyles,
  boxStyles,
  mainTitle,
} from "./paymentPlanStyles";
import { format } from "date-fns";
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
          <Typography variant="h4">
            {plan.name ?? "No name provided"}
          </Typography>
          
          <Typography variant="body1">
            Type:{" "}
            {plan.type === "Other"
              ? plan.customType ?? "No custom type provided"
              : plan.type ?? "No type provided"}
          </Typography>

          <Typography variant="body1">
            Reference: {plan.reference ?? "No reference provided"}
          </Typography>

          <Typography variant="body1">
            {plan.description ?? "No description provided"}
          </Typography>

          <Typography variant="body1">
            {format(plan.validity?.startDate ?? new Date(), "yyyy-MM-dd")} to{" "}
            {format(plan.validity?.endDate ?? new Date(), "yyyy-MM-dd")}
            {plan.validity?.changeable && " (subject to change)"}
          </Typography>

          {/* <Typography variant="body1">Timeline:</Typography>
          <ul>
            {plan.timeline?.map((item) => (
              <li key={item.item}>
                {item.item ?? "No item provided"}: Due on{" "}
                {format(item.dueDate ?? new Date(), "yyyy-MM-dd")}
              </li>
            )) ?? <li>No timeline provided</li>}
          </ul> */}

          {/* <Typography variant="body1">
            Amount Type: {plan.amountType ?? "No amount type provided"}
          </Typography> */}

          {plan.amountType === "Absolute" && (
            <Typography variant="body1">
              Amount Absolute (AED): {plan.amountAbsolute ?? 0}
            </Typography>
          )}

          {/* {plan.amountType === "Percentage" && (
            <Typography variant="body1">
              Amount Percentage (%): {plan.amountPercentage ?? 0}
            </Typography>
          )} */}

          {plan.interestRate && (
            <Typography variant="body1">
              Interest Rate (%): {plan.interestRate}
            </Typography>
          )}

          {plan.penalty && (
            <>
              <Typography variant="body1">Penalty for late payment:</Typography>
              <ul>
                <li>Late Fee (AED): {plan.penalty.lateFee ?? 0}</li>
                <li>
                  Impact on Payment Plan:{" "}
                  {plan.penalty.impact ?? "No impact provided"}
                </li>
              </ul>
            </>
          )}
          
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPlanSlug;
