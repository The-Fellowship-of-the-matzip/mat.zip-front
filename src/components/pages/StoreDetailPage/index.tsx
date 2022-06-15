import { useState } from "react";

import ReviewInputBottomSheet from "components/pages/StoreDetailPage/ReviewInputBottomSheet";
import StoreDetailTitle from "components/pages/StoreDetailPage/StoreDetailTitle";
import StoreReviewItem from "components/pages/StoreDetailPage/StoreReviewItem";

import styled from "styled-components";

const StoreDetailPageContainer = styled.section`
  position: relative;
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6rem;
  background-color: ${({ theme }) => theme.white};
`;

const StoreThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  overflow: hidden;

  & > img {
    width: 100%;
    height: fit-content;
    object-fit: contain;
  }
`;

const StoreReviewContentWrapper = styled.article`
  width: 85%;
  margin-top: 2rem;
`;

const ReviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const ReviewPlusButton = styled.button`
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
    background-color: ${({ theme }) => theme.yellow};
  }
`;

function StoreDetailPage() {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const onSubmitReview = () => {};
  const tempStoreInfo = {
    name: "치킨집",
    rating: 4.2,
    desc: "잠실 캠퍼스 기준 0.5km",
  };
  const tempReviewInfo = {
    userThumbnail:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    rating: 4,
    desc: "skdjflskjdfalkjsdfajaklsfd",
    menuName: "후라이드 치킨",
  };
  return (
    <StoreDetailPageContainer>
      <StoreThumbnailWrapper>
        <img alt="가게 이미지" src={tempReviewInfo.userThumbnail} />
      </StoreThumbnailWrapper>
      <StoreReviewContentWrapper>
        <StoreDetailTitle storeInfo={tempStoreInfo} />
        <ReviewListWrapper>
          <h2>리뷰</h2>
          <StoreReviewItem reviewInfo={tempReviewInfo} />
          <StoreReviewItem reviewInfo={tempReviewInfo} />
          <StoreReviewItem reviewInfo={tempReviewInfo} />
          <StoreReviewItem reviewInfo={tempReviewInfo} />
          <StoreReviewItem reviewInfo={tempReviewInfo} />
          <StoreReviewItem reviewInfo={tempReviewInfo} />
        </ReviewListWrapper>
      </StoreReviewContentWrapper>
      <ReviewPlusButton onClick={() => setIsReviewOpen(true)}>
        +
      </ReviewPlusButton>
      {isReviewOpen && (
        <ReviewInputBottomSheet
          closeSheet={() => setIsReviewOpen(false)}
          onSubmit={onSubmitReview}
        />
      )}
    </StoreDetailPageContainer>
  );
}

export default StoreDetailPage;
