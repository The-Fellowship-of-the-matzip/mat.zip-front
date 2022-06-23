import notFoundImage from "asset/no-image-found.svg";

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

function Image({ className, src, alt }: ImageProps) {
  const handleImageError = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLImageElement>) => {
    currentTarget.src = notFoundImage;
  };

  return (
    <img className={className} src={src} alt={alt} onError={handleImageError} />
  );
}

export default Image;
