import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import Chip from "components/common/Chip";
import InfiniteScroll from "components/common/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader";
import StoreList from "components/common/StoreList";

import styled from "styled-components";

import { stores } from "mock/data";

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

function CategoryDetailPage({ categoryName }: CategoryDetailPageProps) {
  const [isSelected, setIsSelected] = useState({
    starOrder: false,
    abcOrder: false,
  });
  const [data, setData] = useState([...stores]);

  const navigate = useNavigate();

  const loadMoreStores = () => {
    setData((prevData) => [...prevData, ...stores]);
  };

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
      <InfiniteScroll handleContentLoad={loadMoreStores} hasMore={true}>
        <StoreList stores={data} />
      </InfiniteScroll>
    </CategoryDetailPageContainer>
  );
}

export default CategoryDetailPage;
