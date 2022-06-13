import { useState } from "react";
import styled from "styled-components";
import BottomSheet from "../components/BottomSheet";

export default {
  title: "Component/BottomSheet",
  component: BottomSheet,
};

const SampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SampleButton = styled.button`
  width: max-content;
  align-self: flex-end;
  padding: 0.5em 1em;
`;

const SampleTextArea = styled.textarea`
  min-height: 150px;
`;

const SampleOpenButton = styled.button``;

function SampleBottomSheet(args) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SampleOpenButton onClick={() => setIsOpen(true)}>
        열기(아래에 열림)
      </SampleOpenButton>
      {isOpen && (
        <BottomSheet {...args} closeSheet={() => setIsOpen(false)}>
          <SampleContainer>
            <label>샘플 레이블</label>
            <SampleTextArea />
            <SampleButton>확인</SampleButton>
          </SampleContainer>
        </BottomSheet>
      )}
    </>
  );
}

const Template = (args) => <SampleBottomSheet {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "테스트 바텀시트",
};
