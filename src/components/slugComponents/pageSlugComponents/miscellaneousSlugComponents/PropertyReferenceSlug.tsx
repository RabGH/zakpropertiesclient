import { Typography, Box, Button, Card } from "@mui/material";
import { isMultiple, formatPrice, formatArea } from "@lib/utils";
import moment from "moment";
import Link from "next/link";

interface PropertyReferenceProps {
  totalPrice: number;
  id: string;
  _id: string;
  squareFootage: number;
  bedrooms: number;
  propertyOffPlan:
    | boolean
    | { offplan?: boolean; propertyCompletionDate?: string };
}
const PropertyReference = ({
  totalPrice,
  id,
  _id,
  propertyOffPlan,
  squareFootage,
  bedrooms,
}: PropertyReferenceProps) => {
  const stickyStyles = {
    position: "sticky",
    top: "120px",
    margin: "1rem",
    padding: "1rem",
    border: "none",
    borderRadius: "0.5rem",
    boxShadow: "0.2rem 0.2rem 0.2rem gray",
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
    <Box sx={{ p: 5, mt: 2 }}>
      <Card sx={stickyStyles}>
        <Typography variant="body1" sx={idStyles}>
          Reference ID: {_id} ({id})
        </Typography>
        <Typography variant="h6" sx={priceStyles}>
          {formatPrice(totalPrice)}
        </Typography>
        <Typography variant="body1" sx={idStyles}>
          {bedrooms} Bedroom{isMultiple(bedrooms)}
        </Typography>
        <Typography variant="body1" sx={idStyles}>
          Area {formatArea(squareFootage)}
        </Typography>
        <Box sx={mainOffPlanBoxStyles}>
          {propertyOffPlan &&
          typeof propertyOffPlan === "object" &&
          propertyOffPlan.offplan ? (
            <Box sx={offPlanProjectBoxStyles}>
              <Typography variant="body1" sx={offPlanTypoStyles}>
                Off-plan project
              </Typography>
              {propertyOffPlan.propertyCompletionDate && (
                <Typography variant="body1" sx={offPlanCompletionStyles}>
                  Completion date:{" "}
                  {moment(propertyOffPlan.propertyCompletionDate).format(
                    "YYYY-MM-DD"
                  )}{" "}
                </Typography>
              )}
            </Box>
          ) : (
            <Typography variant="body1" sx={readyToBuyStyles}>
              Ready to buy
            </Typography>
          )}
        </Box>
        <Link href="/contactUs" passHref>
          <Button variant="contained" sx={buttonStyles}>
            Learn More
          </Button>
        </Link>
      </Card>
    </Box>
  );
};

export default PropertyReference;
