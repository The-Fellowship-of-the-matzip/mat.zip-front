import styled from "styled-components";

interface CategoryItemButtonProps {
  width: string;
}

export const CategoryItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  width: fit-content;

  cursor: pointer;
`;

export const CategoryItemButton = styled.button<CategoryItemButtonProps>`
  ${({ theme, width }) => `
    width: ${width};
    height: ${width};

    box-shadow: 0.065rem 0.065rem 0.065rem ${theme.primary};
    background-color: ${theme.primary};
    color: ${theme.white};
  `}
  padding: 0.5rem;

  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  border-radius: 0.5rem;
  border: none;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

export const CategoryItemDesc = styled.p`
  ${({ theme }) => `
    color: ${theme.black};
  `}
  padding: 0.2rem;
  text-align: center;
`;
