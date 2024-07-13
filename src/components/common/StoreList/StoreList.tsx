import Divider from "../Divider/Divider";
import { Fragment } from "react";

import * as S from "components/common/StoreList/StoreList.style";

interface StoreListProps<T extends { id: string | number }> {
  stores: T[];
  renderListItem: (store: T) => JSX.Element;
}

function StoreList<T extends { id: string | number }>({
  stores,
  renderListItem,
}: StoreListProps<T>) {
  return (
    <S.StoreListContainer>
      {stores?.map((store) => (
        <Fragment key={store.id}>
          {renderListItem(store)}
          <Divider />
        </Fragment>
      ))}
    </S.StoreListContainer>
  );
}

export default StoreList;
