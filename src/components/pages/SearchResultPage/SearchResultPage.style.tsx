import styled from "styled-components";

export const SearchResultPageContainer = styled.section`
  padding: ${({ theme }) => theme.spacer.spacing3};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ChipContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacer.spacing5};
  display: flex;
  gap: ${({ theme }) => theme.spacer.spacing3};
`;
