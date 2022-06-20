import repeatComponent from "util/repeatComponent";

import Star from "components/common/Star/Star";

import * as S from "components/pages/StoreDetailPage/StoreReviewItem/StoreReviewItem.style";

interface StoreReviewItemProps {
  reviewInfo: {
    id: number;
    author: { username: string; profileImage: string };
    rating: number;
    content: string;
    menu: string;
  };
}

function StoreReviewItem({ reviewInfo }: StoreReviewItemProps) {
  const { author, rating, content, menu } = reviewInfo;

  return (
    <S.StoreReviewContainer>
      <S.UserProfileWrapper>
        <img
          src={author.profileImage}
          alt={`${author.username} 유저의 프로필 이미지`}
        />
      </S.UserProfileWrapper>
      <S.ReviewContentWrapper>
        <S.Header>
          <div>{author.username}</div>
          <div>{repeatComponent(<Star isFilled />, rating)}</div>
        </S.Header>
        <S.ReviewBottom>
          <S.ContentWrapper>{content}</S.ContentWrapper>
          <S.MenuWrapper>{menu}</S.MenuWrapper>
        </S.ReviewBottom>
      </S.ReviewContentWrapper>
    </S.StoreReviewContainer>
  );
}

export default StoreReviewItem;
