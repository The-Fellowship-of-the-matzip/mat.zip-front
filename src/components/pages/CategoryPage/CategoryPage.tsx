import { useContext } from "react";
import { useQuery } from "react-query";

import type { Campus } from "constants/campus";
import { getCampusId } from "constants/campus";

import { campusContext } from "context/CampusContextProvider";

import fetchRandomStoreList from "api/fetchRandomStoreList";

import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Spinner from "components/common/Spinner/Spinner";
import StoreList from "components/common/StoreList/StoreList";

import Category from "components/pages/CategoryPage/Category/Category";
import * as S from "components/pages/CategoryPage/CategoryPage.style";

import { categories } from "mock/data";

function CategoryPage() {
  const campusName = useContext(campusContext);
  const campusId = getCampusId(campusName as Campus);

  const { data, isLoading, isError, error } = useQuery("randomStore", () =>
    fetchRandomStoreList(campusId, 5)
  );

  return (
    <S.CategoryPageContainer>
      <section>
        <SectionHeader>카테고리</SectionHeader>
        <Category categories={categories} />
      </section>
      <section>
        <SectionHeader>이런 메뉴는 어떤가요?</SectionHeader>
        {isLoading && <Spinner />}
        {isError && <div>{error instanceof Error && error.message} </div>}
        <StoreList stores={data} />
      </section>
    </S.CategoryPageContainer>
  );
}

export default CategoryPage;
