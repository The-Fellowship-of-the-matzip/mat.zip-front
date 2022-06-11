import styled from "styled-components";

interface CategoryItemButtonProps {
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

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

const CategoryItemDesc = styled.p`
  ${({ theme }) => `
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
      <CategoryItemDesc>{children}</CategoryItemDesc>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
