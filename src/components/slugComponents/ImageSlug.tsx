import Image from 'next/image'
import { urlFor } from '../../../../zakpropertiesclient/sanity'

interface ImageSlugProps {
    identifier: string,
    image: string | null | undefined,
}

const ImageSlug = ({ identifier, image }: ImageSlugProps) => {

  if (!image) {
    return null;
  }

  const imageUrl = urlFor(image).auto('format').url();

  return (
    <div className={identifier === "main-image" ? "main-image" : "image"}>
      <Image src={imageUrl} alt="" width={800} height={600} />
    </div>
  )
}

export default ImageSlug
