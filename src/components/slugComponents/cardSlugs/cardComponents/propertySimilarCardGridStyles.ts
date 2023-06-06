import { useTheme } from "@mui/material";

export const getSimilarPropertyGridCardStyles = () => {
  const muiTheme = useTheme();

  return {
    similarCardGridContainerStyles: {
      display: "flex",
      overflowX: "auto",
      whiteSpace: "nowrap",
      scrollSnapType: "x mandatory",
      p: "1%",
    },
    similarCardGridItemStyles: {
      scrollSnapAlign: "start",
      flexBasis: "33%",
    },
    similarMainBox: {
      display: "flex",
      alignItems: "left",
      flexDirection: "column",
      p: "1rem",
    },
    similarViewMoreBoxStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    similarNoPropMsgStyles: {
      width: "50%",
      maxWidth: "300px",
      margin: "0 auto",
    },
    similarPropBtnStyles: {
      maxWidth: "300px",
      margin: "0 auto",
      mt: "2rem",
      mb: "3rem",
    },
    similarViewMoreBtnStyles: {
      margin: "0 auto",
      mt: "2rem",
      mb: "3rem",
      ml: "4rem",
    },
    similarMainTitleStyles: {
      mb: "1rem",
      ml: "5rem",
      display: "flex",
      justifyContent: "flex-start",
    },
  };
};
