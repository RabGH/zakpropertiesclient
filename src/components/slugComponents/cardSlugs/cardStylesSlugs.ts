export const main = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "50vh",
  mb: "1rem",
};

export const featuredTitlePos = {
  mt: "1rem",
  ml: "1rem",
  mb: "1rem",
  mr: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const cardStyles = {
  maxWidth: "420px",
  maxHeight: "450px",
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
  // paddingBottom: "0.7rem",
  // mt: '1rem',
  // fontSize: '1rem',
};

export const propertyTitleCard = {
  fontSize: "1.2rem",
  paddingBottom: "0.7rem",
  mt: "0.5rem",
};

export const propertyAreaCard = {
  paddingBottom: "0.3rem",
};

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
