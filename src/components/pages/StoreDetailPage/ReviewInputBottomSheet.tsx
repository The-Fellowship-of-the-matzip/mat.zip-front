import React, { useState } from "react";
import styled from "styled-components";
import BottomSheet from "../../common/BottomSheet";
import StarRating from "../../common/StarRating";

const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  width: 100%;

  display: flex;
`;

const MenuInput = styled.input`
  width: 100%;

  padding: 0.8em 1em;

  border: 1px solid ${({ theme }) => theme.secondary};
`;

const ReviewTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;

  padding: 0.8em 1em;

  border: 1px solid ${({ theme }) => theme.secondary};

  resize: none;
`;

const BottomWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  padding: 0.5em 1em;

  background-color: ${({ theme }) => theme.primary};

  border: none;
  border-radius: 4px;

  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
`;

type Props = {
  closeSheet: () => void;
  onSubmit: () => void;
};

const DEFAULT_RATING = 4;

function ReviewInputBottomSheet({ closeSheet, onSubmit }: Props) {
  const [rating, setRating] = useState(DEFAULT_RATING);
  return (
    <BottomSheet title={"리뷰 남기기"} closeSheet={closeSheet}>
      <Form onSubmit={onSubmit}>
        <Label htmlFor="menu-input">메뉴 입력</Label>
        <MenuInput id="menu-input" />
        <Label htmlFor="review">총평</Label>
        <ReviewTextArea id="review" />
        <BottomWrapper>
          <StarRating rating={rating} setRating={setRating} />
          <SubmitButton>제출</SubmitButton>
        </BottomWrapper>
      </Form>
    </BottomSheet>
  );
}

export default ReviewInputBottomSheet;
