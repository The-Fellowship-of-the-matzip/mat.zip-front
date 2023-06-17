import { AxiosError } from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { ReviewInputShape } from "types/common";

import { NETWORK } from "constants/api";
import { MESSAGES } from "constants/messages";
import { INPUT_MAX_LENGTH } from "constants/rules";

import useLogin from "hooks/useLogin";

import sendReviewPostRequest from "api/review/sendReviewPostRequest";

import BottomSheet from "components/common/BottomSheet/BottomSheet";
import Button from "components/common/Button/Button";
import Input from "components/common/Input/Input";
import Label from "components/common/Label/Label";
import StarRating from "components/common/StarRating/StarRating";
import Textarea from "components/common/Textarea/Textarea";

import * as S from "components/pages/StoreDetailPage/ReviewInputBottomSheet/ReviewInputBottomSheet.style";

interface ReviewInputBottomSheetProps {
  closeSheet: () => void;
  restaurantId: string;
  onSuccess: () => void;
}

const DEFAULT_RATING = 4;

function ReviewInputBottomSheet({
  closeSheet,
  restaurantId,
  onSuccess,
}: ReviewInputBottomSheetProps) {
  const [rating, setRating] = useState(DEFAULT_RATING);
  const [reviewContent, setReviewContent] = useState("");
  const [menuInput, setMenuInput] = useState("");

  const { logout } = useLogin();

  const handleSubmitRequest: React.FormEventHandler = (e) => {
    e.preventDefault();
    mutation.mutate({
      content: reviewContent,
      rating: rating + 1,
      menu: menuInput,
    });
    closeSheet();
  };

  const handleRatingInput = (input: number) => {
    setRating(input);
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

    setMenuInput(value);
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
      alert(MESSAGES.TOKEN_INVALID);
      logout();
    }
  };

  const mutation = useMutation<unknown, AxiosError, ReviewInputShape>(
    sendReviewPostRequest(restaurantId),
    { onSuccess, onError: handleSubmitError, retry: NETWORK.RETRY_COUNT }
  );

  return (
    <BottomSheet title="리뷰 남기기" closeSheet={closeSheet}>
      <S.Form onSubmit={handleSubmitRequest}>
        <S.StarRatingWrapper>
          <Label required>별점</Label>
          <StarRating rating={rating} handleRatingInput={handleRatingInput} />
        </S.StarRatingWrapper>
        <Input
          label="메뉴"
          id="menu-input"
          value={menuInput}
          placeholder="메뉴를 입력해 주세요"
          onChange={handleMenuInput}
          maxLength={20}
          required
        />

        <Textarea
          label="총평"
          id="review"
          value={reviewContent}
          placeholder="이 맛집에 대한 리뷰를 남겨주세요"
          onChange={handleContentInput}
          maxLength={255}
          required
        />
        <Button variant="primary">제출</Button>
      </S.Form>
    </BottomSheet>
  );
}

export default ReviewInputBottomSheet;
