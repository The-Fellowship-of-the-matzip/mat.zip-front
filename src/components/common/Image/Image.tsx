import { ComponentPropsWithoutRef } from "react";

import notFoundImage from "asset/no-image-found.svg";

interface ImageProps extends ComponentPropsWithoutRef<"img"> {
  className?: string;
  src: string;
  alt: string;
  customDefaultImage?: string;
}

function Image({ className, src, alt, customDefaultImage }: ImageProps) {
  const handleImageError = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLImageElement>) => {
    currentTarget.src = customDefaultImage || notFoundImage;
  };

  return (
    <img className={className} src={src} alt={alt} onError={handleImageError} />
  );
}

export default Image;
