import { useTheme } from "@mui/material";

export const getPaymentPlanStyles = () => {
  const muiTheme = useTheme();

  return {
    mainContainer: {
      height: "100vh",
    },
    paymentPlanNameStyles: {},
    paymentPlanDescriptionStyles: {},
    paymentPlanInfoStyles: {},
  };
};
