import styled from "styled-components";

import CategoryItem from "./CategoryItem";

interface CategoryProps {
  categories: [
    {
      categoryId: number;
      desc: string;
    }
  ];
}

const CategoryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.2em;
  justify-items: center;
  align-items: center;
`;

function Category({ categories }: CategoryProps) {
  const handleClickCategoryItem = () => {};

  return (
    <CategoryContainer>
      {categories.map(({ categoryId, desc }) => (
        <CategoryItem
          key={categoryId}
          buttonText={desc[0]}
          width="2.5em"
          onClick={handleClickCategoryItem}
        >
          {desc}
        </CategoryItem>
      ))}
    </CategoryContainer>
  );
}

export default Category;
