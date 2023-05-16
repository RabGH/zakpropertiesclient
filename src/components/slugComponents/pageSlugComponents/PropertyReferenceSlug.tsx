import { Typography, Box, Button, Card } from "@mui/material";
import { formatPrice } from "../../../../lib/utils";
import { Property } from "../../../../lib/types";
import Link from "next/link";

interface PropertyReferenceProps {
  totalPrice: number;
  id: string;
  propertyOffPlan:
    | boolean
    | { offplan?: boolean; propertyCompletionDate?: string };
}

const PropertyReference = ({
  totalPrice,
  id,
  propertyOffPlan,
}: PropertyReferenceProps) => {
  const stickyStyles = {
    position: "sticky",
    top: "100px",
    margin: "1rem",
    padding: "1rem",
    border: "none",
    borderRadius: "0.5rem",
    boxShadow: "0.5rem 0.5rem 0.5rem gray",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "60%",
  };

  const buttonStyles = {
    mt: "1rem",
  };

  const idStyles = {};
  const priceStyles = {
    mt: "0.5rem",
    mb: "0.5rem",
  };
  const mainOffPlanBoxStyles = {};
  const offPlanProjectBoxStyles = {};
  const offPlanTypoStyles = {};
  const offPlanCompletionStyles = {};
  const readyToBuyStyles = {};

  return (
    <Box>
      <Card sx={stickyStyles}>
        <Typography variant="body2" sx={idStyles}>
          Reference ID: {id}
        </Typography>
        <Typography variant="h6" sx={priceStyles}>
          {formatPrice(totalPrice)}
        </Typography>
        <Box sx={mainOffPlanBoxStyles}>
          {propertyOffPlan &&
          typeof propertyOffPlan === "object" &&
          propertyOffPlan.offplan ? (
            <Box sx={offPlanProjectBoxStyles}>
              <Typography variant="body2" sx={offPlanTypoStyles}>
                Off-plan project
              </Typography>
              {propertyOffPlan.propertyCompletionDate && (
                <Typography variant="body2" sx={offPlanCompletionStyles}>
                  Completion date: {propertyOffPlan.propertyCompletionDate}
                </Typography>
              )}
            </Box>
          ) : (
            <Typography variant="body2" sx={readyToBuyStyles}>
              Ready to buy
            </Typography>
          )}
        </Box>
        <Link href="/contact" passHref>
          <Button variant="contained" sx={buttonStyles}>
            Learn More
          </Button>
        </Link>
      </Card>
    </Box>
  );
};

export default PropertyReference;
