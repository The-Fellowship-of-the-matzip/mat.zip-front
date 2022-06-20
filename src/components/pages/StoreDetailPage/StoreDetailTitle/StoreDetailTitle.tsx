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
          <S.RatingWrapper>{rating?.toString() ?? "0.0"}</S.RatingWrapper>
        </div>
      </S.TitleRatingWrapper>
      <S.DescriptionWrapper>
        <div>{address}</div>
        <div>
          {campus} 캠퍼스 기준 도보 {distance}분
        </div>
        <div>
          <a href={kakaoMapUrl}>카카오 맵으로 열기</a>
        </div>
      </S.DescriptionWrapper>
    </S.TitleContainer>
  );
}

export default StoreDetailTitle;
