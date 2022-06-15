import Star from "components/common/Star/Star";

import * as S from "components/pages/StoreDetailPage/StoreDetailTitle/StoreDetailTitle.style";

interface StoreDetailTitleProps {
  storeInfo: {
    name: string;
    rating: number;
    desc: string;
  };
}

function StoreDetailTitle({ storeInfo }: StoreDetailTitleProps) {
  const { name, rating, desc } = storeInfo;
  return (
    <S.TitleContainer>
      <S.TitleRatingWrapper>
        <h2>{name}</h2>
        <div>
          <Star isFilled />
          <S.RatingWrapper>{rating}</S.RatingWrapper>
        </div>
      </S.TitleRatingWrapper>
      <S.DescriptionWrapper>{desc}</S.DescriptionWrapper>
    </S.TitleContainer>
  );
}

export default StoreDetailTitle;
