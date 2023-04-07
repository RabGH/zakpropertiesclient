import { useTheme } from "@mui/material";

export const getBuyPropertiesPageStyles = () => {
  const muiTheme = useTheme();

  return {
    dividerStyles: {
      m: 5,
      borderBottomWdith: 2,
      borderColor: "white",
    },

    featuredTitlePos: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    mainBox: {},

    contentMainBox: {
      mt: "8rem",
    },

    propertyAllCardBox: {
      mt: "1rem",
    },
  };
};
