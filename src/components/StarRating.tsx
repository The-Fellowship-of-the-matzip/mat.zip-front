import React, { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const StarButton = styled.button`
  background-color: transparent;
  border: none;

  font-size: 1.5rem;
  color: #e6d706;
`;

type Props = {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
};

const MAX_RATING = 5;
const EMPTY_STAR_ICON = "\u2606";
const FILLED_STAR_ICON = "\u2605";

function StarRating({ rating = 0, setRating }: Props) {
  const [hoverRating, setHoverRating] = useState<null | number>(null);

  const handleStarClick = (index: number) => () => {
    setRating(index);
  };

  const handleStarHover = (index: number) => () => {
    setHoverRating(index);
  };

  const resetStarHover = () => {
    setHoverRating(null);
  };

  return (
    <Container>
      {Array.from({ length: MAX_RATING }).map((_, index) => {
        return (
          <StarButton
            key={index}
            onMouseUp={handleStarClick(index)}
            onMouseEnter={handleStarHover(index)}
            onMouseLeave={resetStarHover}
          >
            {index > (hoverRating ?? rating)
              ? EMPTY_STAR_ICON
              : FILLED_STAR_ICON}
          </StarButton>
        );
      })}
    </Container>
  );
}

export default StarRating;
