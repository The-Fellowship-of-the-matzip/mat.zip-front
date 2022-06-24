/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useInfiniteQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";

import { NETWORK, SIZE } from "constants/api";
import type { Campus } from "constants/campus";
import { getCampusId } from "constants/campus";
import { PATHNAME } from "constants/routes";

import { campusContext } from "context/CampusContextProvider";

import fetchStoreList from "api/fetchStoreList";
import getNextPageParam from "api/getNextPageParam";

import ErrorImage from "components/common/ErrorImage/ErrorImage";
import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Spinner from "components/common/Spinner/Spinner";
import StoreList from "components/common/StoreList/StoreList";

import * as S from "components/pages/SearchResultPage/SearchResultPage.style";

import type { Store } from "mock/data";

function SearchResultPage() {
  const navigate = useNavigate();
  const campusName = useContext(campusContext);
  const campusId = getCampusId(campusName as Campus);

  const [searchParam] = useSearchParams();
  const name = searchParam.get("name");

  const fetchParams = {
    size: SIZE.LIST_ITEM,
    campusId,
    name,
    type: PATHNAME.SEARCH,
  };

  const { data, error, isLoading, isError, fetchNextPage, isFetching } =
    useInfiniteQuery(["categoryStore", fetchParams], fetchStoreList, {
      getNextPageParam,
      retry: NETWORK.RETRY_COUNT,
    });

  const loadMoreStores = () => {
    fetchNextPage();
  };

  const searchResults =
    data?.pages.reduce<Store[]>(
      (stores, page) => [...stores, ...page.restaurants],
      []
    ) || [];

  return (
    <S.SearchResultPageContainer>
      <SectionHeader
        leadingIcon={<MdArrowBackIos />}
        onClick={() => {
          navigate(-1);
        }}
      >
        {`' ${name} ' 검색결과입니다.`}
      </SectionHeader>
      <InfiniteScroll handleContentLoad={loadMoreStores} hasMore={true}>
        {(isLoading || isFetching) && <Spinner />}
        {isError && error instanceof Error && (
          <ErrorImage errorMessage={error.message} />
        )}
        {searchResults.length ? (
          <StoreList stores={searchResults} />
        ) : (
          <S.NoSearchResultText>검색 결과가 없습니다.</S.NoSearchResultText>
        )}
      </InfiniteScroll>
    </S.SearchResultPageContainer>
  );
}

export default SearchResultPage;
