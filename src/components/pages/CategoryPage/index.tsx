import axios from "axios";
import { campusContext } from "context/CampusContextProvider";
import { useContext, useState } from "react";
import { useQuery } from "react-query";

import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import StoreList from "components/common/StoreList/StoreList";

import Category from "components/pages/CategoryPage/Category/Category";
import * as S from "components/pages/CategoryPage/index.style";

import { categories, stores } from "mock/data";

function CategoryPage() {
  const campus = useContext(campusContext);
  //TODO : 랜덤으로 레스토랑 가져오는 api 구현시, 기능 구현 예정

  const fetchRandomStore = async (campus: number) => {
    const result = await axios.get("something ");
    return result;
  };

  const { data, isLoading, isError, error } = useQuery("randomStore", () =>
    fetchRandomStore(campus)
  );

  // const [data, setData] = useState([...stores]);

  // const loadMoreStores = () => {
  //   setData((prevData) => [...prevData, ...stores]);
  // };

  return (
    <S.CategoryPageContainer>
      <section>
        <SectionHeader>카테고리</SectionHeader>
        <Category categories={categories} />
      </section>
      <section>
        <SectionHeader>이런 메뉴는 어떤가요?</SectionHeader>
        {isLoading && <div>로딩중</div>}
        {isError && <div>에러발생!</div>}
        <StoreList stores={data} />
        {/* <InfiniteScroll handleContentLoad={loadMoreStores} hasMore={true}>
          
        </InfiniteScroll> */}
      </section>
    </S.CategoryPageContainer>
  );
}

export default CategoryPage;
