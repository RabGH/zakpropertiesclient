import { useTheme } from "@mui/material";

export const getDeveloperPageStyles = () => {
  const muiTheme = useTheme();

  return {
    buttonStyles: {
      "&:hover": {
        backgroundColor: muiTheme.palette.primary.light,
      },
      mb: "3rem",
      mt: "3rem",
    },

    dividerStyles: {
      width: "90%",
      mt: "0.5rem",
      mb: "0.5rem",
      "@media (max-width: 481px)": {
        mt: "1rem",
        mb: "1rem",
      },
    },
  };
};
