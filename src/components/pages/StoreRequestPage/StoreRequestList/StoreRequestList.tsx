import { BsCheckCircleFill } from "react-icons/bs";

import * as S from "components/pages/StoreRequestPage/StoreRequestList/StoreRequestList.style";

import { theme } from "style/Theme";

interface Props {
  storeRequests: StoreRequest[];
}

const categories = {
  1: "한식",
  2: "중식/아시안",
  3: "일식",
  4: "양식",
  5: "샌드위치/샐러드",
  6: "고기",
  8: "술/안주",
  7: "카페/디저트",
} as const;

function StoreRequestList({ storeRequests }: Props) {
  const RequestListItems = storeRequests.map(
    ({ categoryId, name, isRegistered }) => (
      <S.ListItem key={name}>
        <S.CategoryRow>{categories[categoryId]}</S.CategoryRow>
        <S.StoreNameRow>{name}</S.StoreNameRow>
        <S.RegisteredRow>
          {isRegistered && (
            <BsCheckCircleFill color={theme.primary} size="1.5rem" />
          )}
        </S.RegisteredRow>
      </S.ListItem>
    )
  );
  return (
    <S.Container>
      <S.ListHead>
        <S.CategoryRow>카테고리</S.CategoryRow>
        <S.StoreNameRow>맛집 이름</S.StoreNameRow>
        <S.RegisteredRow>등록됨</S.RegisteredRow>
      </S.ListHead>
      {RequestListItems}
    </S.Container>
  );
}

export default StoreRequestList;
