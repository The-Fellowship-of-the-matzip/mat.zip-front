import styled from "styled-components";

export const MeatballMenuButton = styled.button`
  background-color: transparent;
  border: none;

  & > svg {
    fill: ${({ theme }) => theme.color.gray600};
  }
`;
