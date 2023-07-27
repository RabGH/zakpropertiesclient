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
  const referenceMainBoxStyles = {
    "@media (max-width: 425px)": {
      display: "none",
    },
  };
  const stickyStyles = {
    position: "sticky",
    top: "120px",
    m: "1rem",
    p: "1rem",
    border: "none",
    borderRadius: "0.5rem",
    boxShadow: "0.2rem 0.2rem 0.2rem gray",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "80%",
  };

  const buttonStyles = {
    mt: "1rem",
    "@media (max-width: 768px)": {
      mt: 1,
      alignSelfSelf: "flex-end",
      order: 1,
    },
  };

  const idStyles = {
    "@media (max-width: 768px)": {
      mt: 1,
      lineHeight: 1.2,
    },
  };
  const priceStyles = {
    mt: "0.5rem",
    mb: "0.5rem",
    "@media (max-width: 768px)": {
      lineHeight: 1.2,
    },
  };

  const mainOffPlanBoxStyles = {};

  const offPlanProjectBoxStyles = {};

  const offPlanCompletionStyles = {
    "@media (max-width: 768px)": {
      lineHeight: 1.2,
    },
  };

  const readyToBuyStyles = {
    "@media (max-width: 768px)": {
      lineHeight: 1.2,
    },
  };

  const offPlanTypeStyles = {
    "@media (max-width: 768px)": {
      display: "none",
    },
  };

  const bedroomStyles = {
    "@media (max-width: 768px)": {
      display: "none",
    },
  };
  const areaStyles = {
    "@media (max-width: 768px)": {
      display: "none",
    },
  };

  // Reference ID: {_id}

  return (
    <Box sx={referenceMainBoxStyles}>
      <Card sx={stickyStyles}>
        <Typography variant="body1" sx={idStyles}>
          Reference ID: {id}
        </Typography>
        <Typography variant="h6" sx={priceStyles}>
          {formatPrice(totalPrice)}
        </Typography>
        <Typography variant="body1" sx={bedroomStyles}>
          {bedrooms} Bedroom{isMultiple(bedrooms)}
        </Typography>
        <Typography variant="body1" sx={areaStyles}>
          Area {formatArea(squareFootage)}
        </Typography>
        <Box sx={mainOffPlanBoxStyles}>
          {propertyOffPlan &&
          typeof propertyOffPlan === "object" &&
          propertyOffPlan.offplan ? (
            <Box sx={offPlanProjectBoxStyles}>
              <Typography variant="body1" sx={offPlanTypeStyles}>
                Off-plan project
              </Typography>
              {propertyOffPlan.propertyCompletionDate && (
                <Typography variant="body1" sx={offPlanCompletionStyles}>
                  Completion date:{" "}
                  {moment(propertyOffPlan.propertyCompletionDate).format(
                    "YYYY-MM-DD"
                  )}
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
