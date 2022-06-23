/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useInfiniteQuery } from "react-query";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { NETWORK, SIZE } from "constants/api";
import type { Campus } from "constants/campus";
import { getCampusId } from "constants/campus";
import { PATHNAME } from "constants/routes";

import { campusContext } from "context/CampusContextProvider";

import fetchStoreList from "api/fetchStoreList";
import getNextPageParam from "api/getNextPageParam";

import Chip from "components/common/Chip/Chip";
import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Spinner from "components/common/Spinner/Spinner";
import StoreList from "components/common/StoreList/StoreList";

import * as S from "components/pages/CategoryDetailPage/CategoryDetailPage.style";

import type { Store } from "mock/data";
import { categories } from "mock/data";

function CategoryDetailPage() {
  const navigate = useNavigate();

  const campusName = useContext(campusContext);
  const campusId = getCampusId(campusName as Campus);
  const { categoryId } = useParams();

  const [filter, setFilter] = useState<string | null>(null);

  const categoryName =
    categories.find((category) => category.id === Number(categoryId))?.name ||
    "카테고리 이름을 불러오지 못했음";

  const fetchParams = { size: SIZE.LIST_ITEM, filter, campusId, categoryId };

  const {
    data,
    error,
    isLoading,
    isError,
    fetchNextPage,
    isFetching,
    refetch,
  } = useInfiniteQuery(["categoryStore", fetchParams], fetchStoreList, {
    getNextPageParam,
    retry: NETWORK.RETRY_COUNT,
  });

  useEffect(() => {
    refetch();
  }, [filter]);

  const loadMoreStores = () => {
    fetchNextPage();
  };

  const handleClickRatingOrderChip = () => {
    setFilter((prev) => (prev === "rating" ? "" : "rating"));
  };
  const handleClickSpellOrderChip = () => {
    setFilter((prev) => (prev === "spell" ? "" : "spell"));
  };

  if (categoryId === undefined) {
    window.alert("잘못된 접근입니다.");
    return <Navigate to={PATHNAME.HOME} />;
  }

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
          isSelected={filter === "rating"}
          onClick={handleClickRatingOrderChip}
        >
          별점 순
        </Chip>
        <Chip
          isSelected={filter === "spell"}
          onClick={handleClickSpellOrderChip}
        >
          가나다 순
        </Chip>
      </S.ChipContainer>
      <InfiniteScroll handleContentLoad={loadMoreStores} hasMore={true}>
        {(isLoading || isFetching) && <Spinner />}
        {isError && <div>{error instanceof Error && error.message}</div>}
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
