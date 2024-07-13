import { StoreDemand } from "types/common";

import * as S from "components/pages/StoreDemandPage/StoreDemandList/StoreDemandList.style";
import StoreDemandListItem from "components/pages/StoreDemandPage/StoreDemandList/StoreDemandListItem/StoreDemandListItem";

interface Props {
  storeRequests: StoreDemand[];
  refetchList: () => void;
}

function StoreDemandList({ storeRequests, refetchList }: Props) {
  return (
    <S.Container>
      <S.ListHead>
        <S.StoreNameRow>맛집 이름</S.StoreNameRow>
        <S.RegisteredRow>등록됨</S.RegisteredRow>
        <S.ShowDetailRow>상세보기</S.ShowDetailRow>
      </S.ListHead>
      {storeRequests.map((storeDemand) => (
        <StoreDemandListItem
          key={storeDemand.id}
          storeDemand={storeDemand}
          refetchList={refetchList}
        />
      ))}
    </S.Container>
  );
}

export default StoreDemandList;
