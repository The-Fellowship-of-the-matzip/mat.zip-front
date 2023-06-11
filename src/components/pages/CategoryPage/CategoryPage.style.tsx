import styled from "styled-components";

export const CategoryPageContainer = styled.div`
  padding: ${({ theme }) => theme.spacer.spacing3};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacer.spacing6};
`;
