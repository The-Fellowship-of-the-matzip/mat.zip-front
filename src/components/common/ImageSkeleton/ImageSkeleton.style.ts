import styled, { css, keyframes } from "styled-components";

const wave = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

interface ImageSkeletonProps {
  $width?: string;
  $height?: string;
}

export const ImageSkeleton = styled.div<ImageSkeletonProps>`
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "100%"};

  background: ${({ theme }) => css`
    linear-gradient(
      90deg,
      ${theme.color.gray500},
      ${theme.color.gray100},
      ${theme.color.gray500},
      ${theme.color.gray100}
    );
  `};
  background-size: 200% 200%;
  animation: ${wave} 4s ease infinite;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.p`
  color: ${({ theme }) => theme.color.gray500};
  font-size: 1.3rem;
  line-height: 1.3;
`;
