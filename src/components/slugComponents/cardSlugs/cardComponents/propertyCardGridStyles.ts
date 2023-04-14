import { useTheme } from "@mui/material";

export const getPropertyGridCardStyles = () => {
  const muiTheme = useTheme();

  return {
    mainBox: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
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
    },

    cardGridStyles: {
      width: "100%",
      maxWidth: "1300px",
    },

    propertyCardBox: {
      flexGrow: 1,
      flexBasis: "33%",
      maxWidth: "420px",
    },

    searchGridDividerStyles: {
      m: "1rem",
      // borderWidth: 1,
      // borderColor: "white",
      // minWidth: "80%",
    },
  };
};
