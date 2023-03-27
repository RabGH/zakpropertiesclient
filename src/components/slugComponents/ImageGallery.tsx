import { useState } from "react";
import ImageGallery, {
  ReactImageGalleryItem,
  ReactImageGalleryProps,
} from "react-image-gallery";
import { urlFor } from "../../../sanity";
import { Box } from "@mui/material";
// import Image from 'next/image';


interface ImageCarouselProps {
  images: Array<{ image: string }>;
  mainImage: string;
}

interface CustomImageGalleryProps extends ReactImageGalleryProps {
  onClickThumbnail: (index: number) => void;
}

const ImageCarousel = ({ mainImage, images }: ImageCarouselProps) => {
  const [selectedImage, setSelectedImage] = useState(mainImage || (images && images[0]?.image));

  const galleryItems: ReactImageGalleryItem[] = [
    {
      original: urlFor(mainImage).auto("format").url(),
      thumbnail: urlFor(mainImage).auto("format").width(200).url(),
    },
    ...(images && images.length
      ? images.map((image) => ({
          original: urlFor(image.image).auto("format").url(),
          thumbnail: urlFor(image.image).auto("format").width(200).url(),
        }))
      : []),
  ];

  const handleImageSelect = (index: number) => {
    setSelectedImage(index === 0 ? mainImage : images[index - 1]?.image);
  };

  if (!selectedImage) {
    return null;
  }

  const imageUrl = urlFor(selectedImage).auto("format").url();

  return (
    <>
      <Box className="image-carousel">
        <div className="main-image">
        <img src={imageUrl} alt="" width={800} height={600} />        </div>
        <ImageGallery
          thumbnailPosition="left"
          showPlayButton={false}
          showNav={false}
          showFullscreenButton={false}
          {...({
            onClickThumbnail: handleImageSelect,
          } as CustomImageGalleryProps)}
          items={galleryItems}
        />
      </Box>
    </>
  );
};

export default ImageCarousel;