import { useTheme } from "@mui/material";

export const getPropertyGridCardStyles = () => {
  const muiTheme = useTheme();

  return {
    //  PropertyCardGrid.tsx grid styles for buyProperties.tsx Page
    mainBox: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },

    noPropertiesFoundTypographyStyles: {
      m: "auto",
      mt: "5rem",
      mb: "15rem",
      width: "50ch",
    },

    propertyCardGridSearchBarBox: {},

    paginationBox: {
      display: "flex",
      justifyContent: "center",
      mt: 2,
    },

    paginationStyles: {
      "& .MuiPaginationItem-root": {
        color: muiTheme.palette.primary.dark,
      },
      "& .Mui-selected": {
        color: muiTheme.palette.primary.main,
        backgroundColor: muiTheme.palette.warning.dark,
      },
      mb: "3rem",
      [muiTheme.breakpoints.down("xl")]: {
        itemsPerPage: 9,
      },
      [muiTheme.breakpoints.down("lg")]: {
        itemsPerPage: 6,
      },
      [muiTheme.breakpoints.down("md")]: {
        itemsPerPage: 9,
      },
    },

    cardGridStyles: {
      width: "100%",
      maxWidth: "1350px",
    },

    searchGridDividerStyles: {
      m: "0.1rem",
    },

    cardAllGridStyles: {
      justifyContent: "center",
    },

    resultsTypography: {
      mb: "1rem",
      fontSize: "1.1rem",
    },
  };
};
