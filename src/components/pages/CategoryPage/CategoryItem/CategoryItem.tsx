import Button from "components/common/Button/Button";
import Text from "components/common/Text/Text";

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
      <Button css={S.buttonStyle} variant="primary">
        {buttonText}
      </Button>
      <Text css={S.textStyle} size="small">
        {children}
      </Text>
    </S.CategoryItemContainer>
  );
}

export default CategoryItem;
