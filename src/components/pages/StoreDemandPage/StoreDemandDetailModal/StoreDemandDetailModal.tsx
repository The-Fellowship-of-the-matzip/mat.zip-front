import { AxiosError } from "axios";
import { useContext } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useMutation } from "react-query";
import type { Campus } from "types/campus";

import { NETWORK } from "constants/api";
import { getCampusId } from "constants/campus";
import { categories } from "constants/categories";
import { MESSAGES } from "constants/messages";

import { campusContext } from "context/CampusContextProvider";
import { LoginContext } from "context/LoginContextProvider";

import useLogin from "hooks/useLogin";

import sendStoreDemandDeleteRequest from "api/store/sendStoreDemandDeleteRequest";

import Button from "components/common/Button/Button";
import Heading from "components/common/Heading/Heading";
import Modal from "components/common/Modal/Modal";
import Text from "components/common/Text/Text";

import * as S from "components/pages/StoreDemandPage/StoreDemandDetailModal/StoreDemandDetailModal.style";

import { theme } from "style/Theme";

interface Props extends StoreDemand {
  handleEditOpen: () => void;
  closeModal: () => void;
  handleAfterRequest: () => void;
}

function StoreDemandDetailModal({
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
  const isLoggedIn = useContext(LoginContext);
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
    sendStoreDemandDeleteRequest(getCampusId(campus as Campus), id),
    {
      onSuccess: handleSuccess,
      onError: handleSubmitError,
      retry: NETWORK.RETRY_COUNT,
    }
  );

  return (
    <Modal closeModal={closeModal}>
      <S.ContentContainer>
        <S.NameContainer>
          <Text size="small">{campus}</Text>
          <Heading size="small">{name}</Heading>
        </S.NameContainer>
        <S.DetailContainer>
          <S.DetailHead>
            <S.AuthorNameRow>신청자</S.AuthorNameRow>
            <S.CategoryNameRow>카테고리</S.CategoryNameRow>
            <S.RegisteredRow>등록됨</S.RegisteredRow>
          </S.DetailHead>
          <S.DetailItem>
            <S.AuthorNameRow>{author}</S.AuthorNameRow>
            <S.CategoryNameRow>{categories[categoryId]}</S.CategoryNameRow>
            <S.RegisteredRow>
              {isRegistered && (
                <BsCheckCircleFill color={theme.color.primary} size="2rem" />
              )}
            </S.RegisteredRow>
          </S.DetailItem>
        </S.DetailContainer>
        {isLoggedIn && isAuthor && !isRegistered && (
          <S.ButtonContainer>
            <Button onClick={handleDeleteClick}>삭제</Button>
            <Button variant="primary" onClick={handleEditOpen}>
              수정
            </Button>
          </S.ButtonContainer>
        )}
      </S.ContentContainer>
    </Modal>
  );
}

export default StoreDemandDetailModal;
