import { useNavigate } from "react-router-dom";

import { categories } from "constants/categories";
import { PATHNAME } from "constants/routes";

import * as S from "components/pages/CategoryPage/Category/Category.style";
import CategoryItem from "components/pages/CategoryPage/CategoryItem/CategoryItem";

function Category() {
  const navigate = useNavigate();

  const handleClickCategoryItem = (id: string) => () => {
    navigate(`${PATHNAME.CATEGORY_DETAIL}/${id}`);
  };

  return (
    <S.CategoryContainer>
      {Object.entries(categories).map(([id, name]) => (
        <CategoryItem
          key={id}
          buttonText={name[0]}
          onClick={handleClickCategoryItem(id)}
        >
          {name}
        </CategoryItem>
      ))}
    </S.CategoryContainer>
  );
}

export default Category;
