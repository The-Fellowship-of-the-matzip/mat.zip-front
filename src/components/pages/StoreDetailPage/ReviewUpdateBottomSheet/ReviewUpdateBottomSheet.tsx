import { AxiosError } from "axios";
import { useState } from "react";
import { useMutation } from "react-query";

import { NETWORK } from "constants/api";
import MESSAGES from "constants/messages";
import { INPUT_MAX_LENGTH } from "constants/rules";

import useLogin from "hooks/useLogin";

import sendReviewItem from "api/sendReviewItem";

import BottomSheet from "components/common/BottomSheet/BottomSheet";
import StarRating from "components/common/StarRating/StarRating";

import * as S from "components/pages/StoreDetailPage/ReviewInputBottomSheet/ReviewInputBottomSheet.style";

type Props = {
  closeSheet: () => void;
  defaultReviewItem: {
    content: string;
    rating: number;
    menu: string;
    restaurantId: string;
    id: string;
  };
  onSuccess: () => void;
};

type ReviewInputShape = {
  content: string;
  rating: number;
  menu: string;
};

function ReviewUpdateBottomSheet({
  closeSheet,
  defaultReviewItem,
  onSuccess,
}: Props) {
  const [rating, setRating] = useState<number>(defaultReviewItem.rating - 1);
  const [reviewContent, setReviewContent] = useState<string>(
    defaultReviewItem.content
  );
  const [menu, setMenu] = useState<string>(defaultReviewItem.menu);

  const { logout } = useLogin();

  const handleSubmitRequest: React.FormEventHandler = (e) => {
    e.preventDefault();
    mutation.mutate({
      content: reviewContent,
      rating: rating + 1,
      menu: menu,
    });
    closeSheet();
  };

  const handleMenuInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {
      target: { value },
    } = e;

    if (value.length > INPUT_MAX_LENGTH.MENU) {
      e.preventDefault();
      alert(MESSAGES.EXCEED_MENU_MAX_LENGTH);
      return;
    }

    setMenu(value);
  };

  const handleContentInput: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    const {
      target: { value },
    } = e;

    if (value.length > INPUT_MAX_LENGTH.REVIEW_CONTENT) {
      e.preventDefault();
      alert(MESSAGES.EXCEED_REVIEW_CONTENT_MAX_LENGTH);
      return;
    }

    setReviewContent(value);
  };

  const handleSubmitError = (error: AxiosError) => {
    if (error.code === "401") {
      alert(MESSAGES.TOKEN_EXPIRED);
      logout();
    }
  };

  const mutation = useMutation<unknown, AxiosError, ReviewInputShape>(
    () =>
      sendReviewItem({
        restaurantId: defaultReviewItem.restaurantId,
        articleId: defaultReviewItem.id,
        rating: rating + 1,
        menu,
        content: reviewContent,
      }),
    { onSuccess, onError: handleSubmitError, retry: NETWORK.RETRY_COUNT }
  );

  return (
    <BottomSheet title="리뷰 남기기" closeSheet={closeSheet}>
      <S.Form onSubmit={handleSubmitRequest}>
        <S.Label htmlFor="menu-input">메뉴 입력</S.Label>
        <S.MenuInput
          id="menu-input"
          value={menu}
          onChange={handleMenuInput}
          maxLength={20}
          required
        />
        <S.Label htmlFor="review">총평</S.Label>
        <S.ReviewTextArea
          id="review"
          value={reviewContent}
          onChange={handleContentInput}
          maxLength={255}
          required
        />
        <S.BottomWrapper>
          <S.StarRatingWrapper>
            <S.Label>별점</S.Label>
            <StarRating rating={rating} setRating={setRating} />
          </S.StarRatingWrapper>
          <S.SubmitButton>제출</S.SubmitButton>
        </S.BottomWrapper>
      </S.Form>
    </BottomSheet>
  );
}

export default ReviewUpdateBottomSheet;
