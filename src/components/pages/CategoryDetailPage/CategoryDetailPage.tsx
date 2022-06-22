/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useInfiniteQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import type { Campus } from "constants/campus";
import { getCampusId } from "constants/campus";

import { campusContext } from "context/CampusContextProvider";

import Chip from "components/common/Chip/Chip";
import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import StoreList from "components/common/StoreList/StoreList";

import * as S from "components/pages/CategoryDetailPage/CategoryDetailPage.style";

import type { Store } from "mock/data";
import { categories } from "mock/data";

type CategoryStoreListResponse = {
  hasNext: boolean;
  restaurants: Store[];
};

function CategoryDetailPage() {
  const navigate = useNavigate();
  const campusName = useContext(campusContext);
  const campusId = getCampusId(campusName as Campus);
  const { categoryId } = useParams();
  const categoryName =
    categories.find((category) => category.id === Number(categoryId))?.name ||
    "카테고리 이름을 불러오지 못했음";

  const [isSelected, setIsSelected] = useState({
    starOrder: false,
    abcOrder: false,
  });

  const fetchCategoryStoreList = async ({ pageParam = 0 }) => {
    const filterName = isSelected.abcOrder ? "Spell" : "Rating";
    const { data } = await axios.get<CategoryStoreListResponse>(`
    https://matzip.link/api/campuses/${campusId}/restaurants?categoryId=${categoryId}&page=${pageParam}&size=${10}&filter=${filterName}
    `);
    return { ...data, nextPageParam: pageParam + 1 };
  };

  const {
    data,
    error,
    isLoading,
    isError,
    fetchNextPage,
    isFetching,
    refetch,
  } = useInfiniteQuery(
    ["categoryStore", { categoryId, campusId }],
    fetchCategoryStoreList,
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.hasNext) {
          return lastPage.nextPageParam;
        }
        return;
      },
    }
  );

  // isSelected 선택 된 값이 달라질때마다 refetch 해서 데이터 업데이트
  useEffect(() => {
    refetch();
  }, [isSelected]);

  const loadMoreStores = () => {
    fetchNextPage();
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
        {categoryName || ""}
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
        {isError && <div>{error instanceof Error && error.message}</div>}
        {isFetching && <div>다음 페이지 로딩 중</div>}
        <StoreList
          stores={
            data &&
            data.pages.reduce<Store[]>(
              (stores, page) => [...stores, ...page.restaurants],
              []
            )
          }
        />
      </InfiniteScroll>
    </S.CategoryDetailPageContainer>
  );
}

export default CategoryDetailPage;
