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
      mb: "5rem",
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
        backgroundColor: muiTheme.palette.success.light,
      },
      mb: "3rem",
      "@media (max-width: 1440px)": {
        itemsPerPage: 9,
      },
      "@media (max-width: 1024px)": {
        itemsPerPage: 6,
      },
      "@media (max-width: 600px)": {
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
  };
};
