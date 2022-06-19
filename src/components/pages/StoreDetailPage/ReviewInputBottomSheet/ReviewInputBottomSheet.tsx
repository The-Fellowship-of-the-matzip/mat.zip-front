import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";

import BottomSheet from "components/common/BottomSheet/BottomSheet";
import StarRating from "components/common/StarRating/StarRating";

import * as S from "components/pages/StoreDetailPage/ReviewInputBottomSheet/ReviewInputBottomSheet.style";

type Props = {
  closeSheet: () => void;
  onSubmit: () => void;
};

const DEFAULT_RATING = 4;

function ReviewInputBottomSheet({ closeSheet, onSubmit }: Props) {
  // TODO: 레스토랑 아이디를 받아와야 함
  // TODO: onSubmit 함수의 위치
  const restaurantId = 0;
  const mutation = useMutation((newReview) => {
    const accessToken = localStorage.getItem("accessToken");
    return axios.post(`/api/restaurants/${restaurantId}/reviews`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  });

  const [rating, setRating] = useState(DEFAULT_RATING);
  const [reviewContent, setReviewContent] = useState("");
  const [menuInput, setMenuInput] = useState("");

  const handleSubmitRequest = () => {
    mutation.mutate({ content: reviewContent, score: rating, menu: menuInput });
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
