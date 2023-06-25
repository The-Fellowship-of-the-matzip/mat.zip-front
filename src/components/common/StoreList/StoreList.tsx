import Divider from "../Divider/Divider";
import { Fragment } from "react";
import { Store } from "types/common";

import * as S from "components/common/StoreList/StoreList.style";
import StoreListItem from "components/common/StoreListItem/StoreListItem";

interface StoreListProps {
  stores?: Store[];
}

function StoreList({ stores }: StoreListProps) {
  return (
    <S.StoreListContainer>
      {stores?.map((store) => (
        <Fragment key={store.id}>
          <StoreListItem
            id={store.id}
            thumbnailUrl={store.imageUrl}
            name={store.name}
            distance={store.distance}
            rating={store.rating}
            reviewCount={store.reviewCount}
            saved={store.saved}
          />
          <Divider />
        </Fragment>
      ))}
    </S.StoreListContainer>
  );
}

export default StoreList;
