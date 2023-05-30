import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  IconButton,
  useTheme,
  styled,
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
  position: "relative",
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const EnlargedImage = styled(Image)({
  objectFit: "contain",
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

  const mainImageUrl = urlFor(mainImage).auto("format").url().toString();
  const activeImageUrl = urlFor(images[activeImageIndex])
    .auto("format")
    .url()
    .toString();

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
          <LeftArrowButton onClick={handlePrev}>
            <ChevronLeft fontSize="large" />
          </LeftArrowButton>
          {images != null && (
            <ImageBox>
              <EnlargedImage
                src={activeImageUrl}
                alt={alt}
                style={{
                  objectFit: "cover",
                }}
                fill
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..."
              />
            </ImageBox>
          )}
          <RightArrowButton onClick={handleNext}>
            <ChevronRight fontSize="large" />
          </RightArrowButton>
        </ModalBox>
      </Modal>
    </>
  );
};

export default ViewAllPhotos;
