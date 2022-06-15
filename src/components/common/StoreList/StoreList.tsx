import * as S from "components/common/StoreList/StoreList.style";
import StoreListItem from "components/common/StoreListItem/StoreListItem";
import type { StoreListItemProps } from "components/common/StoreListItem/StoreListItem";

export interface StoreListProps {
  stores: (StoreListItemProps & { storeId: number })[];
}

function StoreList({ stores }: StoreListProps) {
  return (
    <S.StoreListContainer>
      {stores.map((store) => (
        <StoreListItem
          key={store.storeId}
          thumbnailUrl={store.thumbnailUrl}
          name={store.name}
          campus={store.campus}
          distance={store.distance}
          starCount={store.starCount}
        />
      ))}
    </S.StoreListContainer>
  );
}

export default StoreList;
