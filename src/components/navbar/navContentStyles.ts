export const navContents = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "1rem",
};

export const mainBox = {
  display: "flex",
  marginRight: "0.5rem",
  justifyContent: "space-between",
  gap: "1rem",
};

export const burgerNavBox = {
  backgroundColor: "#1B1B1B50",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.4s ease-in-out",
  "&:Hover": {
    backgroundColor: "#3B3B3B45",
  },
};

export const mainBurgerBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const popperStyles = {
  zIndex: 9999,
};

export const popperPaperStyles = {
  zIndex: 9999,
  mr: "1.8rem",
  mt: "0.5rem",
};

export const iconSocialStyles = {
  transition: "color 0.4s ease-in-out",
  "&:Hover": {
    color: "#0B0B0B",
  },
};
