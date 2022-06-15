import Star from "components/common/Star/Star";

import * as S from "components/pages/StoreDetailPage/StoreReviewItem/StoreReviewItem.style";

interface StoreReviewItemProps {
  reviewInfo: {
    userThumbnail: string;
    rating: number;
    desc: string;
    menuName: string;
  };
}

function StoreReviewItem({ reviewInfo }: StoreReviewItemProps) {
  const { userThumbnail, rating, desc, menuName } = reviewInfo;
  return (
    <S.StoreReviewContainer>
      <S.UserProfileWrapper>
        <img src={userThumbnail} alt="유저의 프로필이 보여지는 곳" />
      </S.UserProfileWrapper>
      <S.ReviewContentWrapper>
        <S.Header>
          <S.HeaderLeftWrapper>
            {Array.from({ length: rating }).map((item, index) => (
              <Star key={index} isFilled />
            ))}
          </S.HeaderLeftWrapper>
          <S.MenuWrapper>{menuName}</S.MenuWrapper>
        </S.Header>
        <S.ContentWrapper>{desc}</S.ContentWrapper>
      </S.ReviewContentWrapper>
    </S.StoreReviewContainer>
  );
}

export default StoreReviewItem;
