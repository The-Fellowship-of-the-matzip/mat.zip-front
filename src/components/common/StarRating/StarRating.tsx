import React, { useState } from "react";

import Star from "components/common/Star/Star";
import * as S from "components/common/StarRating/StarRating.style";

type StarRatingProps = {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
};

const MAX_RATING = 5;

function StarRating({ rating = 0, setRating }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<null | number>(null);

  const handleStarClick: (index: number) => React.MouseEventHandler =
    (index) => () => {
      setRating(index);
    };

  const handleStarHover = (index: number) => () => {
    setHoverRating(index);
  };

  const resetStarHover = () => {
    setHoverRating(null);
  };

  return (
    <S.Container>
      {Array.from({ length: MAX_RATING }).map((_, index) => {
        return (
          <S.StarButton
            key={index}
            type={"button"}
            onMouseUp={handleStarClick(index)}
            onMouseEnter={handleStarHover(index)}
            onMouseLeave={resetStarHover}
          >
            {index > (hoverRating ?? rating) ? <Star /> : <Star isFilled />}
          </S.StarButton>
        );
      })}
    </S.Container>
  );
}

export default StarRating;
