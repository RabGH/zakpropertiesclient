import { Typography, Box, Button, Card } from "@mui/material";
import { isMultiple, formatPrice, formatArea } from "@lib/utils";
import moment from "moment";
import Link from "next/link";
import { useTheme } from "@mui/material";
import slugTheme from "@styles/slugTheme";

interface PropertyReferenceProps {
  title?: string;
  totalPrice: number;
  _id?: string;
  builtUpArea: number;
  plottedArea?: number;
  bedrooms: number;
  propertyOffPlan:
    | boolean
    | { offplan?: boolean; propertyCompletionDate?: string };
}
const PropertyReference = ({
  title,
  totalPrice,
  _id,
  propertyOffPlan,
  builtUpArea,
  plottedArea,
  bedrooms,
}: PropertyReferenceProps) => {
  const muiTheme = useTheme();

  const referenceMainBoxStyles = {
    [muiTheme.breakpoints.down("sm")]: {
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
    [muiTheme.breakpoints.down("sm")]: {
      mt: 1,
      alignSelfSelf: "flex-end",
      order: 1,
    },
  };

  const idStyles = {
    [muiTheme.breakpoints.down("sm")]: {
      mt: 1,
      lineHeight: 1.2,
    },
  };
  const priceStyles = {
    mt: "0.5rem",
    mb: "0.5rem",
    [muiTheme.breakpoints.down("sm")]: {
      lineHeight: 1.2,
    },
  };

  const mainOffPlanBoxStyles = {};

  const offPlanProjectBoxStyles = {};

  const offPlanCompletionStyles = {
    [muiTheme.breakpoints.down("sm")]: {
      lineHeight: 1.2,
    },
  };

  const readyToBuyStyles = {
    [muiTheme.breakpoints.down("sm")]: {
      lineHeight: 1.2,
    },
  };

  const offPlanTypeStyles = {
    [muiTheme.breakpoints.down("smallphones")]: {
      display: "none",
    },
  };

  const bedroomStyles = {
    [muiTheme.breakpoints.down("smallphones")]: {
      display: "none",
    },
  };
  const areaStyles = {
    [muiTheme.breakpoints.down("smallphones")]: {
      display: "none",
    },
  };

  // Reference ID: {_id}

  return (
    <Box sx={referenceMainBoxStyles}>
      <Card sx={stickyStyles}>
        <Typography variant="body1" sx={idStyles}>
          Reference ID: {title}
        </Typography>
        <Typography variant="h6" sx={priceStyles}>
          {formatPrice(totalPrice)}
        </Typography>
        <Typography variant="body1" sx={bedroomStyles}>
          {bedrooms} Bedroom{isMultiple(bedrooms)}
        </Typography>
        <Typography variant="body1" sx={areaStyles}>
          Area {formatArea(builtUpArea)}
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
