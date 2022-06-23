import { useState } from "react";
import { useMutation } from "react-query";

import { NETWORK } from "constants/api";

import sendReviewPostRequest from "api/sendReviewPostRequest";

import BottomSheet from "components/common/BottomSheet/BottomSheet";
import StarRating from "components/common/StarRating/StarRating";

import * as S from "components/pages/StoreDetailPage/ReviewInputBottomSheet/ReviewInputBottomSheet.style";

type Props = {
  closeSheet: () => void;
  restaurantId: string;
  onSuccess: () => void;
};

type ReviewInputShape = {
  content: string;
  rating: number;
  menu: string;
};

const DEFAULT_RATING = 4;

function ReviewInputBottomSheet({
  closeSheet,
  restaurantId,
  onSuccess,
}: Props) {
  const mutation = useMutation<unknown, unknown, ReviewInputShape>(
    sendReviewPostRequest(restaurantId),
    { onSuccess, retry: NETWORK.RETRY_COUNT }
  );

  const [rating, setRating] = useState(DEFAULT_RATING);
  const [reviewContent, setReviewContent] = useState("");
  const [menuInput, setMenuInput] = useState("");

  const handleSubmitRequest: React.FormEventHandler = (e) => {
    e.preventDefault();
    mutation.mutate({
      content: reviewContent,
      rating: rating + 1,
      menu: menuInput,
    });
    closeSheet();
  };

  return (
    <BottomSheet title={"리뷰 남기기"} closeSheet={closeSheet}>
      <S.Form onSubmit={handleSubmitRequest}>
        <S.Label htmlFor="menu-input">메뉴 입력</S.Label>
        <S.MenuInput
          id="menu-input"
          value={menuInput}
          onChange={(e) => setMenuInput(e.target.value)}
        />
        <S.Label htmlFor="review">총평</S.Label>
        <S.ReviewTextArea
          id="review"
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
        />
        <S.BottomWrapper>
          <StarRating rating={rating} setRating={setRating} />
          <S.SubmitButton>제출</S.SubmitButton>
        </S.BottomWrapper>
      </S.Form>
    </BottomSheet>
  );
}

export default ReviewInputBottomSheet;
