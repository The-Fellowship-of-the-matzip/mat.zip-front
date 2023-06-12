import Text from "../Text/Text";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomEmptyReviewMessage } from "util/randomUtils";

import { PATHNAME } from "constants/routes";

import { campusContext } from "context/CampusContextProvider";

import Star from "components/common/Star/Star";
import * as S from "components/common/StoreListItem/StoreListItem.style";

interface StoreListItemProps {
  id: number;
  thumbnailUrl: string;
  name: string;
  distance: number;
  rating: number;
  reviewCount: number;
}

function StoreListItem({
  id,
  thumbnailUrl,
  name,
  distance,
  rating,
  reviewCount,
}: StoreListItemProps) {
  const navigate = useNavigate();
  const campusName = useContext(campusContext);

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
              <Star isFilled />
              <Text css={S.ratingTextStyle}>{rating.toFixed(1)}</Text>
            </>
          ) : (
            <>
              <Star />
              <Text css={S.subTextStyle}>{getRandomEmptyReviewMessage()}</Text>
            </>
          )}
        </S.ListItemStars>
        <Text size="sm" css={S.subTextStyle}>
          {campusName} 캠퍼스 기준 도보 {distance}분
        </Text>
      </S.ListItemTextContainer>
    </S.ListItemContainer>
  );
}

export default StoreListItem;
