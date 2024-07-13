import styled from "styled-components";

export const CategoryDetailPageContainer = styled.section`
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

export const ChipContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FilterOptionContainer = styled.section`
  max-height: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const FilterOption = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  cursor: pointer;
`;
