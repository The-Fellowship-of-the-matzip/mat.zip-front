import { useState } from "react";

import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import StoreList from "components/common/StoreList/StoreList";

import Category from "components/pages/CategoryPage/Category/Category";
import * as S from "components/pages/CategoryPage/index.style";

import { categories, stores } from "mock/data";

function CategoryPage() {
  const [data, setData] = useState([...stores]);

  const loadMoreStores = () => {
    setData((prevData) => [...prevData, ...stores]);
  };

  return (
    <S.CategoryPageContainer>
      <section>
        <SectionHeader>카테고리</SectionHeader>
        <Category categories={categories} />
      </section>
      <section>
        <SectionHeader>이런 메뉴는 어떤가요?</SectionHeader>
        <InfiniteScroll handleContentLoad={loadMoreStores} hasMore={true}>
          <StoreList stores={data} />
        </InfiniteScroll>
      </section>
    </S.CategoryPageContainer>
  );
}

export default CategoryPage;
