import ImageSkeleton from "components/common/ImageSkeleton/ImageSkeleton";

import * as S from "components/pages/StoreDetailPage/StoreDetailPage.style";

function StoreDetailSkeleton() {
  return (
    <S.StoreDetailPageContainer>
      <ImageSkeleton width="100%" height="30rem" />
      <S.StoreReviewContentWrapper>
        <p>가게 정보를 불러오는 중입니다...</p>
      </S.StoreReviewContentWrapper>
    </S.StoreDetailPageContainer>
  );
}

export default StoreDetailSkeleton;
