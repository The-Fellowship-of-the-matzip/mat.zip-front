import styled from "styled-components";

interface CategoryItemButtonProps {
  width: string;
}

interface CategoryItemTitleProps {
  width: string;
}

interface CategoryItemProps {
  buttonText: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLElement>;
  width?: string;
}

const CategoryItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: fit-content;

  cursor: pointer;
`;

const CategoryItemButton = styled.button<CategoryItemButtonProps>`
  ${({ theme, width }) => `
    width: ${width};
    height: ${width};

    box-shadow: 1px 1px 1px ${theme.secondary};
    background-color: ${theme.white};
    color: ${theme.black};
  `}
  padding: 0.5em;

  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  border-radius: 0.5em;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

const CategoryItemTitle = styled.p<CategoryItemTitleProps>`
  ${({ theme, width }) => `
    width: ${width};
    color: ${theme.black};
  `}
  padding: 0.2em;
  text-align: center;
`;

function CategoryItem({
  buttonText,
  children,
  width = "fit-content",
  onClick,
  ...rest
}: CategoryItemProps) {
  return (
    <CategoryItemContainer onClick={onClick} {...rest}>
      <CategoryItemButton width={width}>{buttonText}</CategoryItemButton>
      <CategoryItemTitle width={width}>{children}</CategoryItemTitle>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
