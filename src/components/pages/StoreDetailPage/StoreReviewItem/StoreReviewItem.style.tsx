import styled, { css } from "styled-components";

import Image from "components/common/Image/Image";

export const StoreReviewContainer = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.spacer.spacing4};

  width: 100%;
  height: fit-content;

  border: none;
  border-radius: 0.25rem;
`;

export const UserProfileImage = styled(Image)`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const ReviewContentWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacer.spacing2};

  display: flex;
  justify-content: space-between;
`;

export const UserReviewInfoWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacer.spacing1};
`;

export const ReviewBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacer.spacing3};
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacer.spacing1};
`;

export const DropBoxButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 12px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  background-color: ${({ theme }) => theme.color.white};
`;

export const DropBoxButton = styled.button`
  padding: 10px;

  background-color: transparent;
  border: none;
  white-space: nowrap;

  &:hover {
    font-weight: 700;
  }
`;

export const ReviewImage = styled.img`
  height: 10rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const titleTextStyle = css`
  font-weight: 600;
`;

export const subTextStyle = css`
  color: ${({ theme }) => theme.color.gray600};
  font-weight: 600;
`;

export const subTextNumberStyle = css`
  color: ${({ theme }) => theme.color.gray600};
`;

export const bodyTextStyle = css`
  max-height: 16rem;
  overflow: hidden;
  word-break: break-all;
`;

export const menuTextStyle = css`
  color: ${({ theme }) => theme.color.gray600};
  align-self: flex-end;
`;
