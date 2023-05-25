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
  backgroundColor: "transparent",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition:
    "background-color 0.4s ease-in-out, border-color 0.4s ease-in-out",
  border: "1px solid #000000",
  "&:hover": {
    borderColor: "#3B3B3B45",
  },
};

export const menuIconStyles = {
  fontSize: "24px",
  color: "#000000",
  transition: "color 0.4s ease-in-out, border-color 0.4s ease-in-out",
  "&:hover": {
    borderColor: "#1B1B1B45",
    color: "#3B3B3B45",
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

export const iconSocialStyles = {
  transition: "color 0.4s ease-in-out",
  color: "#000000",
  "&:Hover": {
    color: "#5B5B5B",
  },
};

export const signInButtonStyles = {
  m: 1,
  mb: 0.5,
};
