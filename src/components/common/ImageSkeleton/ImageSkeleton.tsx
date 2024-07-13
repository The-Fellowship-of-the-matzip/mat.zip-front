import * as S from "./ImageSkeleton.style";

interface ImageSkeletonProps {
  width?: string;
  height?: string;
}

function ImageSkeleton({ width, height }: ImageSkeletonProps) {
  return <S.ImageSkeleton $width={width} $height={height} />;
}

export default ImageSkeleton;
