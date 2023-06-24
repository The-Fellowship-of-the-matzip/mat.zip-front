/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { Campus } from "types/common";

import { NETWORK, SIZE } from "constants/api";
import { getCampusId } from "constants/campus";

import { campusContext } from "context/CampusContextProvider";

import fetchRandomStoreList from "api/store/fetchRandomStoreList";

import ErrorImage from "components/common/ErrorImage/ErrorImage";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Spinner from "components/common/Spinner/Spinner";
import StoreList from "components/common/StoreList/StoreList";

import Category from "components/pages/CategoryPage/Category/Category";
import * as S from "components/pages/CategoryPage/CategoryPage.style";
import RandomRoulette from "components/pages/CategoryPage/RandomRoulette/RandomRoulette";

function CategoryPage() {
  const campusName = useContext(campusContext);
  const campusId = getCampusId(campusName as Campus);

  const { data, isLoading, isError, error, refetch } = useQuery(
    "randomStore",
    () => fetchRandomStoreList(campusId, SIZE.RANDOM_ITEM),
    {
      retry: NETWORK.RETRY_COUNT,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [campusName]);

  return (
    <S.CategoryPageContainer>
      <section>
        <SectionHeader>카테고리</SectionHeader>
        <Category />
      </section>
      <section>
        <SectionHeader>여기서 먹을까요?</SectionHeader>
        {isLoading ? <Spinner /> : <RandomRoulette campusId={campusId} />}
      </section>
      <section>
        <SectionHeader>이런 메뉴는 어떤가요?</SectionHeader>
        {isLoading && <Spinner />}
        {isError && error instanceof Error && (
          <ErrorImage errorMessage={error.message} />
        )}
        <StoreList stores={data} />
      </section>
    </S.CategoryPageContainer>
  );
}

export default CategoryPage;
