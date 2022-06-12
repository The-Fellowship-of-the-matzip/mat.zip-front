import styled from "styled-components";

import type { StoreListProps } from "./StoreList";

import Category from "./Category";
import SectionHeader from "./SectionHeader";
import StoreList from "./StoreList";

const CategoryPageConatainer = styled.div`
  width: 375px; // TODO: 각 페이지 컴포넌트마다 width를 설정하는 게 아니라,  main tag를 App.tsx에 넣고 width를 지정해야 할 듯!
  padding: 1em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5em;
`;

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

const stores: StoreListProps["stores"] = [
  {
    storeId: 1,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "냠냠 치킨",
    campus: "잠실",
    distance: 0.5,
    starCount: 3,
  },
  {
    storeId: 2,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "욤욤 치킨",
    campus: "잠실",
    distance: 0.2,
    starCount: 4,
  },
  {
    storeId: 3,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "념념 치킨",
    campus: "잠실",
    distance: 1,
    starCount: 1,
  },
];

function CategoryPage() {
  return (
    <CategoryPageConatainer>
      <section>
        <SectionHeader>카테고리</SectionHeader>
        <Category categories={categories} />
      </section>
      <section>
        <SectionHeader>이런 메뉴는 어떤가요?</SectionHeader>
        <StoreList stores={stores} />
      </section>
    </CategoryPageConatainer>
  );
}

export default CategoryPage;
