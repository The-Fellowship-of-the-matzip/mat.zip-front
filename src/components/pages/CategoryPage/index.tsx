import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";

import { campusContext } from "context/CampusContextProvider";

import SectionHeader from "components/common/SectionHeader/SectionHeader";
import StoreList from "components/common/StoreList/StoreList";

import Category from "components/pages/CategoryPage/Category/Category";
import * as S from "components/pages/CategoryPage/index.style";

import { categories, Store } from "mock/data";

function CategoryPage() {
  const campus = useContext(campusContext);

  const fetchRandomStore = async () => {
    const campusId = campus === "잠실" ? 1 : 2;
    const { data } = await axios.get<Store[]>(
      `https://matzip.link/api/campuses/${campusId}/restaurants/random?size=5`
    );
    return data;
  };

  const { data, isLoading, isError, error } = useQuery(
    "randomStore",
    fetchRandomStore
  );

  return (
    <S.CategoryPageContainer>
      <section>
        <SectionHeader>카테고리</SectionHeader>
        <Category categories={categories} />
      </section>
      <section>
        <SectionHeader>이런 메뉴는 어떤가요?</SectionHeader>
        {isLoading && <div>로딩중</div>}
        {isError && <div>{error instanceof Error && error.message} </div>}
        <StoreList stores={data} />
      </section>
    </S.CategoryPageContainer>
  );
}

export default CategoryPage;
