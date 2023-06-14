import { Store } from "types/commonTypes";

import * as S from "components/common/StoreList/StoreList.style";
import StoreListItem from "components/common/StoreListItem/StoreListItem";

interface StoreListProps {
  stores?: Store[];
}

function StoreList({ stores }: StoreListProps) {
  return (
    <S.StoreListContainer>
      {stores?.map((store) => (
        <StoreListItem
          id={store.id}
          key={store.id}
          thumbnailUrl={store.imageUrl}
          name={store.name}
          distance={store.distance}
          rating={store.rating}
        />
      ))}
    </S.StoreListContainer>
  );
}

export default StoreList;
