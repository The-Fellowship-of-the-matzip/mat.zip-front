import { useContext } from "react";
import { Store } from "types/common";
import { getRandomEmptyReviewMessage } from "util/randomUtils";
import repeatComponent from "util/repeatComponent";

import { ACCESS_TOKEN } from "constants/api";

import { campusContext } from "context/CampusContextProvider";

import { useMarked } from "hooks/useMarked";

import Heading from "components/common/Heading/Heading";
import Heart from "components/common/Heart/Heart";
import Star from "components/common/Star/Star";
import Text from "components/common/Text/Text";

import * as S from "components/pages/StoreDetailPage/StoreDetailTitle/StoreDetailTitle.style";

function StoreDetailTitle({
  storeInfo: {
    id,
    name,
    rating,
    reviewCount,
    address,
    distance,
    kakaoMapUrl,
    liked,
  },
}: {
  storeInfo: Store;
}) {
  const { marked, handleMarked } = useMarked(id, liked);
  const campus = useContext(campusContext);

  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

  return (
    <S.TitleContainer>
      <Heading size="sm">{name}</Heading>
      <S.BookmarkIconWrapper onClick={handleMarked}>
        {accessToken && marked ? (
          <Heart size="sm" isFilled />
        ) : (
          <Heart size="sm" />
        )}
      </S.BookmarkIconWrapper>
      <S.RatingContainer>
        <S.RatingWrapper>
          {rating > 0 ? (
            <>
              {repeatComponent(<Star isFilled />, rating)}
              {repeatComponent(<Star />, 5 - rating)}
              <Text css={S.ratingTextStyle}>{rating.toFixed(1)}</Text>
            </>
          ) : (
            <>
              <Star />
              <Text css={S.subTextStyle}>{getRandomEmptyReviewMessage()}</Text>
            </>
          )}
          {rating > 0 && (
            <Text size="sm" css={S.reviewCountStyle}>
              ({reviewCount})
            </Text>
          )}
        </S.RatingWrapper>
      </S.RatingContainer>
      <S.DescriptionWrapper>
        <Text size="sm">{address}</Text>
        <Text size="sm">
          {campus} 캠퍼스 기준 도보 {distance}분
        </Text>
        <div>
          <S.KakaoLink href={kakaoMapUrl} target="_blank">
            카카오 맵으로 열기
          </S.KakaoLink>
        </div>
      </S.DescriptionWrapper>
    </S.TitleContainer>
  );
}

export default StoreDetailTitle;
