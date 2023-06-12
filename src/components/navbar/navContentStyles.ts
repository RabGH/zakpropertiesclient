import { useTheme } from "@mui/material";

export const getNavBarStyles = () => {
  const theme = useTheme();
  return {
    navContents: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "1rem",
      mb: "1rem",
      "@media (max-width: 600px)": {
        mb: "0.5rem",
      },
      "@media (max-width: 400px)": {},
    },
    mainBox: {
      display: "flex",
      marginRight: "0.5rem",
      justifyContent: "space-between",
      gap: "1rem",
      "@media (max-width: 600px)": {},
      "@media (max-width: 400px)": {},
    },

    // Burger Styles
    burgerNavBox: {
      backgroundColor: "transparent",
      borderRadius: "5%",
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
      "@media (max-width: 600px)": {},
      "@media (max-width: 400px)": {},
    },
    menuIconStyles: {
      fontSize: "24px",
      color: "#000000",
      transition: "color 0.4s ease-in-out, border-color 0.4s ease-in-out",
      "&:hover": {
        borderColor: "#1B1B1B45",
        color: "#3B3B3B45",
      },
    },
    mainBurgerBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "@media (max-width: 600px)": {},
      "@media (max-width: 400px)": {},
    },
    popperStyles: {
      zIndex: 9999,
    },
    iconSocialStyles: {
      transition: "color 0.4s ease-in-out",
      color: "#000000",
      "&:Hover": {
        color: "#5B5B5B",
      },
      "@media (max-width: 360px)": {
        display: "none",
      },
    },
    signInButtonStyles: {
      m: 1,
      mb: 0.5,
    },
  };
};
