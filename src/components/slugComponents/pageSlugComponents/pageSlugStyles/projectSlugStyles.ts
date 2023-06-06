import { useTheme } from "@mui/material";

export const getProjectPageStyles = () => {
  const muiTheme = useTheme();

  return {
    mainSection: {
      display: "flex",
      m: "0 auto",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    titleStyle: {},

    descriptionStyles: {
      m: "1rem",
    },

    buttonStyles: {
      "&:hover": {
        backgroundColor: muiTheme.palette.primary.light,
      },
      mb: "1rem",
    },

    viewMoreProperties: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mt: "1rem",
    },

    dividerStyles: {
      mt: 3,
      mb: 3,
    },
  };
};
