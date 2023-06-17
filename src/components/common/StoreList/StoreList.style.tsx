import styled from "styled-components";

export const StoreListContainer = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing3}; ;
`;
