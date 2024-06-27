import Heart from "../Heart/Heart";
import Text from "../Text/Text";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import type { StoreItemWithHeart } from "types/common";
import { getRandomEmptyReviewMessage } from "util/randomUtils";

import { ACCESS_TOKEN } from "constants/api";
import { PATHNAME } from "constants/routes";

import { campusContext } from "context/CampusContextProvider";

import { useMarked } from "hooks/useMarked";

import Star from "components/common/Star/Star";
import * as S from "components/common/StoreListItem/StoreListItem.style";

function StoreListItemWithHeart({
  id,
  thumbnailUrl,
  name,
  distance,
  rating,
  reviewCount,
  liked,
}: StoreItemWithHeart) {
  const { marked, handleMarked } = useMarked(liked);
  const navigate = useNavigate();
  const campusName = useContext(campusContext);

  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

  return (
    <S.ListItemContainer
      onClick={() => {
        navigate(`${PATHNAME.STORE_DETAIL}/${id}`);
      }}
    >
      <S.ListItemThumbnail src={thumbnailUrl} alt={name} />
      <S.ListItemTextContainer>
        <S.ListItemName>{name}</S.ListItemName>
        <S.ListItemStars>
          {reviewCount !== 0 ? (
            <>
              <Star size="sm" isFilled />
              <Text css={S.ratingTextStyle}>{rating.toFixed(1)}</Text>
            </>
          ) : (
            <>
              <Star size="sm" />
              <Text css={S.subTextStyle}>{getRandomEmptyReviewMessage()}</Text>
            </>
          )}
        </S.ListItemStars>
        <Text size="sm" css={S.subTextStyle}>
          {campusName} 캠퍼스 기준 도보 {distance}분
        </Text>
      </S.ListItemTextContainer>
      <S.ListItemBookmark onClick={(event) => handleMarked(event, id)}>
        {accessToken && marked ? (
          <Heart size="sm" isFilled />
        ) : (
          <Heart size="sm" />
        )}
      </S.ListItemBookmark>
    </S.ListItemContainer>
  );
}

export default StoreListItemWithHeart;
