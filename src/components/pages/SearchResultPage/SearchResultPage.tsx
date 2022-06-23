/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useInfiniteQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";

import type { Campus } from "constants/campus";
import { getCampusId } from "constants/campus";

import { campusContext } from "context/CampusContextProvider";

import fetchStoreList from "api/fetchStoreList";
import getNextPageParam from "api/getNextPageParam";

import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import StoreList from "components/common/StoreList/StoreList";

import * as S from "components/pages/CategoryDetailPage/CategoryDetailPage.style";

import type { Store } from "mock/data";

function SearchResultPage() {
  const navigate = useNavigate();
  const campusName = useContext(campusContext);
  const campusId = getCampusId(campusName as Campus);

  const [searchParam] = useSearchParams();
  const name = searchParam.get("name");

  const fetchParams = { size: 10, campusId, name, type: "/search" };

  const { data, error, isLoading, isError, fetchNextPage, isFetching } =
    useInfiniteQuery(["categoryStore", fetchParams], fetchStoreList, {
      getNextPageParam,
    });

  const loadMoreStores = () => {
    fetchNextPage();
  };

  return (
    <S.CategoryDetailPageContainer>
      <SectionHeader
        leadingIcon={<MdArrowBackIos />}
        onClick={() => {
          navigate(-1);
        }}
      >
        {`${name} 검색결과 입니다.`}
      </SectionHeader>
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

export default SearchResultPage;
