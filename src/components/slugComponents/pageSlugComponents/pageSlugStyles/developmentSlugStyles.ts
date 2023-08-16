import { useTheme } from "@mui/material";

export const getDevelopmentPageStyles = () => {
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
      [muiTheme.breakpoints.down("smallphones")]: {
        mt: "1rem",
        mb: "1rem",
      },
    },
  };
};
