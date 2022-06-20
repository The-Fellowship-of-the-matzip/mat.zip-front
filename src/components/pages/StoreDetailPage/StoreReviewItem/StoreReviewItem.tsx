import repeatComponent from "util/repeatComponent";

import Star from "components/common/Star/Star";

import * as S from "components/pages/StoreDetailPage/StoreReviewItem/StoreReviewItem.style";

interface StoreReviewItemProps {
  reviewInfo: {
    id: number;
    profileImage: string;
    rating: number;
    content: string;
    menu: string;
  };
}

function StoreReviewItem({ reviewInfo }: StoreReviewItemProps) {
  const { profileImage, rating, content, menu } = reviewInfo;

  return (
    <S.StoreReviewContainer>
      <S.UserProfileWrapper>
        <img src={profileImage} alt="유저의 프로필이 보여지는 곳" />
      </S.UserProfileWrapper>
      <S.ReviewContentWrapper>
        <S.Header>
          <S.HeaderLeftWrapper>
            {repeatComponent(<Star isFilled />, rating)}
            <S.RatingPlaceholder>
              {rating === 0 && <p>준비 중..</p>}
            </S.RatingPlaceholder>
          </S.HeaderLeftWrapper>
          <S.MenuWrapper>{menu}</S.MenuWrapper>
        </S.Header>
        <S.ContentWrapper>{content}</S.ContentWrapper>
      </S.ReviewContentWrapper>
    </S.StoreReviewContainer>
  );
}

export default StoreReviewItem;
