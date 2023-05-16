import { Typography, Box, Button } from "@mui/material";
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
    padding: "2rem",
    border: "none",
    borderRadius: "0.5rem",
    boxShadow: "0.5rem 0.5rem 0.5rem gray",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const buttonStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0.5rem",
    width: "80%",
  };

  return (
    <Box sx={stickyStyles}>
      <Typography variant="h6">{formatPrice(totalPrice)}</Typography>
      <Typography variant="body2">Reference ID: {id}</Typography>
      <Box>
        {propertyOffPlan &&
        typeof propertyOffPlan === "object" &&
        propertyOffPlan.offplan ? (
          <Box>
            <Typography variant="body2">Off-plan project</Typography>
            {propertyOffPlan.propertyCompletionDate && (
              <Typography variant="body2">
                Completion date: {propertyOffPlan.propertyCompletionDate}
              </Typography>
            )}
          </Box>
        ) : (
          <Typography variant="body2">Ready to buy</Typography>
        )}
      </Box>
      <Link href="/contact" passHref>
        <Button variant="contained" sx={buttonStyles}>
          Learn More
        </Button>
      </Link>
    </Box>
  );
};

export default PropertyReference;
