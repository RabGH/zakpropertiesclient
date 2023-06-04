import { useTheme } from "@mui/material";

export const getSimilarPropertyGridCardStyles = () => {
  const muiTheme = useTheme();

  return {
    similarCardGridStyles: {
      width: "100%",
      maxWidth: "1350px",
      margin: "0 auto",
    },
    similarCardAllGridStyles: {
      justifyContent: "center",
    },
    similarMainBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: muiTheme.spacing(2),
    },
    similarViewMoreBoxStyles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    similarNoPropMsgStyles: {
      margin: muiTheme.spacing(1),
    },
    similarViewMoreBtnStyles: {
      margin: muiTheme.spacing(1),
    },
    similarPropMsgStyles: {},
  };
};
