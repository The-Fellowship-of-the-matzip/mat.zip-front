import * as S from "./DeleteReviewModal.styled";

import { Button } from "components/common/Button/Button.style";
import { Heading } from "components/common/Heading/Heading.style";
import Modal from "components/common/Modal/Modal";

interface DeleteReviewModalProps {
  onCloseModal: () => void;
  onDeleteReview: () => void;
}

export default function DeleteReviewModal({
  onCloseModal,
  onDeleteReview,
}: DeleteReviewModalProps) {
  return (
    <Modal onCloseModal={onCloseModal}>
      <Modal.ModalHeader>
        <Heading size="xs">정말 삭제하시겠습니까?</Heading>
        <Modal.CloseButton onCloseModal={onCloseModal} />
      </Modal.ModalHeader>
      <Modal.ModalContent css={S.ModalContentStyling}>
        <p>삭제할 경우 더 이상 리뷰를 확인할 수 없습니다.</p>
      </Modal.ModalContent>
      <Modal.ModalFooter css={S.ButtonContainerStyling}>
        <Button onClick={onCloseModal}>취소</Button>
        <Button variant="primary" onClick={onDeleteReview}>
          확인
        </Button>
      </Modal.ModalFooter>
    </Modal>
  );
}
