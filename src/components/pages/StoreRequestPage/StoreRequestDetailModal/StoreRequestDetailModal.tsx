import { AxiosError } from "axios";
import { useContext } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useMutation } from "react-query";

import { NETWORK } from "constants/api";
import { Campus, getCampusId } from "constants/campus";
import { categories } from "constants/categories";
import MESSAGES from "constants/messages";

import { campusContext } from "context/CampusContextProvider";

import useLogin from "hooks/useLogin";

import sendStoreRequestDeleteRequest from "api/sendStoreReqeustDeleteRequest";

import Modal from "components/common/Modal/Modal";

import * as S from "components/pages/StoreRequestPage/StoreRequestDetailModal/StoreRequestDetailModal.style";

import { theme } from "style/Theme";

interface Props extends StoreRequest {
  handleEditOpen: () => void;
  closeModal: () => void;
  handleAfterRequest: () => void;
}

function StoreRequestDetailModal({
  id,
  name,
  author,
  categoryId,
  isRegistered,
  isAuthor,
  handleEditOpen,
  closeModal,
  handleAfterRequest,
}: Props) {
  const campus = useContext(campusContext);
  const { logout } = useLogin();

  const handleDeleteClick = () => {
    mutation.mutate();
  };

  const handleSuccess = () => {
    closeModal();
    handleAfterRequest();
  };

  const handleSubmitError = (error: AxiosError) => {
    if (error.code === "401") {
      alert(MESSAGES.TOKEN_INVALID);
      logout();
    }
  };

  const mutation = useMutation(
    sendStoreRequestDeleteRequest(getCampusId(campus as Campus), id),
    {
      onSuccess: handleSuccess,
      onError: handleSubmitError,
      retry: NETWORK.RETRY_COUNT,
    }
  );

  return (
    <Modal closeModal={closeModal}>
      <S.ContentContainer>
        <S.StoreName>{name}</S.StoreName>
        <S.Campus>{campus}</S.Campus>
        <S.DetailContainer>
          <S.DetailContent>
            <S.DetailLabel>신청자</S.DetailLabel>
            <S.DetailValue>{author}</S.DetailValue>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailLabel>카테고리</S.DetailLabel>
            <S.DetailValue>{categories[categoryId]}</S.DetailValue>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailLabel>등록됨</S.DetailLabel>
            {isRegistered && (
              <BsCheckCircleFill color={theme.primary} size="1.5rem" />
            )}
          </S.DetailContent>
        </S.DetailContainer>
        {isAuthor && !isRegistered && (
          <S.ButtonContainer>
            <S.DeleteButton onClick={handleDeleteClick}>
              <MdDeleteForever size="1rem" />
              삭제
            </S.DeleteButton>
            <S.CustomButton onClick={handleEditOpen}>
              <MdEdit size="1rem" />
              수정
            </S.CustomButton>
          </S.ButtonContainer>
        )}
      </S.ContentContainer>
    </Modal>
  );
}

export default StoreRequestDetailModal;
