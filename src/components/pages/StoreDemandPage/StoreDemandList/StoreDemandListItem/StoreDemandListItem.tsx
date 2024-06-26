import { Campus, StoreDemand } from "types/common";

import * as S from "../StoreDemandList.style";
import { BsCheckCircleFill } from "react-icons/bs";
import { theme } from "style/Theme";
import Button from "components/common/Button/Button";
import StoreDemandDetailModal from "components/pages/StoreDemandPage/StoreDemandDetailModal/StoreDemandDetailModal";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import sendStoreDemandPutRequest from "api/store/sendStoreDemandPutRequest";
import { getCampusId } from "constants/campus";
import { MESSAGES } from "constants/messages";
import useLogin from "hooks/useLogin";
import { useToastContext } from "components/common/Toast/provider/ToastProvider";
import { PATHNAME } from "constants/routes";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { campusContext } from "context/CampusContextProvider";
import StoreDemandBottomSheet from "components/pages/StoreDemandPage/StoreDemandBottomSheet/StoreDemandBottomSheet";

interface StoreDemandContentListProps {
  storeDemand: StoreDemand;
  refetchList: () => void;
}

const sliceStoreName = (name: string) => {
  return name.length < 15 ? name : `${name.slice(0, 12)}...`;
};

export default function StoreDemandListItem({
  storeDemand: { id, categoryId, name, author, isRegistered, isAuthor },
  refetchList,
}: StoreDemandContentListProps) {
  const { logout } = useLogin();
  const showToast = useToastContext();
  const navigate = useNavigate();
  const campus = useContext(campusContext);

  const [detailOpenId, setDetailOpenId] = useState<string | null>(null);
  const [editOpenId, setEditOpenId] = useState<string | null>(null);

  const handleRequestDetailOpen: (
    id: string,
  ) => React.MouseEventHandler<HTMLElement> = (id) => () => {
    setDetailOpenId(id);
  };

  const handleRequestDetailClose = () => {
    setDetailOpenId(null);
  };

  const handleEditOpen = (id: string) => () => {
    setEditOpenId(id);
    setDetailOpenId(null);
  };

  const handleRequestEditClose = () => {
    setEditOpenId(null);
  };

  const handleSuccess = () => {
    handleRequestEditClose();
    refetchList();
  };

  const handleSubmitError = (error: Error) => {
    if (error.message === MESSAGES.TOKEN_INVALID) {
      showToast(MESSAGES.TOKEN_INVALID);
      logout();
      navigate(PATHNAME.HOME);
    }
  };

  const mutation = useMutation<
    unknown,
    AxiosError,
    { categoryId: string; name: string }
  >(sendStoreDemandPutRequest(getCampusId(campus as Campus), id), {
    onSuccess: handleSuccess,
    onError: handleSubmitError,
    retry: 0,
  });

  return (
    <S.ListItem key={id}>
      <S.StoreNameRow>{sliceStoreName(name)}</S.StoreNameRow>
      <S.RegisteredRow>
        {isRegistered && (
          <BsCheckCircleFill color={theme.color.primary} size="2rem" />
        )}
      </S.RegisteredRow>
      <S.ShowDetailRow>
        <Button size="small" onClick={handleRequestDetailOpen(id)}>
          상세보기
        </Button>
      </S.ShowDetailRow>
      {detailOpenId === id && (
        <StoreDemandDetailModal
          id={id}
          name={name}
          categoryId={categoryId}
          isRegistered={isRegistered}
          isAuthor={isAuthor}
          author={author}
          handleEditOpen={handleEditOpen(id)}
          closeModal={handleRequestDetailClose}
          handleAfterRequest={refetchList}
        />
      )}
      {editOpenId === id && (
        <StoreDemandBottomSheet
          initValue={{ categoryId: String(categoryId), name }}
          closeSheet={handleRequestEditClose}
          mutate={mutation.mutate}
        />
      )}
    </S.ListItem>
  );
}
