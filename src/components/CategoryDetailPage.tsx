import { useState } from "react";
import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";

import type { StoreListProps } from "./StoreList";

import Chip from "./Chip";
import SectionHeader from "./SectionHeader";
import StoreList from "./StoreList";
import { useNavigate } from "react-router-dom";

interface CategoryDetailPageProps {
  categoryName: string;
}

const CategoryDetailPageContainer = styled.section`
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

function CategoryDetailPage({ categoryName }: CategoryDetailPageProps) {
  const [isSelected, setIsSelected] = useState({
    starOrder: false,
    abcOrder: false,
  });

  const navigate = useNavigate();

  // TODO: 클릭한 값에 따라 stores prop 바꾸기
  const handleClickStarOrderChip = () => {
    setIsSelected((prev) => ({
      starOrder: !prev.starOrder,
      abcOrder: false,
    }));
  };
  const handleClickAbcOrderChip = () => {
    setIsSelected((prev) => ({
      starOrder: false,
      abcOrder: !prev.abcOrder,
    }));
  };

  return (
    <CategoryDetailPageContainer>
      <SectionHeader
        leadingIcon={<MdArrowBackIos />}
        onClick={() => {
          navigate(-1);
        }}
      >
        {categoryName}
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
    </CategoryDetailPageContainer>
  );
}

export default CategoryDetailPage;
