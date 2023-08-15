import { useTheme } from "@mui/material";

export const getImageCarouselStyles = () => {
  const muiTheme = useTheme();
  return {
    mainContainer: {},

    mainImageContainer: {
      width: "100%",
    },

    mainBox: {
      width: "100%",
      position: "relative",
      overflow: "hidden",
      paddingTop: "2vh",
      paddingBottom: "3vh",
      mt: "3.5rem",
      mr: "3.5rem",
      ".slick-active": {
        opacity: 1,
      },
      ".slick-slide": {
        paddingRight: "0.5rem",
        paddingLeft: "0.5rem",
        paddingBottom: "0.5rem",
        paddingTop: "0.5rem",
      },
      [muiTheme.breakpoints.down("smallphones")]: {
        mt: "4rem",
      },
    },

    imageBox: {
      height: "25vw",
      width: "55%",
      [muiTheme.breakpoints.down("lg")]: {
        height: "80vw",
        width: "100%",
      },
    },

    imageStyles: {
      display: "flex",
      width: "100%",
      height: "100%",
    },

    viewPhotosBox: {
      ml: "2rem",
      mt: "2rem",
    },
    // Add more buttons
  };
};
