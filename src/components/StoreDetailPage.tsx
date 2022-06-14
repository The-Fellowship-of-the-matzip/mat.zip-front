import { useState } from "react";
import styled from "styled-components";
import ReviewInputBottomSheet from "./ReviewInputBottomSheet";
import StoreDetailTitle from "./StoreDetailTitle";
import StoreReviewItem from "./StoreReviewItem";

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
  width: 100%;
  height: 10rem;
  background-color: blue;
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
    userThumbnail: "sdfsdfsfsfsd",
    rating: 4,
    desc: "skdjflskjdfalkjsdfajaklsfd",
    menuName: "후라이드 치킨",
  };
  return (
    <StoreDetailPageContainer>
      <StoreThumbnailWrapper>
        <img alt="가게 이미지" />
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
