import { useNavigate } from "react-router-dom";

import * as S from "components/pages/CategoryPage/Category/Category.style";
import CategoryItem from "components/pages/CategoryPage/CategoryItem/CategoryItem";

interface CategoryProps {
  categories: {
    categoryId: number;
    desc: string;
  }[];
}

function Category({ categories }: CategoryProps) {
  const navigate = useNavigate();

  const handleClickCategoryItem = () => {
    navigate("/category");
  };

  return (
    <S.CategoryContainer>
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
    </S.CategoryContainer>
  );
}

export default Category;
