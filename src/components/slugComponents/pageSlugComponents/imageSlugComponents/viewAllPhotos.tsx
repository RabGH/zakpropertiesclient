import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  IconButton,
  useTheme,
  styled,
  Grid,
  Container,
  useMediaQuery,
  Zoom,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { urlFor } from "@lib/sanity";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Image from "next/image";

interface ViewAllPhotosProps {
  images: string[];
  mainImage: string;
  alt: string;
}

const ViewAllPhotosButton = styled(Button)({
  textTransform: "none",
});

const ModalBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: theme.zIndex.modal + 1,
  overflow: "hidden",
}));

const ImageBox = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "auto",
});

const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  color: "white",
  zIndex: 1,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
}));

const LeftArrowButton = styled(ArrowButton)({
  left: 0,
});

const RightArrowButton = styled(ArrowButton)({
  right: 0,
});

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: 1,
  color: "white",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
}));

const ViewAllPhotos = ({ images, alt, mainImage }: ViewAllPhotosProps) => {
  const [open, setOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const muiTheme = useTheme();

  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const imageWidth = isSmallScreen
    ? muiTheme.breakpoints.values.sm
    : muiTheme.breakpoints.values.md * 1.75;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  let mainImageUrl;
  try {
    mainImageUrl = urlFor(mainImage).auto("format").url();
  } catch (error) {
    mainImageUrl =
      "/zakpropertiesclient/public/images/static_images/WaitHouseIcon.png";
  }

  let activeImageUrl;
  try {
    activeImageUrl = urlFor(images[activeImageIndex]).auto("format").url();
  } catch (error) {
    activeImageUrl =
      "/zakpropertiesclient/public/images/static_images/WaitHouseIcon.png";
  }
  return (
    <>
      <ViewAllPhotosButton variant="contained" onClick={handleOpen}>
        View All Photos
      </ViewAllPhotosButton>
      <Modal open={open} onClose={handleClose}>
        <ModalBox sx={{ ...muiTheme.typography.body1 }}>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <Container maxWidth="lg">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={1}>
                <LeftArrowButton onClick={handlePrev}>
                  <ChevronLeft fontSize="large" />
                </LeftArrowButton>
              </Grid>
              <Grid item xs={10}>
                {images != null && (
                  <ImageBox>
                    {images.map((image, i) => (
                      <Zoom in={activeImageIndex === i} key={i}>
                        <Image
                          src={urlFor(image).auto("format").url()}
                          alt={alt}
                          style={{
                            objectFit: "contain",
                            display: activeImageIndex === i ? "block" : "none",
                          }}
                          width={imageWidth}
                          height={
                            isPortrait ? imageWidth * 0.75 : imageWidth * 0.5
                          }
                          placeholder="blur"
                          blurDataURL="data:image/svg+xml;base64,..."
                        />
                      </Zoom>
                    ))}
                  </ImageBox>
                )}
              </Grid>
              <Grid item xs={1}>
                <RightArrowButton onClick={handleNext}>
                  <ChevronRight fontSize="large" />
                </RightArrowButton>
              </Grid>
            </Grid>
          </Container>
        </ModalBox>
      </Modal>
    </>
  );
};

export default ViewAllPhotos;
