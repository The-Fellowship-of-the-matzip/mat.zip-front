import styled from "styled-components";

import type { StoreListItemProps } from "./StoreListItem";

import StoreListItem from "./StoreListItem";

interface StoreListProps {
  stores: (StoreListItemProps & { storeId: number })[];
}

const StoreListConatiner = styled.ul`
  width: 100%;
`;

function StoreList({ stores }: StoreListProps) {
  return (
    <StoreListConatiner>
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
    </StoreListConatiner>
  );
}

export default StoreList;
