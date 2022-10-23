import { useContext } from "react";
import { useNavigate } from "react-router-dom";

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
}

function StoreListItem({
  id,
  thumbnailUrl,
  name,
  distance,
  rating,
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
        <S.ListItemDistance>
          {campusName} 캠퍼스 기준 도보 {distance}분
        </S.ListItemDistance>
        <S.ListItemStars>
          <Star isFilled /> <S.RatingText>{rating.toFixed(2)}</S.RatingText>
        </S.ListItemStars>
      </S.ListItemTextContainer>
    </S.ListItemContainer>
  );
}

export default StoreListItem;
