import { useState } from "react";
import styled from "styled-components";
import ReviewInputBottomSheet from "../components/ReviewInputBottomSheet";

export default {
  title: "Component/ReviewInputBottomSheet",
  component: ReviewInputBottomSheet,
};

const SampleButton = styled.button`
  width: max-content;
  align-self: flex-end;
  padding: 0.5em 1em;
`;

function SampleReviewInput(args) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SampleButton onClick={() => setIsOpen(true)}>리뷰 남기기</SampleButton>
      {isOpen && (
        <ReviewInputBottomSheet
          closeSheet={() => setIsOpen(false)}
          onSubmit={() => {
            alert("리뷰 작성이 완료 되었습니다.");
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
}

const Template = (args) => <SampleReviewInput />;

export const Default = Template.bind({});
