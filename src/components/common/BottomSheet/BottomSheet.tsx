import React from "react";
import ReactDOM from "react-dom";

import * as S from "components/common/BottomSheet/BottomSheet.style";

type Props = {
  title: string;
  children: React.ReactNode;
  closeSheet: () => void;
};

function BottomSheet({ title, closeSheet, children }: Props) {
  return ReactDOM.createPortal(
    <S.Container>
      <S.Backdrop onClick={closeSheet} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.InputWrapper>{children}</S.InputWrapper>
      </S.Content>
    </S.Container>,
    document.querySelector("#root") as HTMLElement
  );
}

export default BottomSheet;
