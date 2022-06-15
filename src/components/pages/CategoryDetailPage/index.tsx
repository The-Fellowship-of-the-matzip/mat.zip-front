import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import Chip from "components/common/Chip/Chip";
import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import StoreList from "components/common/StoreList/StoreList";

import * as S from "components/pages/CategoryDetailPage/index.style";

import { stores } from "mock/data";

interface CategoryDetailPageProps {
  categoryName: string;
}

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
    <S.CategoryDetailPageContainer>
      <SectionHeader
        leadingIcon={<MdArrowBackIos />}
        onClick={() => {
          navigate(-1);
        }}
      >
        {categoryName}
      </SectionHeader>
      <S.ChipContainer>
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
      </S.ChipContainer>
      <InfiniteScroll handleContentLoad={loadMoreStores} hasMore={true}>
        <StoreList stores={data} />
      </InfiniteScroll>
    </S.CategoryDetailPageContainer>
  );
}

export default CategoryDetailPage;
