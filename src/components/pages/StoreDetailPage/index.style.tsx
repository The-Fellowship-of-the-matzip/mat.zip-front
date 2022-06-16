import styled from "styled-components";

export const StoreDetailPageContainer = styled.section`
  position: relative;
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
  background-color: ${({ theme }) => theme.white};
`;

export const StoreThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 15rem;
  overflow: hidden;

  & > img {
    width: 100%;
    height: fit-content;
    object-fit: contain;
  }
`;

export const StoreReviewContentWrapper = styled.article`
  width: 85%;
  margin-top: 2rem;
`;

export const ReviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const ReviewPlusButton = styled.button`
  position: fixed;
  font-size: 2rem;
  right: 10%;
  bottom: 2rem;

  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.white};
  border: none;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50%;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.9;
  }
`;
