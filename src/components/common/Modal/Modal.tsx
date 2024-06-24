import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import CloseButton from "components/common/Modal/components/CloseButton/CloseButton";
import Header from "components/common/Modal/components/Header/Header";
import Content from "components/common/Modal/components/Content/Content";
import Footer from "components/common/Modal/components/Footer/Footer";

import * as S from "components/common/Modal/Modal.style";

interface ModalProps {
  onCloseModal: () => void;
}

function Modal({
  children,
  onCloseModal,
}: React.PropsWithChildren<ModalProps>) {
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
      <S.Backdrop onClick={onCloseModal} />
      <S.Content>{children}</S.Content>
    </S.Container>,
    document.querySelector("#app") as HTMLElement,
  );
}

export default Modal;

Modal.ModalHeader = Header;
Modal.ModalContent = Content;
Modal.ModalFooter = Footer;
Modal.CloseButton = CloseButton;
