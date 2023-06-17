import { PropsWithChildren, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import * as S from "components/common/Modal/Modal.style";

interface ModalProps {
  closeModal: () => void;
}

function Modal({ children, closeModal }: PropsWithChildren<ModalProps>) {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setScrollOffset(window.scrollY);

    return () => {
      document.body.style.overflow = "auto";
      setScrollOffset(0);
    };
  }, []);

  return ReactDOM.createPortal(
    <S.Container scrollOffset={scrollOffset}>
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
