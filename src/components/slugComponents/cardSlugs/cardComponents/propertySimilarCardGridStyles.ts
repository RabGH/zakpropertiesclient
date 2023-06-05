import { useTheme } from "@mui/material";

export const getSimilarPropertyGridCardStyles = () => {
  const muiTheme = useTheme();

  return {
    similarCardGridContainerStyles: {
      display: "flex",
      width: "100%",
      margin: "0 auto",
      overflowX: "auto",
      whiteSpace: "nowrap",
      scrollSnapType: "x mandatory",
    },
    similarCardGridItemStyles: {
      justifyContent: "center",
      scrollSnapAlign: "start",
      flexShrink: 0,
      flexBasis: "33%",
      mt: "1.5rem",
    },
    similarMainBox: {
      display: "flex",
      alignItems: "left",
      justifyContent: "center",
      flexDirection: "column",
      p: "1rem",
    },
    similarViewMoreBoxStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    similarNoPropMsgStyles: {
      width: "50%",
      maxWidth: "300px",
      margin: "0 auto",
    },
    similarPropMsgStyles: {
      width: "50%",
      maxWidth: "300px",
      margin: "0 auto",
    },
    similarViewMoreBtnStyles: {
      m: "1rem",
      maxWdith: "300px",
      width: "100%",
    },
    similarMainTitleStyles: {
      mb: "1rem",
      ml: "5rem",
      display: "flex",
      justifyContent: "flex-start",
    },
  };
};
