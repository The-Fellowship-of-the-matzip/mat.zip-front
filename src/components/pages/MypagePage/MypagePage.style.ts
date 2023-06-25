import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacer.spacing3};

  & > section:not(:first-child) {
    margin-top: ${({ theme }) => theme.spacer.spacing5};
  }
`;

export const SectionHeaderWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacer.spacing4};

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > header {
    margin-bottom: 0;
  }
`;

export const ShowAllLink = styled(Link)`
  display: flex;
  gap: ${({ theme }) => theme.spacer.spacing1};
  align-items: center;

  & > p {
    color: ${({ theme }) => theme.color.gray600};
  }
`;

export const EmptyList = styled.div`
  padding: ${({ theme }) => theme.spacer.spacing7} 0;
  color: ${({ theme }) => theme.color.gray600};
  text-align: center;
`;

export const ReviewItemWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacer.spacing3};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing3};
`;
