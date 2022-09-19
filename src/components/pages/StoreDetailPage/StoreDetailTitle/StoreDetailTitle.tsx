import { useContext } from "react";

import { campusContext } from "context/CampusContextProvider";

import Star from "components/common/Star/Star";

import * as S from "components/pages/StoreDetailPage/StoreDetailTitle/StoreDetailTitle.style";

interface StoreDetailTitleProps {
  storeInfo: {
    id: number;
    name: string;
    address: string;
    distance: number;
    kakaoMapUrl: string;
    imageUrl: string;
    rating: number;
  };
}

function StoreDetailTitle({
  storeInfo: { name, rating, address, distance, kakaoMapUrl },
}: StoreDetailTitleProps) {
  const campus = useContext(campusContext);

  return (
    <S.TitleContainer>
      <S.TitleRatingWrapper>
        <h2>{name}</h2>
        <div>
          <Star isFilled />
          <S.RatingWrapper>{rating?.toFixed(2) || "0.00"}</S.RatingWrapper>
        </div>
      </S.TitleRatingWrapper>
      <S.DescriptionWrapper>
        <p>{address}</p>
        <p>
          {campus} 캠퍼스 기준 도보 {distance}분
        </p>
        <S.KakaoLink href={kakaoMapUrl} target="_blank">
          카카오 맵으로 열기
        </S.KakaoLink>
      </S.DescriptionWrapper>
    </S.TitleContainer>
  );
}

export default StoreDetailTitle;
