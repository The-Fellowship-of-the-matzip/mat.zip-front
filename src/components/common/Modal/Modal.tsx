import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

import * as S from "components/common/Modal/Modal.style";

interface Props {
  closeModal: () => void;
}

function Modal({ children, closeModal }: PropsWithChildren<Props>) {
  return ReactDOM.createPortal(
    <S.Container>
      <S.Backdrop onClick={closeModal} />
      <S.Content>
        <S.CloseButton onClick={closeModal}>닫기</S.CloseButton>
        {children}
      </S.Content>
    </S.Container>,
    document.querySelector("#app") as HTMLElement
  );
}

export default Modal;
