export const mainAll = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const allCardStyles = {
  maxWidth: "420px",
  maxHeight: "490px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
  borderRadius: "10px",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  backgroundColor: "transparent",
  "&:hover": {
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 1)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  padding: "0.7rem",
};

// ------------------------------------------------

export const main = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "50vh",
};

export const featuredTitlePos = {
  mt: "1rem",
  ml: "1rem",
  mb: "1rem",
  mr: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  m: "1.2rem",
  fontSize: "1.5rem",
};

export const cardStyles = {
  maxWidth: "420px",
  maxHeight: "490px",
  boxShadow: "none",
  borderRadius: "10px",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  backgroundColor: "transparent",
  "&:hover": {
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  padding: "0.7rem",
  // paddingBottom: '10rem',
};

export const propertyTypeStyles = {
  fontSize: "1.2rem",
};

export const propertyTitleCard = {
  fontSize: "1.2rem",
  paddingBottom: "0.7rem",
  mt: "0.5rem",
};

export const propertyAreaCard = {};

export const propertyPriceCard = {
  paddingBottom: "0rem",
  fontSize: "0.9rem",
};

export const cardInfoStyles = {
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
};

export const mainBox = {
  display: "flex",
  flexDirection: "row",
  mb: "2rem",
};

export const dividerStyles = {
  "&::before, &::after": {
    borderBottomWdith: 2,
    borderColor: "white",
  },
};

export const bedroomStyles = {};

export const offPlanStyles = {};

export const offPlanTextStyles = {};

export const offPlanCompleteStyles = {};
