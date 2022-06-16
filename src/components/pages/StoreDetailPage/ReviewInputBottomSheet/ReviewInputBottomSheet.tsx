import { useState } from "react";

import BottomSheet from "components/common/BottomSheet/BottomSheet";
import StarRating from "components/common/StarRating/StarRating";

import * as S from "components/pages/StoreDetailPage/ReviewInputBottomSheet/ReviewInputBottomSheet.style";

type Props = {
  closeSheet: () => void;
  onSubmit: () => void;
};

const DEFAULT_RATING = 4;

function ReviewInputBottomSheet({ closeSheet, onSubmit }: Props) {
  const [rating, setRating] = useState(DEFAULT_RATING);

  return (
    <BottomSheet title={"리뷰 남기기"} closeSheet={closeSheet}>
      <S.Form onSubmit={onSubmit}>
        <S.Label htmlFor="menu-input">메뉴 입력</S.Label>
        <S.MenuInput id="menu-input" />
        <S.Label htmlFor="review">총평</S.Label>
        <S.ReviewTextArea id="review" />
        <S.BottomWrapper>
          <StarRating rating={rating} setRating={setRating} />
          <S.SubmitButton>제출</S.SubmitButton>
        </S.BottomWrapper>
      </S.Form>
    </BottomSheet>
  );
}

export default ReviewInputBottomSheet;
