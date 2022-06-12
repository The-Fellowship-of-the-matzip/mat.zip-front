import styled from "styled-components";

import type { StoreListProps } from "./StoreList";

import Chip from "./Chip";
import SectionHeader from "./SectionHeader";
import StoreList from "./StoreList";
import { useState } from "react";

const CategoryDetailPageConatainer = styled.section`
  width: 375px; // TODO: 각 페이지 컴포넌트마다 width를 설정하는 게 아니라,  main tag를 App.tsx에 넣고 width를 지정해야 할 듯!
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
`;

const ChipContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
`;

const stores: StoreListProps["stores"] = [
  {
    storeId: 1,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "냠냠 치킨",
    campus: "잠실",
    distance: 0.5,
    starCount: 3,
  },
  {
    storeId: 2,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "욤욤 치킨",
    campus: "잠실",
    distance: 0.2,
    starCount: 4,
  },
  {
    storeId: 3,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "념념 치킨",
    campus: "잠실",
    distance: 1,
    starCount: 1,
  },
];

function CategoryDetailPage() {
  const [isSelected, setisSelected] = useState({
    starOrder: false,
    abcOrder: false,
  });

  // TODO: 클릭한 값에 따라 stores prop 바꾸기
  const handleClickStarOrderChip = () => {
    setisSelected((prev) => ({
      starOrder: !prev.starOrder,
      abcOrder: false,
    }));
  };
  const handleClickAbcOrderChip = () => {
    setisSelected((prev) => ({
      starOrder: false,
      abcOrder: !prev.abcOrder,
    }));
  };

  return (
    <CategoryDetailPageConatainer>
      <SectionHeader
        leadingIcon="<"
        onClick={() => console.log("TODO: 뒤로 가기 구현")}
      >
        양식
      </SectionHeader>
      <ChipContainer>
        <Chip
          isSelected={isSelected.starOrder}
          onClick={handleClickStarOrderChip}
        >
          별점 순
        </Chip>
        <Chip
          isSelected={isSelected.abcOrder}
          onClick={handleClickAbcOrderChip}
        >
          가나다 순
        </Chip>
      </ChipContainer>
      <StoreList stores={stores} />
    </CategoryDetailPageConatainer>
  );
}

export default CategoryDetailPage;
