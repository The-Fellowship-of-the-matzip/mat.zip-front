import axios from "axios";
import { campusContext } from "context/CampusContextProvider";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useInfiniteQuery } from "react-query";
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
  const navigate = useNavigate();
  const campusName = useContext(campusContext);
  const campusId = campusName === "잠실" ? 1 : 2;
  const categoryId = 1;

  const [pageParam, setPageParam] = useState(0);

  const [isSelected, setIsSelected] = useState({
    starOrder: false,
    abcOrder: false,
  });

  // 기본을 score 순서로 처음 조회
  const fetchCategoryStoreList = async ({ pageParam = 0 }) => {
    let filterName = "score";
    if (isSelected.abcOrder) {
      filterName = "spell";
    }
    const data = await axios.get(`
    /api/campuses/${campusId}/restaurants?categoryId=${categoryId}&filter=${filterName}page=${pageParam}&size=${10}
    `);
    return data;
  };

  const {
    data,
    error,
    isLoading,
    isError,
    fetchNextPage,
    isFetching,
    refetch,
  } = useInfiniteQuery("categoryStore", fetchCategoryStoreList, {
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNext) {
        setPageParam(pageParam + 1);
        return pageParam + 1;
      }
      setPageParam(0);
      return 0;
    },
  });

  // const [data, setData] = useState([...stores]);

  // isSelected 선택 된 값이 달라질때마다 refetch 해서 데이터 업데이트
  useEffect(() => {
    refetch();
  }, [isSelected, refetch]);

  const loadMoreStores = () => {
    if (data.hasNext) {
      fetchNextPage();
    }
    return;
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
        {isLoading && <div>로딩중...</div>}
        {isError && <div>{error}</div>}
        {isFetching && <div>다음 페이지 로딩 중</div>}
        <StoreList stores={data} />
      </InfiniteScroll>
    </S.CategoryDetailPageContainer>
  );
}

export default CategoryDetailPage;
