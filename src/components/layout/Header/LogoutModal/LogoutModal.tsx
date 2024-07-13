import * as S from "./LogoutModal.styled";
import { useNavigate } from "react-router-dom";

import { MESSAGES } from "constants/messages";
import { PATHNAME } from "constants/routes";

import useLogin from "hooks/useLogin";

import Button from "components/common/Button/Button";
import Heading from "components/common/Heading/Heading";
import Modal from "components/common/Modal/Modal";
import { useToastContext } from "components/common/Toast/provider/ToastProvider";

interface LogoutModalProps {
  onCloseModal: () => void;
}

export default function LogoutModal({ onCloseModal }: LogoutModalProps) {
  const navigate = useNavigate();
  const { logout } = useLogin();

  const showToast = useToastContext();

  const handleLogout = () => {
    logout();
    showToast(MESSAGES.LOGOUT_COMPLETE, "active");
    onCloseModal();
    navigate(PATHNAME.HOME);
  };
  return (
    <Modal onCloseModal={onCloseModal}>
      <Modal.ModalHeader>
        <Heading size="xs">{MESSAGES.LOGOUT_CONFIRM}</Heading>
        <Modal.CloseButton onCloseModal={onCloseModal} />
      </Modal.ModalHeader>
      <Modal.ModalContent css={S.ModalContentStyling}>
        <p>로그아웃 시 다시 로그인 해야 합니다.</p>
      </Modal.ModalContent>
      <Modal.ModalFooter css={S.ButtonContainerStyling}>
        <Button onClick={onCloseModal}>취소</Button>
        <Button variant="primary" onClick={handleLogout}>
          확인
        </Button>
      </Modal.ModalFooter>
    </Modal>
  );
}
