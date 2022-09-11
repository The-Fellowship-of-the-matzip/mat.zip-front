import styled, { css } from "styled-components";

import Image from "components/common/Image/Image";

export const StoreReviewContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: fit-content;
  padding: 1rem 1.25rem;

  box-shadow: 0 0 0.15rem ${({ theme }) => theme.black};
  border: none;
  border-radius: 0.25rem;
`;

export const UserProfileImage = styled(Image)`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 0 0.2rem ${({ theme }) => theme.primary};
`;

export const ReviewContentWrapper = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.25rem;
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  padding-bottom: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 0.065rem solid ${({ theme }) => theme.secondary};
`;

export const ReviewBottom = styled.div`
  min-height: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuWrapper = styled.div`
  color: ${({ theme }) => theme.secondary};
  align-self: flex-end;
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  word-break: break-all;
`;

export const RatingPlaceholder = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary};
`;

export const MeatballButtonContainer = styled.div`
  padding: 0 0.125rem;

  border-radius: 45%;
  box-shadow: 0 0 0.125rem ${({ theme }) => theme.secondary};
`;

export const DropBoxButtonList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    padding: 0.5rem;

    background-color: ${theme.white};

    & > li:first-of-type {
      padding-bottom: 0.5rem;
      border-bottom: 1px solid ${theme.secondary};
    }
  `}
`;

export const DropBoxButton = styled.button`
  ${({ theme }) => css`
    padding: 10px;

    background-color: transparent;
    border: none;
    white-space: nowrap;

    &:hover {
      font-weight: 700;
    }
  `}
`;
