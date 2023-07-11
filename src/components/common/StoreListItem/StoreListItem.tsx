import Heart from "../Heart/Heart";
import Text from "../Text/Text";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import type { Store } from "types/common";
import { getRandomEmptyReviewMessage } from "util/randomUtils";

import { PATHNAME } from "constants/routes";

import { campusContext } from "context/CampusContextProvider";
import { LoginContext } from "context/LoginContextProvider";

import { useMarked } from "hooks/useMarked";

import Star from "components/common/Star/Star";
import * as S from "components/common/StoreListItem/StoreListItem.style";

interface StoreListItemProps
  extends Pick<
    Store,
    "id" | "name" | "distance" | "rating" | "reviewCount" | "liked"
  > {
  thumbnailUrl: string;
}

function StoreListItem({
  id,
  thumbnailUrl,
  name,
  distance,
  rating,
  reviewCount,
  liked,
}: StoreListItemProps) {
  const isLoggedIn = useContext(LoginContext);
  const campusName = useContext(campusContext);
  const { marked, handleMarked } = useMarked(id, liked);
  const navigate = useNavigate();

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
      <S.ListItemBookmark onClick={handleMarked}>
        {isLoggedIn && marked ? (
          <Heart size="sm" isFilled />
        ) : (
          <Heart size="sm" />
        )}
      </S.ListItemBookmark>
    </S.ListItemContainer>
  );
}

export default StoreListItem;
