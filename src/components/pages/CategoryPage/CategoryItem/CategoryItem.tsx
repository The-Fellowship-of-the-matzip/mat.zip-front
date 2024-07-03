import { Category } from "types/common";

import { CATEGORY_ICONS } from "constants/categories";

import Text from "components/common/Text/Text";

import * as S from "components/pages/CategoryPage/CategoryItem/CategoryItem.style";

interface CategoryItemProps {
  buttonText: string;
  children: Category;
  onClick: React.MouseEventHandler<HTMLElement>;
}

function CategoryItem({
  buttonText,
  children,
  onClick,
  ...rest
}: CategoryItemProps) {
  return (
    <S.CategoryItemContainer onClick={onClick} {...rest} tabIndex={0}>
      <S.Icon>{CATEGORY_ICONS[children]}</S.Icon>
      <Text css={S.textStyle} size="sm">
        {children}
      </Text>
    </S.CategoryItemContainer>
  );
}

export default CategoryItem;
