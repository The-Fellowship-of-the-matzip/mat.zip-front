import { useState } from "react";

import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import StoreList from "components/common/StoreList/StoreList";

import Category from "components/pages/CategoryPage/Category/Category";
import * as S from "components/pages/CategoryPage/index.style";

import { stores } from "mock/data";

const categories = [
  { categoryId: 1, desc: "한식" },
  { categoryId: 2, desc: "중식" },
  { categoryId: 3, desc: "일식" },
  { categoryId: 4, desc: "양식" },
  { categoryId: 5, desc: "디저트" },
  { categoryId: 6, desc: "야식" },
  { categoryId: 7, desc: "패스트푸드" },
  { categoryId: 8, desc: "기타" },
];

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
