import { useState, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import { urlFor } from "../../../sanity";

interface ImageCarouselProps {
  mainImage: string;
  subImages: string[];
}

const MainImage = styled("img")({
  height: "500px",
  width: "100%",
  objectFit: "cover",
  border: "1px solid #00000050",
});

const SubImage = styled("img")({
  height: "100px",
  width: "100%",
  border: "1px solid #00000050",
  margin: "0.3rem",
});

const mainContainerBox = {
  maxWidth: "800px",
  margin: "0 auto",
  width: '100vw',
};

const subImageBox = {
  position: "relative",
  overflowX: "auto",
  overflowY: "hidden",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
  marginBottom: "10px",
  // border: '1px solid rgba(0, 0, 0)',
  padding: '0.3rem',
  backgroundColor: '#fff',
  borderRadius: '5px',
};

const mainImageBox = {
  position: "relative",
  // border: '1px solid rgba(0, 0, 0)',
  paddingTop: '0.3rem',
  paddingRight: '0.3rem',
  paddingLeft: '0.3rem',
  mt: '0.7rem',
  backgroundColor: '#fff',
  borderRadius: '5px',
};

const ImageCarousel = ({ mainImage, subImages }: ImageCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(mainImage);
  const subImageUrls = subImages.map((image) => urlFor(image).url());

  const subImageListRef = useRef<HTMLDivElement>(null);
  const [subImageListPosition, setSubImageListPosition] = useState(0);

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
  };

  const handleNextClick = () => {
    const subImageListWidth = subImageListRef.current?.offsetWidth || 0;
    const subImageListScrollWidth = subImageListRef.current?.scrollWidth || 0;
    const subImageListMaxPosition = subImageListScrollWidth - subImageListWidth;

    if (subImageListPosition < subImageListMaxPosition) {
      setSubImageListPosition(subImageListPosition + 200);
    }
  };

  const handlePrevClick = () => {
    if (subImageListPosition > 0) {
      setSubImageListPosition(subImageListPosition - 200);
    }
  };

  return (
    <Box sx={mainContainerBox}>
      <Box sx={mainImageBox}>
        <MainImage src={urlFor(currentImage).url()} alt="Main Image" />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "10px",
          }}
        >
          <IconButton
            onClick={() =>
              handleImageClick(
                subImageUrls[
                  (subImageUrls.indexOf(urlFor(currentImage).url()) + 1) %
                    subImageUrls.length
                ]
              )
            }
          >
            <IoMdArrowDroprightCircle size={40} />
          </IconButton>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "10px",
          }}
        >
          <IconButton
            onClick={() =>
              handleImageClick(
                subImageUrls[
                  (subImageUrls.indexOf(urlFor(currentImage).url()) -
                    1 +
                    subImageUrls.length) %
                    subImageUrls.length
                ]
              )
            }
          >
            <IoMdArrowDropleftCircle size={40} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          onClick={handlePrevClick}
        >
          <IoMdArrowDropleftCircle size={30} />
      </IconButton>
      <Box
        sx={subImageBox}
        ref={subImageListRef}
      >
        {subImages.map((image, index) => (
          <SubImage
            src={urlFor(image).url()}
            alt={`Sub Image ${index}`}
            key={`sub-image-${index}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </Box>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
        onClick={handleNextClick}
      >
        <IoMdArrowDroprightCircle size={30} />
      </IconButton>
    </Box>
  </Box>
);
};

export default ImageCarousel;
