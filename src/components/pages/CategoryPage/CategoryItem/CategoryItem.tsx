import * as S from "components/pages/CategoryPage/CategoryItem/CategoryItem.style";

interface CategoryItemProps {
  buttonText: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLElement>;
}

function CategoryItem({
  buttonText,
  children,
  onClick,
  ...rest
}: CategoryItemProps) {
  return (
    <S.CategoryItemContainer onClick={onClick} {...rest}>
      <S.CategoryItemButton>{buttonText}</S.CategoryItemButton>
      <S.CategoryItemDesc>{children}</S.CategoryItemDesc>
    </S.CategoryItemContainer>
  );
}

export default CategoryItem;
