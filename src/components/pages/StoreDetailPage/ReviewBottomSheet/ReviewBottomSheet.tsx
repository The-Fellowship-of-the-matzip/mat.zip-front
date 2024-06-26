import { AxiosError } from "axios";
import { useState } from "react";
import { UseMutateFunction } from "react-query";
import { ReviewInputShape } from "types/common";

import { MESSAGES } from "constants/messages";
import { INPUT_MAX_LENGTH } from "constants/rules";

import { useImageUpload } from "hooks/useImageUpload";

import BottomSheet from "components/common/BottomSheet/BottomSheet";
import Button from "components/common/Button/Button";
import ImageUploadInput from "components/common/ImageUploadInput/ImageUploadInput";
import Input from "components/common/Input/Input";
import Label from "components/common/Label/Label";
import StarRating from "components/common/StarRating/StarRating";
import Textarea from "components/common/Textarea/Textarea";
import { useToastContext } from "components/common/Toast/provider/ToastProvider";

import * as S from "./ReviewBottomSheet.styled";

interface ReviewBottomSheetProps {
  defaultReviewItem?: {
    content: string;
    rating: number;
    menu: string;
    restaurantId: string;
    id: string;
    imageUrl: string | null;
  };
  closeSheet: () => void;
  mutate: UseMutateFunction<
    unknown,
    AxiosError<unknown, any>,
    ReviewInputShape,
    unknown
  >;
}

const DEFAULT_RATING = 4;

function ReviewBottomSheet({
  defaultReviewItem,
  closeSheet,
  mutate,
}: ReviewBottomSheetProps) {
  const [rating, setRating] = useState<number>(
    defaultReviewItem ? defaultReviewItem.rating - 1 : DEFAULT_RATING,
  );
  const [reviewContent, setReviewContent] = useState<string>(
    defaultReviewItem?.content ?? "",
  );
  const [menu, setMenu] = useState<string>(defaultReviewItem?.menu ?? "");

  const showToast = useToastContext();

  const { uploadedImageUrl, handleImageUpload, handleImageRemoval } =
    useImageUpload(showToast, defaultReviewItem?.imageUrl);

  const handleSubmitRequest: React.FormEventHandler = (e) => {
    e.preventDefault();
    mutate({
      content: reviewContent,
      rating: rating + 1,
      menu,
      imageUrl: uploadedImageUrl,
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
      showToast(MESSAGES.EXCEED_MENU_MAX_LENGTH);
      return;
    }

    setMenu(value);
  };

  const handleContentInput: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e,
  ) => {
    const {
      target: { value },
    } = e;

    if (value.length > INPUT_MAX_LENGTH.REVIEW_CONTENT) {
      e.preventDefault();
      showToast(MESSAGES.EXCEED_REVIEW_CONTENT_MAX_LENGTH);
      return;
    }

    setReviewContent(value);
  };

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
          value={menu}
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
        <ImageUploadInput
          id="image-upload"
          label="이미지 업로드"
          imageUrl={uploadedImageUrl}
          imageAltText="리뷰 이미지"
          onChange={handleImageUpload}
          onRemove={handleImageRemoval}
        />
        <Button variant="primary">제출</Button>
      </S.Form>
    </BottomSheet>
  );
}

export default ReviewBottomSheet;
