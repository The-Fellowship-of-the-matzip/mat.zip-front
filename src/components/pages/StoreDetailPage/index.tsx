import { useState } from "react";

import ReviewInputBottomSheet from "components/pages/StoreDetailPage/ReviewInputBottomSheet/ReviewInputBottomSheet";
import StoreDetailTitle from "components/pages/StoreDetailPage/StoreDetailTitle/StoreDetailTitle";
import StoreReviewItem from "components/pages/StoreDetailPage/StoreReviewItem/StoreReviewItem";
import * as S from "components/pages/StoreDetailPage/index.style";

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
    <S.StoreDetailPageContainer>
      <S.StoreThumbnailWrapper>
        <img alt="가게 이미지" src={tempReviewInfo.userThumbnail} />
      </S.StoreThumbnailWrapper>
      <S.StoreReviewContentWrapper>
        <StoreDetailTitle storeInfo={tempStoreInfo} />
        <S.ReviewListWrapper>
          <h2>리뷰</h2>
          <StoreReviewItem reviewInfo={tempReviewInfo} />
          <StoreReviewItem reviewInfo={tempReviewInfo} />
          <StoreReviewItem reviewInfo={tempReviewInfo} />
          <StoreReviewItem reviewInfo={tempReviewInfo} />
          <StoreReviewItem reviewInfo={tempReviewInfo} />
          <StoreReviewItem reviewInfo={tempReviewInfo} />
        </S.ReviewListWrapper>
      </S.StoreReviewContentWrapper>
      <S.ReviewPlusButton onClick={() => setIsReviewOpen(true)}>
        +
      </S.ReviewPlusButton>
      {isReviewOpen && (
        <ReviewInputBottomSheet
          closeSheet={() => setIsReviewOpen(false)}
          onSubmit={onSubmitReview}
        />
      )}
    </S.StoreDetailPageContainer>
  );
}

export default StoreDetailPage;
