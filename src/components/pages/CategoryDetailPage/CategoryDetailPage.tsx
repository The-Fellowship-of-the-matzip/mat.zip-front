/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useInfiniteQuery } from "react-query";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Campus, Store } from "types/commonTypes";

import { NETWORK, SIZE, FILTERS } from "constants/api";
import { getCampusId } from "constants/campus";
import { categories } from "constants/categories";
import MESSAGES from "constants/messages";
import { PATHNAME } from "constants/routes";

import { campusContext } from "context/CampusContextProvider";

import fetchStoreList from "api/fetchStoreList";
import getNextPageParam from "api/getNextPageParam";

import Chip from "components/common/Chip/Chip";
import ErrorImage from "components/common/ErrorImage/ErrorImage";
import ErrorText from "components/common/ErrorText/ErrorText";
import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Spinner from "components/common/Spinner/Spinner";
import StoreList from "components/common/StoreList/StoreList";

import * as S from "components/pages/CategoryDetailPage/CategoryDetailPage.style";

function CategoryDetailPage() {
  const navigate = useNavigate();

  const campusName = useContext(campusContext);
  const campusId = getCampusId(campusName as Campus);
  const { categoryId } = useParams();

  const [filter, setFilter] = useState<string | null>(null);

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

  const loadMoreStores = () => {
    fetchNextPage();
  };

  const handleClickFilterChip = (index: number) => () => {
    setFilter((prev) =>
      prev === FILTERS[index].order ? "" : FILTERS[index].order
    );
  };

  const categoryStores =
    data?.pages.reduce<Store[]>(
      (stores, page) => [...stores, ...page.restaurants],
      []
    ) || [];

  useEffect(() => {
    refetch();
  }, [filter]);

  const isValidCategoryId = (categoryId: string): categoryId is CategoryId => {
    return categoryId in categories;
  };

  if (!categoryId || !Number(categoryId) || !isValidCategoryId(categoryId)) {
    window.alert(MESSAGES.WRONG_PATH);
    return <Navigate to={PATHNAME.HOME} />;
  }

  const categoryName = categories[categoryId] || MESSAGES.CATEGORY_FIND_FAILED;

  return (
    <S.CategoryDetailPageContainer>
      <SectionHeader
        leadingIcon={<MdArrowBackIos />}
        onClick={() => {
          navigate(-1);
        }}
      >
        {categoryName || "%ERROR%"}
      </SectionHeader>
      <S.ChipContainer>
        {FILTERS.map((chip, index) => (
          <Chip
            key={chip.order}
            isSelected={filter === chip.order}
            onClick={handleClickFilterChip(index)}
          >
            {chip.text}
          </Chip>
        ))}
      </S.ChipContainer>
      <InfiniteScroll handleContentLoad={loadMoreStores} hasMore={true}>
        {(isLoading || isFetching) && <Spinner />}
        {isError && error instanceof Error && (
          <ErrorImage errorMessage={error.message} />
        )}
        {categoryStores.length ? (
          <StoreList stores={categoryStores} />
        ) : (
          <ErrorText>가게 정보가 없습니다.</ErrorText>
        )}
      </InfiniteScroll>
    </S.CategoryDetailPageContainer>
  );
}

export default CategoryDetailPage;
