import { useNavigate } from "react-router-dom";

import * as S from "components/pages/CategoryPage/Category/Category.style";
import CategoryItem from "components/pages/CategoryPage/CategoryItem/CategoryItem";

interface CategoryProps {
  categories: {
    id: number;
    name: string;
  }[];
}

function Category({ categories }: CategoryProps) {
  const navigate = useNavigate();

  const handleClickCategoryItem = () => {
    navigate("/category");
  };

  return (
    <S.CategoryContainer>
      {categories.map(({ id, name }) => (
        <CategoryItem
          key={id}
          buttonText={name[0]}
          width="2.5rem"
          onClick={handleClickCategoryItem}
        >
          {name}
        </CategoryItem>
      ))}
    </S.CategoryContainer>
  );
}

export default Category;
