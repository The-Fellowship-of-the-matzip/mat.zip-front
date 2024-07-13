import * as S from "./CampusSelectModal.styled";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Campus } from "types/common";

import { getOtherCampus } from "constants/campus";
import { MESSAGES } from "constants/messages";
import { PATHNAME } from "constants/routes";

import { campusContext, setCampusContext } from "context/CampusContextProvider";

import { Button } from "components/common/Button/Button.style";
import { Heading } from "components/common/Heading/Heading.style";
import Modal from "components/common/Modal/Modal";

interface CampusSelectModalProps {
  onCloseModal: () => void;
}

export default function CampusSelectModal({
  onCloseModal,
}: CampusSelectModalProps) {
  const campus = useContext(campusContext) as Campus;
  const otherCampus = getOtherCampus(campus as Campus);
  const setCampus = useContext(setCampusContext);
  const navigate = useNavigate();

  const handleConfirm = () => {
    setCampus(otherCampus);
    onCloseModal();
    navigate(PATHNAME.HOME);
  };
  return (
    <Modal onCloseModal={onCloseModal}>
      <Modal.ModalHeader>
        <Heading size="xs">캠퍼스를 변경하시겠습니까?</Heading>
        <Modal.CloseButton onCloseModal={onCloseModal} />
      </Modal.ModalHeader>
      <Modal.ModalContent css={S.ModalContentStyling}>
        <p>{MESSAGES.CAMPUS_CHANGE_CONFIRM(campus, otherCampus)}</p>
      </Modal.ModalContent>
      <Modal.ModalFooter css={S.ButtonContainerStyling}>
        <Button onClick={onCloseModal}>취소</Button>
        <Button variant="primary" onClick={handleConfirm}>
          확인
        </Button>
      </Modal.ModalFooter>
    </Modal>
  );
}
