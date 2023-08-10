import { Typography, Box, Button, Card } from "@mui/material";
import { isMultiple, formatPrice, formatArea } from "@lib/utils";
import moment from "moment";
import Link from "next/link";

interface PropertyMobileReferenceProps {
  totalPrice: number;
  _id: string;
  builtUpArea?: number;
  plottedArea?: number;
  bedrooms: number;
  propertyOffPlan:
    | boolean
    | { offplan?: boolean; propertyCompletionDate?: string };
}

const PropertyMobileReference = ({
  totalPrice,
  _id,
  propertyOffPlan,
  builtUpArea,
  plottedArea,
}: PropertyMobileReferenceProps) => {
  const mobileReferenceMainBoxStyles = {
    position: "sticky",
    bottom: "0",
    zIndex: "9999",
    "@media (min-width: 426px)": {
      display: "none",
    },
  };
  const mobileStickyStyles = {
    p: "0.7rem",
    border: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  };

  const mobileButtonStyles = {
    alignSelfSelf: "flex-end",
  };

  const mobileIdStyles = {
    fontSize: "0.8rem",
  };
  const mobilePriceStyles = {
    fontSize: "1.2rem",
  };

  const mobileMainOffPlanBoxStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5rem",
  };

  const mobileOffPlanProjectBoxStyles = {};

  const mobileOffPlanCompletionStyles = {
    fontSize: "0.8rem",
  };

  const mobileReadyToBuyStyles = {
    fontSize: "0.8rem",
  };

  return (
    <Box sx={mobileReferenceMainBoxStyles}>
      <Card sx={mobileStickyStyles}>
        <Box>
          <Typography variant="body1" sx={mobileIdStyles}>
            Reference ID: {_id}
          </Typography>
          <Typography variant="h6" sx={mobilePriceStyles}>
            {formatPrice(totalPrice)}
          </Typography>
          <Box sx={mobileMainOffPlanBoxStyles}>
            {propertyOffPlan &&
            typeof propertyOffPlan === "object" &&
            propertyOffPlan.offplan ? (
              <Box sx={mobileOffPlanProjectBoxStyles}>
                <Typography variant="body1">Off-plan</Typography>
                {propertyOffPlan.propertyCompletionDate && (
                  <Typography
                    variant="body1"
                    sx={mobileOffPlanCompletionStyles}
                  >
                    Completion date:{" "}
                    {moment(propertyOffPlan.propertyCompletionDate).format(
                      "YYYY-MM-DD"
                    )}
                  </Typography>
                )}
              </Box>
            ) : (
              <Typography variant="body1" sx={mobileReadyToBuyStyles}>
                Ready to buy
              </Typography>
            )}
          </Box>
        </Box>
        <Link href="/contactUs" passHref>
          <Button variant="contained" sx={mobileButtonStyles}>
            Learn More
          </Button>
        </Link>
      </Card>
    </Box>
  );
};

export default PropertyMobileReference;
