import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

import StoreRequestEditBottomSheet from "components/pages/StoreRequestPage/StoreRequestBottomSheet/StoreRequestEditBottomSheet";
import StoreRequestDetailModal from "components/pages/StoreRequestPage/StoreRequestDetailModal/StoreRequestDetailModal";
import * as S from "components/pages/StoreRequestPage/StoreRequestList/StoreRequestList.style";

import { theme } from "style/Theme";

interface Props {
  storeRequests: StoreRequest[];
  refetchList: () => void;
}

function StoreRequestList({ storeRequests, refetchList }: Props) {
  const [detailOpenId, setDetailOpenId] = useState<string | null>(null);
  const [editOpenId, setEditOpenId] = useState<string | null>(null);

  const handleRequestDetailOpen: (
    id: string
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

  const sliceStoreName = (name: string) => {
    return name.length < 15 ? name : `${name.slice(0, 12)}...`;
  };

  const RequestListItems = storeRequests.map(
    ({ id, categoryId, name, author, isRegistered, isAuthor }) => (
      <S.ListItem key={id}>
        <S.StoreNameRow>{sliceStoreName(name)}</S.StoreNameRow>
        <S.RegisteredRow>
          {isRegistered && (
            <BsCheckCircleFill color={theme.primary} size="1.5rem" />
          )}
        </S.RegisteredRow>
        <S.ShowDetailRow>
          <S.ShowDetailButton onClick={handleRequestDetailOpen(id)}>
            상세보기
          </S.ShowDetailButton>
        </S.ShowDetailRow>
        {detailOpenId === id && (
          <StoreRequestDetailModal
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
          <StoreRequestEditBottomSheet
            id={id}
            initValue={{ categoryId: String(categoryId), name }}
            closeSheet={handleRequestEditClose}
            refetchList={refetchList}
          />
        )}
      </S.ListItem>
    )
  );
  return (
    <S.Container>
      <S.ListHead>
        <S.StoreNameRow>맛집 이름</S.StoreNameRow>
        <S.RegisteredRow>등록됨</S.RegisteredRow>
        <S.ShowDetailRow>상세보기</S.ShowDetailRow>
      </S.ListHead>

      {RequestListItems}
    </S.Container>
  );
}

export default StoreRequestList;
