import styled from "styled-components";

export const CategoryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacer.spacing4};
  justify-items: center;
  align-items: flex-start;
`;
