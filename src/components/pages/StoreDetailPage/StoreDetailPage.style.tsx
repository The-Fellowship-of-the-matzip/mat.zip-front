import styled, { css } from "styled-components";

import Image from "components/common/Image/Image";

export const StoreDetailPageContainer = styled.section`
  position: relative;
  width: 100%;
  height: fit-content;
  padding-bottom: ${({ theme }) => theme.spacer.spacing5};

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
`;

export const StorePreviewImage = styled(Image)`
  width: 100%;
  height: 24rem;

  object-fit: cover;
  object-position: center;
`;

export const StoreReviewContentWrapper = styled.article`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacer.spacing4};
  padding: 0 ${({ theme }) => theme.spacer.spacing3};
`;

export const ReviewListContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacer.spacing6};
`;

export const ReviewListWrapper = styled.ul`
  margin-top: ${({ theme }) => theme.spacer.spacing4};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing3};
`;

export const reviewButtonStyle = css`
  position: fixed;
  right: ${({ theme }) => theme.spacer.spacing4};
  bottom: ${({ theme }) => theme.spacer.spacing4};

  width: 4.8rem;
  height: 4.8rem;

  border-radius: 50%;
  z-index: 101;

  & > svg {
    & path {
      stroke-width: 2px;
      stroke: ${({ theme }) => theme.color.white};
    }
  }
`;
